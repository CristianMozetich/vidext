import React from "react";

interface TodoInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ value, onChange }) => (
  <input
    id="content"
    value={value}
    onChange={onChange}
    className="border border-slate-500 p-2 rounded-xl"
    type="text"
  />
);

export default TodoInput;
