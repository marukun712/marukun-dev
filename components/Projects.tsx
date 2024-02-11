"use client"
import { ProjectData } from "@/types";
import ProjectCard from './ProjectCard';
import useSWR from 'swr'
import Loading from "./Loading";

export default function Projects() {
    const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json());
    const { data, error } = useSWR('/api/projects/', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <Loading />

    return (
        <div>
            <h1 className="text-2xl text-center py-40">Projects</h1>
            <div className="md:w-1/2 m-auto grid md:grid-cols-3 gap-10">
                {data.contents.map((data: ProjectData) => {
                    return (<ProjectCard title={data.title} url={data.url} description={data.description} startDate={data.startDate} images={data.images} key={data.id} />)
                })}
            </div>
        </div >
    )
}
