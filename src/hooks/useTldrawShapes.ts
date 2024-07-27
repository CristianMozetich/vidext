// hooks/useTldrawShapes.ts
import { useState, useEffect } from "react";
import { Editor, TLShape } from "tldraw";
import { trpc } from "../app/_trpc/client";

export const useTldrawShapes = () => {
  const { data, refetch, isLoading, error } = trpc.getTldraw.useQuery();
  const [editor, setEditor] = useState<Editor | null>();
  const [shape, setShape] = useState<TLShape[] | null>([]);

  const updateTldrawMutation = trpc.updateTldraw.useMutation({
    onSettled: () => {
      refetch();
    },
    onError: (error) => {
      console.error("Error updating shape:", error);
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
      console.log("Updated form:", newShape);
    } else {
      console.error("Update failed");
    }
  };

  return {
    editor,
    setEditor,
    shape,
    handleChangeShape,
    isLoading,
    error,
  };
};
