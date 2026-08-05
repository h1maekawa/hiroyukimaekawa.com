# HIRO Portfolio

静的サイト（HTML / CSS / JavaScript）です。Viteは開発サーバーとビルドに利用しています。

## ディレクトリ構成

- `index.html`: トップページ
- `works.html`: 制作実績一覧ページ
- `assets/css/styles.css`: スタイル
- `assets/js/main.js`: トップページ用スクリプト
- `assets/js/works.js`: 実績一覧ページ用スクリプト
- `assets/img/`: 画像ファイル

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
