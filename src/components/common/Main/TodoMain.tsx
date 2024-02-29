import TodoForm from '../Footer/TodoForm';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TodoProps {
	id: string;
	text: string;
	status: string;
	time: string;
}
export default function TodoMain({ filter }: { filter: string }) {
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
		const updatedTodos = [newTodo, ...todos];
		setTodos(updatedTodos);
		saveTodosToLocalStorage(updatedTodos);
	};

	const handleEdit = (newTodo: TodoProps) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === newTodo.id ? { ...todo, text: newTodo.text, status: newTodo.status } : todo,
		);
		setTodos(updatedTodos);
		saveTodosToLocalStorage(updatedTodos);
	};

	const handleDelete = (id: string) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
		saveTodosToLocalStorage(updatedTodos);
	};

	const todoStatusFilter = () => {
		if (filter === 'All') {
			return todos;
		}
		return todos.filter((todo) => todo.status === filter);
	};

	const todoFiltered = todoStatusFilter();

	const reorder = (list: TodoProps[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		saveTodosToLocalStorage(result);
		return result;
	};

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}
		setTodos((items) => {
			if (!result.destination) {
				return items;
			}
			return reorder(items, result.source.index, result.destination.index);
		});
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<main className='h-[25rem] w-full overflow-scroll scroll-smooth rounded-[2rem] border-2 border-solid border-black-0 scrollbar-hide'>
					<Droppable droppableId='droppable'>
						{(provided) => (
							<div ref={provided.innerRef} {...provided.droppableProps}>
								{todoFiltered.map((item, index) => (
									<Draggable key={item.id} draggableId={item.id} index={index}>
										{(provided) => (
											<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
												<TodoItem todo={item} onEdit={handleEdit} onDelete={handleDelete} />
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</main>
			</DragDropContext>
			<TodoForm onAdd={handleAdd} />
		</>
	);
}
