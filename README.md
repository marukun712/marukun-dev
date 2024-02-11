# marukun-dev
microCMSで管理できるblog付きのシンプルな個人サイト。

# Usage
microCMSをセットアップ後、

```
yarn install
```

プロジェクトルートにenv.tsを作成、必要情報を記述。
```
export const APIKEY: string = ""
export const SERVICE_DOMAIN: string = ""

export const BLOGKEY: string = ""
export const BLOG_DOMAIN: string = ""
```

開発サーバーの起動。
```
yarn run dev
```