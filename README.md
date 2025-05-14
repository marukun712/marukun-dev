# marukun-dev

microCMS で管理できる blog 付きのシンプルな個人サイト。

# Usage

microCMS をセットアップ後、

```
bun install
```

プロジェクトルートに env.ts を作成、必要情報を記述。

```
export const APIKEY: string = ""
export const SERVICE_DOMAIN: string = ""

export const BLOGKEY: string = ""
export const BLOG_DOMAIN: string = ""
```

開発サーバーの起動。

```
bun run dev
```
