export const dynamic = "force-dynamic";

import Blog from "@/components/blog/Blog";
import { blogClient } from "@/libs/client";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function searchPosts(query: string) {
  if (query) {
    const data = await blogClient.get({
      endpoint: "blogs",
      queries: {
        q: `${query}`,
      },
    });
    return data;
  }
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;

  if (query)
    return {
      title: `${query}の検索結果 | marukun-dev`,
      description: "marilの個人サイト",
      openGraph: {
        type: "website",
        title: `${query}の検索結果 | marukun-dev`,
        description: "marilの個人サイト",
        siteName: "marukun-dev",
        url: "https://maril.blue/",
        images: {
          url: `/api/og/${query}の検索結果`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      },
    };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const { query } = await searchParams;

  if (!query)
    return <h1 className="text-center">検索ワードを指定してください。</h1>;

  return (
    <Suspense fallback={<Loading />}>
      <Blog data={await searchPosts(query)} />
    </Suspense>
  );
}
