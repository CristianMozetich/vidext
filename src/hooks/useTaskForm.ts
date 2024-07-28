// HOOK TAREAS
import { useState } from "react";
import { trpc } from "@/app/_trpc/client";

export const useTodoForm = () => {
  const [content, setContent] = useState<string>("");
  const getTodos = trpc.getTodos.useQuery();
  const createTodo = trpc.createTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim() === "") return;
    await createTodo.mutateAsync({ text: content });
    setContent("");
  };

  return {
    content,
    setContent,
    handleSubmit,
    createTodo,
  };
};
