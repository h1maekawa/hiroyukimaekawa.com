import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        notes: resolve(import.meta.dirname, 'note-list.html'),
        products: resolve(import.meta.dirname, 'products.html'),
        timebox: resolve(import.meta.dirname, 'timebox.html'),
        works: resolve(import.meta.dirname, 'works.html'),
        scraper: resolve(import.meta.dirname, 'scraper.html'),
        noteFeed: resolve(import.meta.dirname, 'note-feed-spa/index.html'),
      },
    },
  },
});
