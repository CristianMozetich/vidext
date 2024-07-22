import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";
import { trpc } from "@/app/_trpc/client";

const Form = () => {
  const [content, setContent] = useState("");
  const createTodo = trpc.createTodo.useMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    await createTodo.mutateAsync({ text: content });
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-3">
      <input
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 rounded-xl"
        type="text"
      />
      <Button type="submit" variant="outline">
        Submit
      </Button>
    </form>
  );
};

export default Form;
