"use client";
import { PostData, Posts } from "@/types";
import BlogCard from "./BlogCard";

type Props = {
  data: Posts;
};

export default function Blog(props: Props) {
  if (props.data.contents.length === 0)
    return <h1 className="text-center">記事が見つかりませんでした。</h1>;

  return (
    <div className="space-y-24">
      <h1 className="text-center text-2xl font-bold">Posts</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {props.data.contents.map((post: PostData) => {
          return (
            <BlogCard
              id={post.id}
              title={post.title}
              image={
                post.eyecatch
                  ? post.eyecatch.url
                  : "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhNiQiwJEndtEtiXGbge_nFBhm48O1veQDVkskf53TwtD9Tf-UsueCE7WkNoLrs3cn05HT07yCtpNkFH8UcmEP4-IA-POvT81HlnsWRnOiCrJQ_MF8lRQxmUURmwhRMJdffXm_RRPXzjZO/s400/no_image_yoko.jpg"
              }
              content={post.content}
              date={post.publishedAt}
              key={post.id}
            />
          );
        })}
      </div>
    </div>
  );
}
