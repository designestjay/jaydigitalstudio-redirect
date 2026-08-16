import { readdir, unlink } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const assets = resolve(root, 'assets');
const generated = /^(app-|ProjectPage-|NotFoundPage-|index-).+\.(?:js|css)$/;

for (const file of await readdir(assets).catch(() => [])) {
  if (generated.test(file)) await unlink(resolve(assets, file));
}
