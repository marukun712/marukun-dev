"use client";
import { Navbar, Menu, Link } from "react-daisyui";
import ThemeController from "./ThemeController";

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
      <div className="flex-none">
        <Menu horizontal={true} className="px-1">
          <Menu.Item>
            <ThemeController />
          </Menu.Item>
        </Menu>
      </div>
    </Navbar>
  );
}
