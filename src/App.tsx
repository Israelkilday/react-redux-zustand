import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";

export function App() {
  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  );
}
