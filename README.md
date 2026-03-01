# MAEKAWA STUDIO Website

現在の実装は **HTML / CSS / JavaScript** です。Viteは開発サーバーとビルドのためだけに使っています。

## 技術スタック

- HTML: `index.html`
- CSS: `styles.css`
- JavaScript: `main.js`

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

成果物は `dist/` に出力されます。

## Next.jsへの移行しやすさ

`main.js` はセクションごとのデータ配列（`services` / `flow` / `cases`）をもとに描画する構成です。
このため、Next.js化するときは次の流れで移行できます。

1. `content` オブジェクトを `data/site-content.ts` に移動
2. 各描画関数を `components/Services.tsx` などへ分割
3. `index.html` の各セクションを `app/page.tsx` のJSXへ置換
4. `styles.css` を `app/globals.css` に統合（またはCSS Modules化）

この構成で、文言データとUIを分離したまま移行できます。
