import { Provider as ReduxProvider } from "react-redux";
import { AddTodo } from "./components/addTodo";
import { TodoList } from "./components/todoList";
import { store } from "./store";

export function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}
