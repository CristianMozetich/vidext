"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import LogoIcon from "@/app/icons/LogoIcon";

const AsideBar = () => {
  return (
    <div className="min-w-[256px] max-w-[256px] h-screen bg-slate-200 fixed hidden lg:block">
      <div className="flex justify-start items-center">
        <h1 className="text-2xl text-start text-letter p-3">Editor</h1>
        <LogoIcon />
      </div>
      <div className="flex flex-col justify-center items-start gap-6 p-3">
        <Button className="bg-butt hover:bg-hov">
          <Link className="text-slate-100 font-bold " href={"/pages/tldraw"}>
            Editor
          </Link>
        </Button>
        <Button className="bg-butt hover:bg-hov">
          <Link className="text-slate-100 font-bold " href={"/pages/todoList"}>
            Tasks
          </Link>
        </Button>
        <Button className="bg-butt hover:bg-hov" onClick={() => signOut()}>
          Sing Out
        </Button>
      </div>
    </div>
  );
};

export default AsideBar;
