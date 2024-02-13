"use client"
import { PostData, Posts } from "@/types"
import BlogCard from "./BlogCard"

type Props = {
    data: Posts
}

export default function Blog(props: Props) {
    if (props.data.contents.length === 0) return (
        <h1 className="text-center">記事が見つかりませんでした。</h1>
    )

    return (
        <div>
            <div className='md:w-1/2 m-auto'>
                <h1 className='text-center text-2xl font-bold'>Posts</h1>
                {props.data.contents.map((post: PostData) => {
                    return <BlogCard id={post.id} title={post.title} image={post.eyecatch.url} content={post.content} date={post.publishedAt} key={post.id} />
                })}
            </div>
        </div>
    )
}