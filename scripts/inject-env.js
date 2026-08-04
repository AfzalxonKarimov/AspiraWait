#!/usr/bin/env node
/**
 * Injects Supabase credentials from environment variables into index.html.
 * Runs during the Vercel build step so credentials never live in committed source.
 */
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('✗ index.html not found at:', htmlPath);
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf8');

const url  = process.env.SUPABASE_URL  || '';
const key  = process.env.SUPABASE_ANON_KEY || '';

// The empty-string fallback we are looking for (includes the trailing semicolon
// that terminates the const declaration in index.html)
const EMPTY_FALLBACK = "'';";

const lines = html.split('\n');
let injected = { url: false, key: false };

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  if (!injected.url && line.includes('NEXT_PUBLIC_SUPABASE_URL)) ||')) {
    const next = lines[i + 1];
    if (next && next.trim() === EMPTY_FALLBACK) {
      lines[i + 1] = next.replace(EMPTY_FALLBACK, `'${url}';`);
      injected.url = true;
    }
  }

  if (!injected.key && line.includes('NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||')) {
    const next = lines[i + 1];
    if (next && next.trim() === EMPTY_FALLBACK) {
      lines[i + 1] = next.replace(EMPTY_FALLBACK, `'${key}';`);
      injected.key = true;
    }
  }
}

html = lines.join('\n');
fs.writeFileSync(htmlPath, html);

console.log('✓ Injected Supabase credentials into index.html',
  injected.url ? '✅' : '❌ url missing',
  injected.key ? '✅' : '❌ key missing'
);
