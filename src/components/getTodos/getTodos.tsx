"use client";
import React from "react";
import { trpc } from "../../app/_trpc/client";
const GetTodos = () => {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
  );
};

export default GetTodos;
