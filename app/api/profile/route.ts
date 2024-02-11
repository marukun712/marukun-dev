import { client } from "@/libs/client";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await client.get({
        endpoint: 'profile',
    })

    return new NextResponse(JSON.stringify(data))
}