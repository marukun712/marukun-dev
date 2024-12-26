export const dynamic = "force-dynamic";

import Profile from "@/components/top/Profile";
import Projects from "@/components/top/Projects";
import Skills from "@/components/top/Skills";
import { client } from "@/libs/client";
import { Suspense } from "react";
import Loading from "@/components/Loading";

async function fetchProfile() {
  const data = await client.get({
    endpoint: "profile",
    queries: {
      limit: 50,
    },
  });

  return data;
}

async function fetchProjects() {
  const data = await client.get({
    endpoint: "projects",
    queries: {
      limit: 50,
    },
  });

  return data;
}

export default async function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Profile data={await fetchProfile()} />
      <Projects data={await fetchProjects()} />
      <Skills />
    </Suspense>
  );
}
