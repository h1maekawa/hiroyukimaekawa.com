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

if (containers.length) {
  fetch('/data/note-posts.json', { cache: 'no-cache' })
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
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
