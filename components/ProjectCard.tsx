"use client"
import { Image } from "@/types"
import { Card } from "react-daisyui";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type Props = {
    title: string,
    url: string
    description: string,
    startDate: string
    images: Image[]
}

export default function ProjectCard(props: Props) {
    const [open, setOpen] = useState(false);
    const slides = props.images.map((image) => {
        return { src: image.url, width: 1664, height: 936 }
    })

    return (
        <div>
            <Lightbox
                open={open}
                plugins={[Thumbnails]}
                close={() => setOpen(false)}
                slides={slides}
            />

            <button onClick={() => setOpen(true)}>
                <Card className="h-96">
                    <Card.Image src={props.images[0].url} />
                    <Card.Body className="text-center">
                        <Card.Title tag="h1" className="m-auto">{props.title}</Card.Title>
                        <p>{props.startDate}</p>
                        <p>{props.description}</p>
                    </Card.Body>
                </Card>
            </button>
        </div>
    )
}
