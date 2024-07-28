"use client";
import React from "react";
import Form from "../../../components/form/Form";
import GetTodos from "../../../components/getTodos/getTodos";
// PAGINA TAREAS
const page = () => {
  return (
    <div className="md:grid grid-cols-2 md:w-10/12 h-screen ml-auto gap-5 justify-center">
      <div className="p-4 m-6 items-center flex justify-center">
        <Form />
      </div>
      <div className="p-4 m-6 border rounded-3xl justify-center flex bg-slate-100 max-w-[500px] min-h-96">
        <GetTodos />
      </div>
    </div>
  );
};

export default page;
