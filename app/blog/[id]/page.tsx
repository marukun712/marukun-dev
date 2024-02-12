export const dynamic = "force-dynamic";

import Content from "@/components/content/Content"
import { blogClient } from "@/libs/client";
import { PostData } from "@/types";

async function getContent(id: string) {
    const data = await blogClient.get({
        endpoint: 'blogs',
        queries: {
            limit: 50
        }
    })

    const postData = data.contents.filter((content: PostData) => {
        return content.id === id;
    })

    return postData
}

export default async function Page({ params }: { params: { id: string } }) {
    if (typeof params.id !== "string") { return; }
    return (
        <div>
            <Content data={await getContent(params.id)} />
        </div>
    )
}