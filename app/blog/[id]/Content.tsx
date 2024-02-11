"use client"
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import parseHTML from '@/libs/parseHTML';
import Heading from "./Heading"
import Loading from '@/components/Loading';

export default function Content() {
    const id = useParams().id;

    const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json());
    const { data, error } = useSWR(`/api/posts/content?id=${id}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <Loading />

    return (
        <div>
            <Heading title={data[0].title} date={data[0].createdAt} category={data[0].category} />
            <div className='prose m-auto py-32'>
                {parseHTML(data[0].content)}
            </div>
        </div>
    )
}

