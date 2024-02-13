export const dynamic = "force-dynamic";

import Blog from "@/components/blog/Blog";
import { blogClient } from "@/libs/client";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function searchPosts(query: string) {
    if (query) {
        const data = await blogClient.get({
            endpoint: 'blogs',
            queries: {
                filters: `content[contains]${query}[or]title[contains]${query}`
            }
        })
        return data
    }
}

export default async function Page({ searchParams }: { searchParams: { query: string } }) {
    const result = await searchPosts(searchParams.query)

    if (!searchParams.query) return (
        <p className="text-center">条件を指定してください。</p>
    )


    if (result.contents.length === 0) return (
        <p className="text-center">条件に合う検索結果が見つかりませんでした。</p>
    )

    if (result) return (
        <Suspense fallback={<Loading />}>
            <Blog data={result} />
        </Suspense>
    )
}