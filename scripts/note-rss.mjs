const decodeEntities = (value = '') =>
  value
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&apos;', "'")
    .replaceAll('&amp;', '&');

const unwrap = (value = '') =>
  decodeEntities(value.replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, '$1').trim());

const field = (xml, names) => {
  for (const name of names) {
    const match = xml.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${name}>`, 'i'));
    if (match) return unwrap(match[1]);
  }
  return '';
};

const stripHtml = (value) =>
  decodeEntities(value)
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const firstImage = (html) => {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? decodeEntities(match[1]) : '';
};

export function parseNoteRss(xml, { limit = 12 } = {}) {
  if (!/<(?:rss|feed)(?:\s|>)/i.test(xml)) {
    throw new Error('The response is not an RSS or Atom feed.');
  }

  const blocks = xml.match(/<(?:item|entry)(?:\s[^>]*)?>[\s\S]*?<\/(?:item|entry)>/gi) ?? [];
  const posts = blocks.slice(0, limit).map((item) => {
    const description = field(item, ['content:encoded', 'description', 'content', 'summary']);
    const linkTag = item.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*\/?>/i);
    const link = field(item, ['link']) || (linkTag ? decodeEntities(linkTag[1]) : '');
    const published = field(item, ['pubDate', 'published', 'updated', 'dc:date']);
    const date = new Date(published);

    return {
      title: stripHtml(field(item, ['title'])),
      url: link,
      publishedAt: Number.isNaN(date.getTime()) ? '' : date.toISOString(),
      image: firstImage(description),
      excerpt: stripHtml(description).slice(0, 140),
      category: stripHtml(field(item, ['category'])) || 'note',
    };
  });

  const validPosts = posts.filter(
    (post) => post.title && /^https:\/\/note\.com\/[^/]+\/n\/n[a-zA-Z0-9]+/.test(post.url),
  );

  if (blocks.length && validPosts.length === 0) {
    throw new Error('The feed contained no valid note article URLs.');
  }

  return validPosts;
}
