#!/usr/bin/env node
/**
 * Injects Supabase credentials from environment variables into index.html.
 * Runs during Vercel build step so credentials never live in committed source.
 */
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('✗ index.html not found at:', htmlPath);
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

console.log('Debug — SUPABASE_URL set:', url.length > 0 ? 'yes (' + url.length + ' chars)' : 'NO');
console.log('Debug — SUPABASE_ANON_KEY set:', key.length > 0 ? 'yes (' + key.length + ' chars)' : 'NO');

// Verify the pattern exists in the file before replacing
const urlPattern = "import.meta.env.NEXT_PUBLIC_SUPABASE_URL)) ||\n        '';";
const keyPattern = "import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||\n        '';";

console.log('Debug — URL pattern found:', html.includes(urlPattern) ? 'yes' : 'NO');
console.log('Debug — KEY pattern found:', html.includes(keyPattern) ? 'yes' : 'NO');

// Replace the empty-string fallbacks in the env-var reading logic
html = html.replace(urlPattern, `import.meta.env.NEXT_PUBLIC_SUPABASE_URL)) ||\n        '${url}';`);
html = html.replace(keyPattern, `import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||\n        '${key}';`);

fs.writeFileSync(htmlPath, html);

// Verify the write worked
const updated = fs.readFileSync(htmlPath, 'utf8');
console.log('Debug — URL injected:', updated.includes(url) ? 'yes' : 'NO');
console.log('✓ Injected Supabase credentials into index.html');
