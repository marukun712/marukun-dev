"use client"
import { WindowMockup, Avatar, CodeMockup } from "react-daisyui";
import useSWR from 'swr'
import Loading from "./Loading";

export default function Profile() {
    const fetcher = (url: string): Promise<any> => fetch(url).then(res => res.json());
    const { data, error } = useSWR('/api/profile/', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <Loading />

    return (
        <div className="py-5">
            <WindowMockup className="md:w-1/2 m-auto" backgroundColor="warning" border={true}>
                <div className="py-20">
                    <Avatar src={data.icon.url} size={"lg"} shape="circle" className="flex justify-center" />
                    <h1 className="text-center text-white font-bold text-4xl py-5">{data.name}</h1>
                    <CodeMockup>
                        <CodeMockup.Line>{data.profile}</CodeMockup.Line>
                    </CodeMockup>
                </div>
            </WindowMockup>
        </div>
    )
}
