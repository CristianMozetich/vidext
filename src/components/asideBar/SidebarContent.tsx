import React from "react";
import Link from "next/link";
import LogoIcon from "@/app/icons/LogoIcon";
import SidebarLink from "./SidebarLink";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

interface SidebarContentProps {
  open: boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ open }) => (
  <div
    className={`flex flex-col h-full p-3 transition-all duration-300 ${
      open ? "w-64" : "w-16"
    }`}
  >
    <div className="flex flex-col justify-center items-start">
      <h1 className="text-letter font-light">
        Design By {""}
        <Link
          className="hover:text-black"
          target="_blank"
          href="https://github.com/CristianMozetich"
        >
          Cristian
        </Link>
      </h1>
    </div>
    <div className="flex justify-start items-start">
      <h1 className="text-2xl text-letter">Editor</h1>
      <LogoIcon />
    </div>
    <div className="flex flex-col justify-center items-start gap-3 mt-6">
      <SidebarLink href="/pages/tldraw">Editor</SidebarLink>
      <SidebarLink href="/pages/todoList">Tasks</SidebarLink>
      <Button className="bg-hov hover:bg-butt" onClick={() => signOut()}>
        Sign Out
      </Button>
      <SidebarLink href="/">Start</SidebarLink>
    </div>
  </div>
);

export default SidebarContent;
