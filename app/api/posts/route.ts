import { blogClient } from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await blogClient.get({
        endpoint: 'blogs',
    })

    return new NextResponse(JSON.stringify(data))
}