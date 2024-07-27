// Tasks
let todos: { text: string }[] = [];

export const getTodos = () => todos;

export const addTodo = (todo: { text: string }) => {
  todos.push(todo);
  return todo;
};

// Tldraw
let tldraw: [] = [];

export const getTldraw = () => {
  return tldraw;
};

export const updateTldraw = (data: []) => {
  console.log("Datos recibidos para actualizar:", data);
  tldraw = data;
  return data;
};