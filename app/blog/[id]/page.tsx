export const dynamic = "force-dynamic";

import Content from "@/components/content/Content"
import Recently from "@/components/content/Recently";
import { blogClient } from "@/libs/client";
import { PostData } from "@/types";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function fetchPosts() {
    const data = await blogClient.get({
        endpoint: 'blogs',
        queries: {
            limit: 50
        }
    })
    return data
}

async function filterContent(id: string): Promise<PostData> {
    const data = await fetchPosts();

    const postData = data.contents.filter((content: PostData) => {
        return content.id === id;
    })

    return postData[0]
}

export default async function Page({ params }: { params: { id: string } }) {
    if (typeof params.id !== "string") { return; }
    return (
        <Suspense fallback={<Loading />}>
            <div className="md:flex md:justify-center">
                <Content data={await filterContent(params.id)} />
                <Recently data={await fetchPosts()} />
            </div>
        </Suspense>
    )
}