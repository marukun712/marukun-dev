import { blogClient } from "@/libs/client";
import { NextRequest, NextResponse } from "next/server";
import { PostData } from "@/types";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const data = await blogClient.get({
        endpoint: 'blogs',
    })

    const postData = data.contents.filter((content: PostData) => {
        return content.id === id;
    })

    return new NextResponse(JSON.stringify(postData))
}