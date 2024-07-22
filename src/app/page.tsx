"use client";
import { Button } from "@/components/ui/button";
import { Tldraw } from "@tldraw/tldraw";
import GetTodos from "../components/getTodos/getTodos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <h1>Vidext</h1>
      <Button variant="outline">Add</Button>
      <div>
        <GetTodos />
      </div>
      <div className="bg-slate-800 w-full h-full m-10">
        <Tldraw />
      </div>
    </main>
  );
}
