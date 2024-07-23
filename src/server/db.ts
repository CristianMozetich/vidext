let todos: { text: string }[] = [];

export const getTodos = () => todos;

export const addTodo = (todo: { text: string }) => {
  todos.push(todo);
  return todo;
};

let documents: { [id: string]: any } = {}; // Un objeto para almacenar documentos por ID

export const getTldraw = (id: string) => {
  return documents[id] || null;
};

export const saveTldraw = (id: string, data: any) => {
  documents[id] = data;
  return data;
};