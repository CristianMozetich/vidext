"use client";
import { Button } from "../components/ui/button";
import Login from "@/components/loginForm/LoginForm";
import Image from "next/image";
import Link from "next/link";
// HOME
export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/nature2.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col w-full h-screen justify-center items-center">
        <div className="bg-slate-100 w-1/2 h-2/3 flex flex-col justify-center items-center rounded-3xl">
          <h1 className="text-3xl text-center text-letter p-3">
            Welcome to Editor
          </h1>
          <Button className="bg-butt hover:bg-hov m-4 p-5 md:w-80 rounded-xl">
            <Link href="/pages/tldraw">Get Started</Link>
          </Button>
          <Login />
        </div>
      </div>
    </main>
  );
}
