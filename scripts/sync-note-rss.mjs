import { readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseNoteRss } from './note-rss.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputPath = resolve(root, 'public/data/note-posts.json');
const feedUrl = process.env.NOTE_RSS_URL || 'https://note.com/maemichi/rss';
const response = await fetch(feedUrl, {
  headers: { 'user-agent': 'maemichi.com note RSS sync' },
  signal: AbortSignal.timeout(20_000),
});

if (!response.ok) {
  throw new Error(`RSS request failed: HTTP ${response.status}`);
}

const posts = parseNoteRss(await response.text());
if (posts.length === 0) {
  throw new Error('RSS contained no articles; the existing snapshot was preserved.');
}

let previous = {};
try {
  previous = JSON.parse(await readFile(outputPath, 'utf8'));
} catch {
  // The first successful sync creates the snapshot.
}

const payload = {
  source: feedUrl,
  syncedAt: new Date().toISOString(),
  posts,
};
const previousComparable = JSON.stringify(previous.posts ?? []);
const nextComparable = JSON.stringify(payload.posts);

if (previousComparable === nextComparable) {
  console.log('note posts are already up to date.');
  process.exit(0);
}

const temporaryPath = `${outputPath}.tmp`;
await writeFile(temporaryPath, `${JSON.stringify(payload, null, 2)}\n`);
await rename(temporaryPath, outputPath);
console.log(`updated ${posts.length} note posts.`);
