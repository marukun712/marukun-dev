"use client";
import { ProfileData } from "@/types";
import { WindowMockup, Avatar, CodeMockup } from "react-daisyui";

type Props = {
  data: ProfileData;
};

export default function Profile(props: Props) {
  return (
    <div className="py-5">
      <WindowMockup
        className="md:w-1/2 m-auto"
        backgroundColor="warning"
        border={true}
      >
        <div className="py-20">
          <Avatar
            src={props.data.icon.url}
            size={"lg"}
            shape="circle"
            className="flex justify-center"
          />
          <h1 className="text-center text-white font-bold text-4xl py-5">
            {props.data.name}
          </h1>
          <CodeMockup>
            <CodeMockup.Line>{props.data.profile}</CodeMockup.Line>
          </CodeMockup>
        </div>
      </WindowMockup>
    </div>
  );
}
