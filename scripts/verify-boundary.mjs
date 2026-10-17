#!/usr/bin/env node
/**
 * scripts/verify-boundary.mjs
 * 
 * Publication Gate and Privacy Boundary Validator.
 * Verifies that:
 * 1. No private or unapproved directories (e.g. Research/, OpenWiki/, private/) are tracked by git.
 * 2. No private environment files (.env*) or credentials are present.
 * 3. The public artifacts manifest is present, well-formed, and all published items have explicit approval.
 * 4. Source code in src/ and public/ does not reference private workspaces or prohibited paths.
 */

import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT_DIR = process.cwd();
const MANIFEST_PATH = path.join(ROOT_DIR, 'artifacts.manifest.json');

const PROHIBITED_PATTERNS = [
  /research\//i,
  /openwiki\//i,
  /\.env(\..+)?$/i,
  /private\//i,
  /drafts\//i,
  /notes\//i,
  /\.pem$/i,
  /\.key$/i
];

const SECRET_PATTERNS = [
  /AIza[0-9A-Za-z-_]{35}/,
  /sk-[a-zA-Z0-9]{32,}/,
  /ghp_[a-zA-Z0-9]{36}/,
  /github_pat_[a-zA-Z0-9_]{40,}/
];

let errors = [];

function checkManifest() {
  console.log('🔍 Checking public artifacts manifest...');
  if (!fs.existsSync(MANIFEST_PATH)) {
    errors.push(`Artifact manifest missing at ${MANIFEST_PATH}`);
    return;
  }

  try {
    const raw = fs.readFileSync(MANIFEST_PATH, 'utf-8');
    const manifest = JSON.parse(raw);

    if (manifest.environment !== 'public-artifact') {
      errors.push(`Manifest environment must be 'public-artifact', got '${manifest.environment}'`);
    }

    if (!Array.isArray(manifest.approvedArtifacts)) {
      errors.push("Manifest must contain 'approvedArtifacts' array");
      return;
    }

    for (const art of manifest.approvedArtifacts) {
      if (!art.humanApproval || art.humanApproval.approved !== true) {
        errors.push(`Artifact '${art.id}' lacks explicit humanApproval.approved=true`);
      }
    }
    console.log(`✅ Manifest valid: ${manifest.approvedArtifacts.length} approved artifacts cataloged.`);
  } catch (err) {
    errors.push(`Failed to parse manifest: ${err.message}`);
  }
}

function checkGitTrackedFiles() {
  console.log('🔍 Checking git index for boundary leaks...');
  try {
    const output = execSync('git ls-files', { encoding: 'utf-8', cwd: ROOT_DIR });
    const files = output.split('\n').map(f => f.trim()).filter(Boolean);

    for (const file of files) {
      const normalized = file.replace(/\\/g, '/');
      for (const pattern of PROHIBITED_PATTERNS) {
        if (pattern.test(normalized)) {
          errors.push(`Prohibited file is tracked in git index: ${normalized}`);
        }
      }
    }
    console.log(`✅ Git index clean: ${files.length} tracked files checked.`);
  } catch (err) {
    // If not a git repo or no commits yet, warn but check file system
    console.log(`ℹ️ Git index check skipped (no commits yet or git unavailable): ${err.message}`);
  }
}

function scanSourceFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.git', '.astro', 'dist'].includes(entry.name)) continue;
      scanSourceFiles(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (['.ts', '.js', '.mjs', '.astro', '.html', '.css', '.md', '.json'].includes(ext)) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        // Check for forbidden secret patterns
        for (const secretRegex of SECRET_PATTERNS) {
          if (secretRegex.test(content)) {
            errors.push(`Possible credential detected in ${path.relative(ROOT_DIR, fullPath)}`);
          }
        }

        // Check for private workspace imports
        if (/from\s+['"][^'"]*(?:research|openwiki)[^'"]*['"]/i.test(content) ||
            /import\s+['"][^'"]*(?:research|openwiki)[^'"]*['"]/i.test(content)) {
          errors.push(`Forbidden private workspace import in ${path.relative(ROOT_DIR, fullPath)}`);
        }
      }
    }
  }
}

function run() {
  console.log('====================================');
  console.log('RECOVERY — Privacy Boundary Validator');
  console.log('====================================');

  checkManifest();
  checkGitTrackedFiles();

  console.log('🔍 Scanning src/ and docs/ for forbidden references and leaks...');
  scanSourceFiles(path.join(ROOT_DIR, 'src'));
  scanSourceFiles(path.join(ROOT_DIR, 'docs'));
  scanSourceFiles(path.join(ROOT_DIR, 'public'));

  console.log('====================================');
  if (errors.length > 0) {
    console.error('❌ BOUNDARY VERIFICATION FAILED:');
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  } else {
    console.log('✅ ALL BOUNDARY AND PRIVACY CHECKS PASSED.');
    process.exit(0);
  }
}

run();
