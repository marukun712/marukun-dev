"use client";
import { Projects, ProjectData } from "@/types";
import ProjectCard from "./ProjectCard";

type Props = {
  data: Projects;
};

export default function ProjectsList(props: Props) {
  return (
    <div>
      <h1 className="text-3xl text-center my-20">Projects</h1>
      <div className="grid md:grid-cols-3 gap-10">
        {props.data.contents.map((data: ProjectData) => {
          return (
            <ProjectCard
              title={data.title}
              url={data.url}
              description={data.description}
              startDate={data.startDate}
              images={data.images}
              key={data.id}
            />
          );
        })}
      </div>
    </div>
  );
}
