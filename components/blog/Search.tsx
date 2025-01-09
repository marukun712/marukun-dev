"use client";
import { Input, Button, Modal } from "react-daisyui";
import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [text, setText] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/blog/search?query=${text}`);
  };

  const ref = useRef<HTMLDialogElement>(null);
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <div>
      <Modal backdrop={true} ref={ref}>
        <Modal.Body>
          <Input
            value={text}
            placeholder="検索..."
            className="w-full"
            onChange={(e) => setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Actions>
          <form onClick={handleSubmit}>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </Button>
          </form>
        </Modal.Actions>
      </Modal>

      <Button onClick={handleShow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-search"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Button>
    </div>
  );
}
