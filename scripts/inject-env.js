#!/usr/bin/env node
/**
 * Injects Supabase credentials from environment variables into index.html.
 * Runs during Vercel build step so .env values never live in the committed source.
 */
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(process.cwd(), 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const url = process.env.SUPABASE_URL || '';
const key = process.env.SUPABASE_ANON_KEY || '';

// Replace the empty-string fallbacks in the env-var reading logic
html = html.replace(
  "import.meta.env.NEXT_PUBLIC_SUPABASE_URL)) ||\n        '';",
  `import.meta.env.NEXT_PUBLIC_SUPABASE_URL)) ||\n        '${url}';`
);
html = html.replace(
  "import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||\n        '';",
  `import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)) ||\n        '${key}';`
);

fs.writeFileSync(htmlPath, html);
console.log('✓ Injected Supabase credentials into index.html');
