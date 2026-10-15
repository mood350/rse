// Télécharge les photos Unsplash dans public/photos/<clé>.jpg
// Usage : npm run photos   (nécessite une connexion Internet)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = await readFile(path.join(root, 'src/data/photos.ts'), 'utf8');
const re = /(\w+):\s*\{\s*id:\s*'([^']+)'/g;
const out = path.join(root, 'public/photos');
await mkdir(out, { recursive: true });

let ok = 0;
let ko = 0;
for (const m of src.matchAll(re)) {
  const [, key, id] = m;
  const file = path.join(out, `${key}.jpg`);
  if (existsSync(file)) {
    console.log(`= ${key} (déjà présent)`);
    continue;
  }
  const url = `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=80`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log(`✓ ${key}`);
    ok++;
  } catch (e) {
    console.log(`✗ ${key} : ${e.message}`);
    ko++;
  }
}
console.log(`\nTerminé : ${ok} téléchargée(s), ${ko} échec(s).`);
