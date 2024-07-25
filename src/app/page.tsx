"use client";
import TldrawDashboard from "@/components/tldraw/Tldraw";
import { useState } from "react";
import { Button } from "../components/ui/button";
import Login from "@/components/loginForm/LoginForm";
import Image from "next/image";

export default function Home() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };
  return (
    <>
      <>
      {!start && (
        <div className="relative w-full h-screen">
          <div className="absolute inset-0 z-0">
            <Image
              src="/nature.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="relative z-10 flex flex-col w-full h-screen justify-center items-center">
            <div className="border bg-green-100 w-1/2 h-3/4 flex flex-col justify-center items-center rounded-3xl">
              <h1 className="text-3xl text-start text-letter p-3">
                Welcome to Tldraw Editor
              </h1>
              <Button
                className="bg-butt hover:bg-hov m-4 p-5 w-80 rounded-xl"
                onClick={handleStart}
              >
                Get Started
              </Button>
              <Login />
            </div>
          </div>
        </div>
      )}
        {start && (
          <main className="flex min-h-screen flex-col items-start">
            <TldrawDashboard />
          </main>
        )}
      </>
    </>
  );
}
