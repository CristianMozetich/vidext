"use client";
import React from "react";
import { trpc } from "../../app/_trpc/client";
const GetTodos = () => {
  const getTodos = trpc.getTodos.useQuery();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold text-letter">Tasks List</h1>
      {getTodos.data?.map((todo) => (
        <div key={todo.text}>{todo.text}</div>
      ))}
    </div>
  );
};

export default GetTodos;
