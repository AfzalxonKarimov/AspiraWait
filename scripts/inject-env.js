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

// Robust line-by-line injection: find the env-var lines and replace
// the empty-string fallback on the next line with the real value.
const lines = html.split('\n');
let urlInjected = false;
let keyInjected = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match: ... import.meta.env.NEXT_PUBLIC_SUPABASE_URL)) ||
  if (!urlInjected && line.includes('NEXT_PUBLIC_SUPABASE_URL)) ||')) {
    console.log('Debug — URL context line found at line', i + 1, ':', line.trim().slice(0, 80));
    const next = lines[i + 1];
    console.log('Debug — Next line:', JSON.stringify(next?.trim()));
    if (next && next.trim() === "''") {
      lines[i + 1] = next.replace("''", `'${url}'`);
      console.log('Debug — URL fallback replaced');
      urlInjected = true;
    }
  }

  // Match: ... import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||
  if (!keyInjected && line.includes('NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||')) {
    console.log('Debug — KEY context line found at line', i + 1, ':', line.trim().slice(0, 80));
    const next = lines[i + 1];
    console.log('Debug — Next line:', JSON.stringify(next?.trim()));
    if (next && next.trim() === "''") {
      lines[i + 1] = next.replace("''", `'${key}'`);
      console.log('Debug — KEY fallback replaced');
      keyInjected = true;
    }
  }
}

html = lines.join('\n');
fs.writeFileSync(htmlPath, html);

console.log('Debug — URL injected:', urlInjected);
console.log('Debug — KEY injected:', keyInjected);
console.log('✓ Injected Supabase credentials into index.html');
