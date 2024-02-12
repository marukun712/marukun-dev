export const dynamic = "force-dynamic";

import Profile from "@/components/top/Profile"
import Projects from "@/components/top/Projects";
import Skills from "@/components/top/Skills";
import { client } from "@/libs/client";

async function getProfile() {
    const data = await client.get({
        endpoint: 'profile',
        queries: {
            limit: 50
        }
    })

    return data
}

async function getProjects() {
    const data = await client.get({
        endpoint: 'projects',
        queries: {
            limit: 50
        }
    })

    return data
}


export default async function Home() {
    return (
        <>
            <Profile data={await getProfile()} />
            <Projects data={await getProjects()} />
            <Skills />
        </>
    )
}
