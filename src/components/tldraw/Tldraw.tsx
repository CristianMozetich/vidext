"use client";
import React from "react";
import { Tldraw } from "tldraw";
import { Button } from "../ui/button";
import "tldraw/tldraw.css";
import { useTldraw } from "@/hooks/useTldraw";

// TLDRAW DASHBOARD
export default function TldrawDashboard() {
  const { setEditor, handleShare, isLoading, error, handleUpdate } =
    useTldraw();

  return (
    <div className="absolute inset-0 w-full lg:w-5/6 h-full lg:ml-auto">
      {isLoading && (
        <p className="text-center text-letter text-2xl p-3 m-3">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 text-2xl p-3 m-3">
          {error.message}
        </p>
      )}
      {!isLoading && !error && (
        <>
          <Tldraw onMount={(editorInstance) => setEditor(editorInstance)} />
          <Button
            onClick={handleShare}
            className="z-10 fixed top-12 m-2 bg-slate-300 text-letter hover:bg-slate-400 hover:text-slate-700"
          >
            Share
          </Button>
          <Button
            onClick={handleUpdate}
            className="z-10 fixed top-24 m-2 bg-slate-300 text-letter hover:bg-slate-400 hover:text-slate-700"
          >
            Update
          </Button>
        </>
      )}
    </div>
  );
}
