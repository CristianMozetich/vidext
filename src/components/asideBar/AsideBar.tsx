import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const AsideBar = () => {
  return (
    <div className="min-w-[306px] max-w-[306px] h-screen bg-slate-200 fixed hidden lg:block">
      <h1 className="text-2xl text-start text-letter p-3">Tldraw Editor</h1>
      <div className="flex flex-col justify-center items-start gap-6 p-3">
        <Button className="bg-butt hover:bg-hov">
          <Link className="text-slate-100 font-bold " href={"/"}>
            Tldraw
          </Link>
        </Button>
        <Button className="bg-butt hover:bg-hov">
          <Link className="text-slate-100 font-bold " href={"/pages/todoList"}>
            TodoList
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AsideBar;
