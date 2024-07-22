"use client";
import GetTodos from "../components/getTodos/getTodos";
import Form from "../components/form/form";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div>
        <Link href={"/pages/tldraw"}>Tldraw</Link>
      </div>
      <div>
        <Form />
      </div>
      <div>
        <GetTodos />
      </div>
    </main>
  );
}
