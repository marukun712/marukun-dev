export const dynamic = "force-dynamic";

import Blog from "@/components/blog/Blog";
import { blogClient } from "@/libs/client";

async function getPosts() {
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
        <Blog data={await getPosts()} />
    )
}