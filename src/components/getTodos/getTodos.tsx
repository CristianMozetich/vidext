"use client";
import React from "react";
import { trpc } from "../../app/_trpc/client";
const GetTodos = () => {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <div>
      {
        getTodos.data?.map((todo) => (
          <div key={todo.text}>
            {todo.text}
          </div>
        ))
      }
    </div>
  );
};

export default GetTodos;
