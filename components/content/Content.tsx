"use client";
import parseHTML from "@/libs/parseHTML";
import Heading from "./Heading";
import { PostData } from "@/types";

type Props = {
  data: PostData;
};

export default function Content(props: Props) {
  return (
    <div>
      <Heading
        title={props.data.title}
        date={props.data.createdAt}
        category={props.data.category}
      />
      <div className="prose m-auto">{parseHTML(props.data.content)}</div>
    </div>
  );
}
