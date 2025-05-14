export const dynamic = "force-dynamic";

import Blog from "@/components/blog/Blog";
import { blogClient } from "@/libs/client";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | marukun-dev",
  description: "marilの個人サイト",
  openGraph: {
    type: "website",
    title: "Blog | marukun-dev",
    description: "marilの個人サイト",
    siteName: "marukun-dev",
    url: "https://maril.blue/",
    images: {
      url: "https://maril.blue/api/og/Blog",
      type: "image/png",
      width: 1200,
      height: 630,
    },
  },
};

async function fetchPosts() {
  const data = await blogClient.get({
    endpoint: "blogs",
    queries: {
      limit: 50,
    },
  });
  return data;
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Blog data={await fetchPosts()} />
      </div>
    </Suspense>
  );
}
