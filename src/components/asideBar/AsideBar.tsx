"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import LogoIcon from "@/app/icons/LogoIcon";
import { useState } from "react";
import MenuIcon from "@/app/icons/MenuIcon";


const AsideBar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`lg:hidden fixed top-40 left-0 z-50 p-4 bg-slate-200 ${open ? 'w-64' : 'w-16'}  transition-all duration-300 fixed`}>
        <button onClick={handleMenu} className="text-2xl">
          <MenuIcon />
        </button>
        {open && (
          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-start items-center">
              <h1 className="text-letter font-light">Design By <Link className="hover:text-black" target="_blank" href={"https://github.com/CristianMozetich"}>Cristian</Link></h1>
              <h1 className="text-2xl text-letter">Editor</h1>
              <LogoIcon />
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-3">
              <Button className="bg-hov hover:bg-butt">
                <Link className="text-slate-100 font-bold" href="/pages/tldraw">Editor</Link>
              </Button>
              <Button className="bg-hov hover:bg-butt">
                <Link className="text-slate-100 font-bold" href="/pages/todoList">Tasks</Link>
              </Button>
              <Button className="bg-hov hover:bg-butt" onClick={() => signOut()}>Sign Out</Button>
              <Button className="bg-hov hover:bg-butt">
                <Link href="/">Start</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="min-w-[256px] max-w-[256px] h-screen bg-slate-200 fixed hidden lg:block">
        <div className="flex justify-start items-center p-3">
          <h1 className="text-2xl text-letter">Editor</h1>
          <LogoIcon />
        </div>
        <div className="flex flex-col justify-center items-start gap-6 p-3">
          <Button className="bg-hov hover:bg-butt">
            <Link className="text-slate-100 font-bold" href="/pages/tldraw">Editor</Link>
          </Button>
          <Button className="bg-hov hover:bg-butt">
            <Link className="text-slate-100 font-bold" href="/pages/todoList">Tasks</Link>
          </Button>
        </div>
        <div className="flex flex-col items-start gap-6 p-3 h-2/3 justify-end">
          <Button className="bg-hov hover:bg-butt" onClick={() => signOut()}>Sign Out</Button>
          <Button className="bg-hov hover:bg-butt">
            <Link href="/">Start</Link>
          </Button>
        </div>
        <div className="flex justify-end items-end p-2 m-2">
          <h1 className="font-light text-letter">Design By <Link className="hover:text-black" target="_blank" href={"https://github.com/CristianMozetich"}>Cristian</Link></h1>
        </div>
      </div>
    </>
  );
};

export default AsideBar;
