"use client"
import useSWR from 'swr'
import BlogCard from './BlogCard'
import { PostData } from '@/types'
import Loading from '@/components/Loading';

export default function Blog() {
    const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json());
    const { data, error } = useSWR('/api/posts/', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <Loading />

    return (
        <div>
            <div className='md:w-1/2 m-auto'>
                <h1 className='text-center text-2xl font-bold'>Posts</h1>
                {data.contents.map((post: PostData) => {
                    return <BlogCard id={post.id} title={post.title} image={post.eyecatch.url} content={post.content} date={post.publishedAt} key={post.id} />
                })}
            </div>
        </div>
    )
}