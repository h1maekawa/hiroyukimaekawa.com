import assert from 'node:assert/strict';
import test from 'node:test';
import { parseNoteRss } from '../scripts/note-rss.mjs';

test('parses and sanitizes note RSS items', () => {
  const xml = `<?xml version="1.0"?>
    <rss><channel><item>
      <title><![CDATA[新しい &amp; 記事]]></title>
      <link>https://note.com/mae_chan1/n/nabc123</link>
      <pubDate>Wed, 05 Aug 2026 01:00:00 GMT</pubDate>
      <category>Tech</category>
      <description><![CDATA[<p>本文 <strong>です</strong></p><img src="https://example.com/a.jpg">]]></description>
    </item></channel></rss>`;

  assert.deepEqual(parseNoteRss(xml), [{
    title: '新しい & 記事',
    url: 'https://note.com/mae_chan1/n/nabc123',
    publishedAt: '2026-08-05T01:00:00.000Z',
    image: 'https://example.com/a.jpg',
    excerpt: '本文 です',
    category: 'Tech',
  }]);
});

test('rejects non-feed responses', () => {
  assert.throws(() => parseNoteRss('<html>not found</html>'), /not an RSS/);
});

test('does not expose non-note links', () => {
  const xml = '<rss><channel><item><title>bad</title><link>https://example.com/post</link></item></channel></rss>';
  assert.throws(() => parseNoteRss(xml), /no valid note article URLs/);
});
