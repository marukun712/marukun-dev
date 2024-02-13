"use client"
import { Projects, ProjectData } from "@/types";
import ProjectCard from './ProjectCard';

type Props = {
    data: Projects
}

export default function Projects(props: Props) {
    return (
        <div>
            <h1 className="text-2xl text-center py-40">Projects</h1>
            <div className="md:w-1/2 m-auto grid md:grid-cols-3 gap-10">
                {props.data.contents.map((data: ProjectData) => {
                    return (<ProjectCard title={data.title} url={data.url} description={data.description} startDate={data.startDate} images={data.images} key={data.id} />)
                })}
            </div>
        </div >
    )
}
