"use client";
import React from "react";
import { Tldraw } from "tldraw";
import { Button } from "../ui/button";
import "tldraw/tldraw.css";
import { useTldrawShapes } from "../../hooks/useTldrawShapes";

export default function TldrawDashboard() {
  const { editor, setEditor, shape, handleChangeShape, isLoading, error } =
    useTldrawShapes();

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
            onClick={handleChangeShape}
            className="z-10 fixed top-14 m-2 bg-slate-300 text-letter hover:bg-slate-400 hover:text-slate-700"
          >
            Update
          </Button>
        </>
      )}
    </div>
  );
}
