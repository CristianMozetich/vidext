let todos: { text: string }[] = [];

export const getTodos = () => todos;

export const addTodo = (todo: { text: string }) => {
  todos.push(todo);
  return todo;
};
