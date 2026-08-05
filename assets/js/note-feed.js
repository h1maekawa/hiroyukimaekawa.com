const containers = document.querySelectorAll('[data-note-feed]');

const formatDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ''
    : new Intl.DateTimeFormat('ja-JP', { dateStyle: 'medium' }).format(date);
};

const createCard = (post, animate) => {
  const card = document.createElement('article');
  card.className = `article-card${animate ? ' stagger-item' : ''}`;

  const thumb = document.createElement('div');
  thumb.className = 'article-thumb';
  if (post.image) {
    const image = document.createElement('img');
    image.src = post.image;
    image.alt = '';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';
    thumb.append(image);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder-img';
    thumb.append(placeholder);
  }

  const body = document.createElement('div');
  body.className = 'article-body';
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = post.category || 'note';
  const title = document.createElement('h3');
  title.className = 'article-title';
  title.textContent = post.title;
  const excerpt = document.createElement('p');
  excerpt.className = 'article-excerpt';
  excerpt.textContent = post.excerpt || formatDate(post.publishedAt);
  const link = document.createElement('a');
  link.className = 'article-link';
  link.href = post.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'noteで読む';

  body.append(badge, title, excerpt, link);
  card.append(thumb, body);
  return card;
};

const loadSavedPosts = async () => {
  const candidates = ['/data/note-posts.json', '/public/data/note-posts.json'];
  for (const url of candidates) {
    const response = await fetch(url, { cache: 'no-cache' });
    if (!response.ok) continue;
    try {
      const data = await response.json();
      if (Array.isArray(data.posts)) return data;
    } catch {
      // Some static hosts return index.html with HTTP 200 for missing files.
    }
  }
  throw new Error('The saved note feed was not found.');
};

if (containers.length) {
  loadSavedPosts()
    .then(({ posts }) => {
      if (!Array.isArray(posts) || posts.length === 0) throw new Error('No posts');
      containers.forEach((container) => {
        const limit = Number(container.dataset.noteLimit) || posts.length;
        container.replaceChildren(
          ...posts.slice(0, limit).map((post) => createCard(post, container.dataset.noteAnimate === 'true')),
        );
      });
    })
    .catch((error) => {
      console.warn('The saved note feed could not be loaded.', error);
    });
}
const containers = document.querySelectorAll('[data-note-feed]');

const formatDate = (value) => {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ''
    : new Intl.DateTimeFormat('ja-JP', { dateStyle: 'medium' }).format(date);
};

const createCard = (post, animate) => {
  const card = document.createElement('article');
  card.className = `article-card${animate ? ' stagger-item' : ''}`;

  const thumb = document.createElement('div');
  thumb.className = 'article-thumb';
  if (post.image) {
    const image = document.createElement('img');
    image.src = post.image;
    image.alt = '';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';
    thumb.append(image);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'placeholder-img';
    thumb.append(placeholder);
  }

  const body = document.createElement('div');
  body.className = 'article-body';
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = post.category || 'note';
  const title = document.createElement('h3');
  title.className = 'article-title';
  title.textContent = post.title;
  const excerpt = document.createElement('p');
  excerpt.className = 'article-excerpt';
  excerpt.textContent = post.excerpt || formatDate(post.publishedAt);
  const link = document.createElement('a');
  link.className = 'article-link';
  link.href = post.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'noteで読む';

  body.append(badge, title, excerpt, link);
  card.append(thumb, body);
  return card;
};

const loadSavedPosts = async () => {
  const candidates = ['/data/note-posts.json', '/public/data/note-posts.json'];
  for (const url of candidates) {
    const response = await fetch(url, { cache: 'no-cache' });
    if (response.ok) return response.json();
  }
  throw new Error('The saved note feed was not found.');
};

if (containers.length) {
  loadSavedPosts()
    .then(({ posts }) => {
      if (!Array.isArray(posts) || posts.length === 0) throw new Error('No posts');
      containers.forEach((container) => {
        const limit = Number(container.dataset.noteLimit) || posts.length;
        container.replaceChildren(
          ...posts.slice(0, limit).map((post) => createCard(post, container.dataset.noteAnimate === 'true')),
        );
      });
    })
    .catch((error) => {
      console.warn('The saved note feed could not be loaded.', error);
    });
}
