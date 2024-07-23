"use client";
import GetTodos from "../components/getTodos/getTodos";
import Form from "../components/form/form";
import Link from "next/link";
import TldrawDashboard from "@/components/tldraw/Tldraw";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="flex flex-col p-3 justify-end items-end w-full">
        <div>
          <Form />
        </div>
        <div>
          <GetTodos />
        </div>
      </div>
      <div>
        <TldrawDashboard />
      </div>
    </main>
  );
}
