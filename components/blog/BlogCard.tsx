import { Card, Link } from "react-daisyui";

type Props = {
  id: string;
  title: string;
  image: string;
  content: string;
  date: string;
};

export default function BlogCard(props: Props) {
  return (
    <Link href={`/blog/${props.id}`}>
      <Card className="w-92 h-92">
        <Card.Image src={props.image} className="w-full h-48 object-cover" />
        <Card.Body className="w-full">
          <Card.Title tag="h2">{props.title}</Card.Title>
          <p>{new Date(props.date).toLocaleString("ja-jp")}</p>
        </Card.Body>
      </Card>
    </Link>
  );
}
