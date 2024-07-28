// DB
// Tasks
let todos: { text: string }[] = [];

export const getTodos = () => todos;

export const addTodo = (todo: { text: string }) => {
  todos.push(todo);
  return todo;
};

// Tldraw
let tldraw: { data: "data"}[] = [];

export const getTldraw = () => {
  console.log("test get", tldraw);
  return tldraw;
};

export const updateTldraw = (data: { data: "data"}) => {
  console.log("Datos recibidos para actualizar:", data);

  tldraw.push(data);
  return data;
};