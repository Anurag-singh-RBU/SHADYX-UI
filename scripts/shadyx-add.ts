import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import process from 'process';
import { execSync } from 'child_process';

async function installComponent(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`❌ Failed to fetch component from ${url}`);
    process.exit(1);
  }

  const data = await res.json();

  for (const file of data.files) {
    const fullPath = path.join(process.cwd(), file.path);
    await mkdir(path.dirname(fullPath), { recursive: true });
    await writeFile(fullPath, file.content, 'utf8');
    console.log(`✅ Created: ${file.path}`);
  }

  if (data.dependencies?.length > 0) {
    console.log(`📦 Installing dependencies: ${data.dependencies.join(', ')}`);
    execSync(`bun add ${data.dependencies.join(' ')}`, { stdio: 'inherit' });
  }

  console.log(`🎉 Installed component: ${data.name}`);
}

const url = process.argv[2];
if (!url) {
  console.error('❌ Usage: bun run scripts/shadyx-add.ts <component-url>');
  process.exit(1);
}

installComponent(url);
