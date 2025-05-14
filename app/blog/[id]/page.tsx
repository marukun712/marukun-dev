export const dynamic = "force-dynamic";

import Content from "@/components/content/Content";
import { blogClient } from "@/libs/client";
import { PostData } from "@/types";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/ui/404";

async function fetchPosts() {
  const data = await blogClient.get({
    endpoint: "blogs",
    queries: {
      limit: 50,
    },
  });
  return data;
}

async function filterContent(id: string): Promise<PostData> {
  const data = await fetchPosts();

  const postData = data.contents.filter((content: PostData) => {
    return content.id === id;
  });

  return postData[0];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await filterContent(id);

  if (data)
    return {
      title: `${data.title} | marukun-dev`,
      description: "marilの個人サイト",
      openGraph: {
        type: "website",
        title: `${data.title} | marukun-dev`,
        description: "marilの個人サイト",
        siteName: "marukun-dev",
        url: "https://maril.blue/",
        images: {
          url: data.eyecatch
            ? data.eyecatch.url
            : `https://maril.blue/api/og/${data.title}`,
          type: "image/png",
          width: 1200,
          height: 630,
        },
      },
    };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await filterContent(id);

  if (data)
    return (
      <Suspense fallback={<Loading />}>
        <div>
          <Content data={data} />
        </div>
      </Suspense>
    );
  else return <NotFound />;
}
