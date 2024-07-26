"use client";
import { Tldraw } from "tldraw";
import { trpc } from "../../app/_trpc/client";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import "tldraw/tldraw.css";

export default function TldrawDashboard() {
  const { data, refetch } = trpc.getTldraw.useQuery();
  const [editor, setEditor] = useState<any>();
  const [shape, setShape] = useState<any>(data);

  const updateTldrawMutation = trpc.updateTldraw.useMutation({
    onSettled: () => {
      refetch();
    },
  });

  useEffect(() => {
    if (data) {
      setShape(data);
    }
  }, [data]);

  const handleChangeShape = () => {
    if (editor) {
      const newShape = editor.getCurrentPageShapesSorted();
      setShape(newShape);
      updateTldrawMutation.mutate({ data: newShape });
      console.log("Forma actualizada:", newShape);
    }
  };

  return (
    <div className="absolute inset-0 w-full lg:w-5/6 h-full lg:ml-auto">
      <Tldraw onMount={(editorInstance) => setEditor(editorInstance)} />
      <Button
        onClick={handleChangeShape}
        className="z-10 fixed top-14 m-2 bg-slate-300 text-letter hover:bg-slate-400 hover:text-slate-700"
      >
        Update
      </Button>
    </div>
  );
}
