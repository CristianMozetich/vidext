"use client";
import React from "react";
import Form from "../../../components/form/form";
import GetTodos from "../../../components/getTodos/getTodos";

const page = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div>
        <Form />
      </div>
      <div>
        <GetTodos />
      </div>
    </div>
  );
};

export default page;
