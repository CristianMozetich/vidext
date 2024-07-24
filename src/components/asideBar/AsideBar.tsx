import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const AsideBar = () => {
  return (
    <div className="min-w-[300px] max-w-[300px] h-screen bg-slate-800 fixed">
      <h1 className="text-2xl text-center text-slate-100 p-3 m-3">Tldraw Editor</h1>
      <div className="flex flex-col justify-center items-center gap-6 p-2">
        <Button>
          <Link className="text-slate-100 font-bold" href={"/"}>
            Tldraw
          </Link>
        </Button>
        <Button>
          <Link className="text-slate-100 font-bold" href={"/pages/todoList"}>
            TodoList
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AsideBar;
