import {v4 as uuidv4} from 'uuid';
import TodoForm from "../Footer/TodoForm";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

interface TodoProps {
  id: string;
  text: string;
  status: string;
}
export default function TodoMain() {
  const [todos, setTodos] = useState<TodoProps[]>([
    {id : uuidv4(), text: "공부하기", status: "Todo"},
    {id: uuidv4(), text: "코딩하기", status: "Todo"},
  ])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todo');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const saveTodosToLocalStorage = (updatedTodos: TodoProps[]) => {
    localStorage.setItem('todo', JSON.stringify(updatedTodos));
  };

  const handleAdd = (newTodo: TodoProps) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id!== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };
  return (
    <>
    <main className='w-full h-[25rem] border-2 border-solid border-black-0 rounded-[2rem] '>
    {todos.map((item)=> <TodoItem key={item.id} todo={item} onDelete={handleDelete} />)}
    </main>
    <TodoForm onAdd={handleAdd}/>
    </>
  );
}

