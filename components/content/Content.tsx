"use client"
import parseHTML from '@/libs/parseHTML';
import Heading from "./Heading"

type Props = {
    data: any
}

export default async function Content(props: Props) {
    return (
        <div>
            <Heading title={props.data[0].title} date={props.data[0].createdAt} category={props.data[0].category} />
            <div className='prose m-auto py-32'>
                {parseHTML(props.data[0].content)}
            </div>
        </div>
    )
}

