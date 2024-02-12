import { Category } from "@/types"

type Props = {
    title: string,
    date: string,
    category: Category[]
}

export default function Heading(props: Props) {
    return (
        <div className="w-full h-full p-12 text-center">
            <h1 className="text-4xl font-bold py-5">{props.title}</h1>
            <p>{props.date}</p>
        </div>
    )
}