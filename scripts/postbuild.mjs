import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const projectSlugs = [
  'world-of-volvo', 'lf-digital-derby', 'volvo-cars-ar', 'faurecia',
  'weret-watch', 'google-chromebook', 'gordon-murray', 'esab', 'magna',
  'volvo-group-ar', 'geely-motors'
];

await copyFile(resolve(root, 'index.html'), resolve(root, '404.html'));
await mkdir(resolve(root, 'works'), { recursive: true });
await writeFile(resolve(root, 'works/index.html'), html);
for (const slug of projectSlugs) {
  const target = resolve(root, 'works', slug);
  await mkdir(target, { recursive: true });
  await writeFile(resolve(target, 'index.html'), html);
}
