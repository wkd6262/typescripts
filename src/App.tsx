import { useState } from "react";
import AddTodo from "./assets/components/AddTodo";
import TodoItems from "./assets/components/TodoItems";
import TodoMain from "./assets/components/TodoMain";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TodoMain />
      <AddTodo addTodo={addTodo} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
