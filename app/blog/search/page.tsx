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
