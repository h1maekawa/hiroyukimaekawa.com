# HIRO Portfolio

静的サイト（HTML / CSS / JavaScript）です。Viteは開発サーバーとビルドに利用しています。

## ディレクトリ構成

- `index.html`: トップページ
- `works.html`: 制作実績一覧ページ
- `assets/css/styles.css`: スタイル
- `assets/js/main.js`: トップページ用スクリプト
- `assets/js/works.js`: 実績一覧ページ用スクリプト
- `assets/img/`: 画像ファイル
- `timebox.html` / `assets/js/timebox*.js`: Timebox OS（タイムボックス管理アプリ）

## Timebox OS

`/timebox.html` で動く、1日の時間割を組むアプリです。登録不要・無料で、
データは利用者の端末（localStorage）にだけ保存します。
仕様と今後の計画は [docs/TIMEBOX_OS_PRODUCT_ROADMAP.md](docs/TIMEBOX_OS_PRODUCT_ROADMAP.md) を参照してください。

時間割の計算は `assets/js/timebox-engine.js` に純粋関数として置いてあり、
`npm test`（`tests/timebox-engine.test.js`）で検証しています。

## 開発

```bash
npm install
npm run dev
```

## ビルド

```bash
npm run build
```

## note記事の同期

noteの記事一覧は `public/data/note-posts.json` の保存済みスナップショットを表示します。
GitHub Actionsが6時間ごとにRSSを確認し、記事に変更がある場合だけスナップショットを
`main`へコミットします。手動実行は次のコマンドです。

```bash
npm run sync:note
```

別アカウントへ移行した場合は、ワークフローの `NOTE_RSS_URL` 環境変数でRSS URLを
上書きできます。RSS取得や検証に失敗した場合、既存スナップショットは変更されません。
