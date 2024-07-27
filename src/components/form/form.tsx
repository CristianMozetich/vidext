import React from "react";
import { useTodoForm } from "../../hooks/useTaskForm";
import TodoInput from "./Input";
import SubmitButton from "./SubmitButton";

const Form: React.FC = () => {
  const { content, setContent, handleSubmit } = useTodoForm();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col m-2 gap-3">
      <h1 className="text-xl text-letter">Add a Task</h1>
      <TodoInput value={content} onChange={(e) => setContent(e.target.value)} />
      <SubmitButton />
    </form>
  );
};

export default Form;

