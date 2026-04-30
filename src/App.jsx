import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({});
  const [todoToRemove, setTodoToRemove] = useState({});

  useEffect(() => {
    async function getToDos() {
      try {
        const { data, err } = await supabase.from("todos").select();
        if (err) {
          throw new Error(err);
        }
        setTodos(data);
      } catch (err) {
        console.error(err);
      }
    }
    getToDos();
  }, [newTodo, todoToRemove]);

  useEffect(() => {
    async function createTodo() {
      if (!newTodo.todo) {
        return;
      }

      try {
        const { err } = await supabase
          .from("todos")
          .insert({
            todo: newTodo.todo,
            severity: newTodo.severity,
          })
          .select();
        if (err) {
          throw new Error(err);
        }
        console.log(newTodo);
      } catch (err) {
        console.error(err);
      }

      setNewTodo({});
    }
    createTodo();
  }, [newTodo]);

  useEffect(() => {
    async function removeTodoFromDB() {
      if (!todoToRemove.id) {
        return;
      }
      try {
        const { err } = await supabase
          .from("todos")
          .delete()
          .eq("id", todoToRemove.id);
        if (err) {
          throw new Error(err);
        }
      } catch (err) {
        console.log(err);
      }
      setTodoToRemove({});
    }
    removeTodoFromDB();
  }, [todoToRemove]);

  return (
    <div className="flex flex-col gap-4">
      <TodoForm setNewTodo={setNewTodo} />
      <div className="grid grid-cols-2 gap-2 mx-1">
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            setTodoToRemove={setTodoToRemove}
          />
        ))}
      </div>
    </div>
  );
}
