import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { projects } from '../source/src/data/projects.js';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const siteOrigin = 'https://jaydigitalstudio.com';

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

const replaceMeta = (document, attribute, name, value) => document.replace(
  new RegExp(`<meta ${attribute}="${name}" content="[^"]*" \\/>`),
  `<meta ${attribute}="${name}" content="${escapeAttribute(value)}" />`
);

const withProjectMetadata = (document, project) => {
  const title = `${project.title} — Jay Digital Studio`;
  const description = project.intro.length > 190 ? `${project.intro.slice(0, 187).trimEnd()}…` : project.intro;
  const url = `${siteOrigin}/works/${project.slug}`;
  const primaryImage = project.gallery[0];
  const image = `${siteOrigin}${primaryImage.src}`;
  let result = document
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`);

  result = replaceMeta(result, 'name', 'description', description);
  result = replaceMeta(result, 'property', 'og:title', title);
  result = replaceMeta(result, 'property', 'og:description', description);
  result = replaceMeta(result, 'property', 'og:url', url);
  result = replaceMeta(result, 'property', 'og:image', image);
  result = replaceMeta(result, 'property', 'og:image:alt', primaryImage.alt);
  result = replaceMeta(result, 'name', 'twitter:title', title);
  result = replaceMeta(result, 'name', 'twitter:description', description);
  result = replaceMeta(result, 'name', 'twitter:image', image);
  result = replaceMeta(result, 'name', 'twitter:image:alt', primaryImage.alt);
  return result
    .replace(/\s*<meta property="og:image:type"[^>]*>/, '')
    .replace(/\s*<meta property="og:image:width"[^>]*>/, '')
    .replace(/\s*<meta property="og:image:height"[^>]*>/, '');
};

await copyFile(resolve(root, 'index.html'), resolve(root, '404.html'));
await mkdir(resolve(root, 'works'), { recursive: true });
await writeFile(resolve(root, 'works/index.html'), html);
for (const project of projects) {
  const target = resolve(root, 'works', project.slug);
  await mkdir(target, { recursive: true });
  await writeFile(resolve(target, 'index.html'), withProjectMetadata(html, project));
}
