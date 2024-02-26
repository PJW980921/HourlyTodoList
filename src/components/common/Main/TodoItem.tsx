import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import { MdCancelScheduleSend } from "react-icons/md";

interface TodoProps {
  id: string;
  text: string;
  status: string;
  time:string;
}

interface TodoItemProps {
  todo: TodoProps;
  onDelete: (id: string) => void;
  onEdit: (newTodo: TodoProps) => void;
}

export default function TodoItem({ todo, onDelete, onEdit }: TodoItemProps) {
  const { register, handleSubmit, setValue } = useForm();
  const [isEditing, setIsEditing] = useState(false);

  const handleCheckboxChange = (data: { [key: string]: string }) => {
    const newTodo: TodoProps = { ...todo, text: data[`edit-${todo.id}`], status: data[`edit-${todo.status}`] };
  };

  const onChecked = (e : ChangeEvent<HTMLInputElement>) => {
    const status = e.target.checked ? 'Completed' : 'Todo';
    onEdit({...todo, status})
  }

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setValue(`edit-${todo.id}`, todo.text);
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setValue(`edit-${todo.id}`, '');
  }

  const handleDeleteButtonClick = () => onDelete(todo.id);


  const handleEditFormSubmit = (data: { [key: string]: string }) => {
    const newTodo: TodoProps = { ...todo, text: data[`edit-${todo.id}`] };
    if(newTodo.text.trim().length === 0){
      alert('Todo를 입력해주세요.');
      return;
    }else{
      onEdit(newTodo);
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-col justify-center text-14-400 gap-[1rem]">
    {isEditing ? (
        <form
          className="mt-2 list-none flex flex-row justify-center gap-2 border-black-0 border-dashed border-b-2"
          onSubmit={handleSubmit(handleEditFormSubmit)}
        >
          <input
            type="text"
            id={`edit-${todo.id}`}
            {...register(`edit-${todo.id}`, { required: true,            
              minLength: {
              value: 4,
              message: '네 글자 이상 입력해주세요.',
            }, })}
          />
          <button type="submit"> <FaEdit /></button>
          <button type="button" onClick={handleCancelButtonClick}> <MdCancelScheduleSend /></button>
        </form>
      ) : (
        <form
          className="mt-2 list-none flex flex-row justify-center gap-2 border-black-0  border-dashed border-b-2"
          onSubmit={handleSubmit(handleCheckboxChange)}
        >
          <input
            type="checkbox"
            id={`checkbox-${todo.id}`}
            {...register(`checkbox-${todo.id}`)}
            defaultChecked={todo.status === 'Completed'}
            onChange={onChecked}
          />
          <label>{todo.text}</label>
          <button type="button" onClick={handleEditButtonClick}>
            <FaEdit />
          </button>
          <button type="button" onClick={handleDeleteButtonClick}>
            <FaRegTrashAlt />
          </button>
          <label className='text-12-400 text-gray-9'>{todo.time}</label>
        </form>
      )}
    </div>
  );
}