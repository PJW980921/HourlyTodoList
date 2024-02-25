import TodoForm from "../Footer/TodoForm";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

interface TodoProps {
  id: string;
  text: string;
  status: string;
}
export default function TodoMain({filter} : {filter: string}) {
  const [todos, setTodos] = useState<TodoProps[]>([]);

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

  const handleEdit = (newTodo: TodoProps) => { 
    const updatedTodos = todos.map((todo) =>
    todo.id === newTodo.id ? { ...todo, text: newTodo.text } : todo
  );
  setTodos(updatedTodos);
  saveTodosToLocalStorage(updatedTodos);
};

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id!== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const todoStatusFilter = () => {
    if (filter === 'All') {
      return todos;
    }
    return todos.filter((todo) => todo.status === filter);
  }
  
  const todoFiltered = todoStatusFilter();

  return (
    <>
    <main className=' overflow-scroll  scroll-smooth scrollbar-hide w-full h-[25rem] border-2 border-solid border-black-0 rounded-[2rem] '>
    {todoFiltered.map((item)=> <TodoItem key={item.id} todo={item} onEdit={handleEdit} onDelete={handleDelete} />)}
    </main>
    <TodoForm onAdd={handleAdd}/>
    </>
  );
}

