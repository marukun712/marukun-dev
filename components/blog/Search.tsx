"use client";
import { Input, Button } from "react-daisyui";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/blog/search?query=${text}`);
  };

  return (
    <div className="px-10">
      <h1 className="text-2xl">サイト内検索</h1>
      <Input
        value={text}
        placeholder="キーワードを入力..."
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >
        検索
      </Button>
    </div>
  );
}
