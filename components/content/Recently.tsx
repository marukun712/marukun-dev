"use client";
import BlogCard from "../blog/BlogCard";
import { Posts } from "@/types";
import Search from "../blog/Search";

type Props = {
  data: Posts;
};

export default function Recently(props: Props) {
  return (
    <div>
      <div className="w-96 md:py-96">
        <h1 className="text-2xl font-bold text-center">最新の記事</h1>
        {(() => {
          for (let i = 0; i < 5; i++) {
            return (
              <BlogCard
                id={props.data.contents[i].id}
                title={props.data.contents[i].title}
                image={props.data.contents[i].eyecatch.url}
                content={props.data.contents[i].content}
                date={props.data.contents[i].publishedAt}
                key={props.data.contents[i].id}
              />
            );
          }
        })()}
        <Search />
      </div>
    </div>
  );
}
