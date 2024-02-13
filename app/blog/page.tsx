export const dynamic = "force-dynamic";

import Blog from "@/components/blog/Blog";
import { blogClient } from "@/libs/client";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Search from "@/components/blog/Search";

async function fetchPosts() {
    const data = await blogClient.get({
        endpoint: 'blogs',
        queries: {
            limit: 50
        }
    })
    return data
}

export default async function Page() {
    return (
        <Suspense fallback={<Loading />}>
            <div className="flex justify-center">
                <Blog data={await fetchPosts()} />
                <Search />
            </div>
        </Suspense>
    )
}