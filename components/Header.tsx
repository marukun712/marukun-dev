"use client";
import { Navbar, Menu, Link } from "react-daisyui";
import Search from "./blog/Search";

export default function Header() {
  return (
    <Navbar>
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          marukun-dev
        </Link>

        <Link href="/blog" className="btn btn-ghost normal-case text-xl">
          blog
        </Link>
      </div>
      <Search />
    </Navbar>
  );
}
