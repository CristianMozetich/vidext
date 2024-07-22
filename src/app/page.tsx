"use client";
import { Button } from "@/components/ui/button";
import TildrawDashboard from "@/components/tldraw/Tldraw";
import GetTodos from "../components/getTodos/getTodos";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <h1>Vidext</h1>
      <Button variant="outline">Add</Button>
      <div>
        <GetTodos />
      </div>
      <div>
        <TildrawDashboard />
      </div>
    </main>
  );
}
