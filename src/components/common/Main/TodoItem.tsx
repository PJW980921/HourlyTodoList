import { useForm } from 'react-hook-form';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';

interface TodoProps {
  id: string;
  text: string;
  status: string;
}

interface TodoItemProps {
  todo: TodoProps;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onDelete }: TodoItemProps) {
  const { register, handleSubmit } = useForm();

  const handleCheckboxChange = (data: { [key: string]: boolean }) => {
    console.log(data);

  };

  const handleEditButtonClick = () => {
    
  };

  const handleDeleteButtonClick = () => onDelete(todo.id);

  return (
    <div className="flex flex-col justify-center text-14-400 gap-[1rem]">
      <form
        className="mt-2 list-none flex flex-row justify-center gap-2 border-black-0  border-dashed border-b-2"
        onSubmit={handleSubmit(handleCheckboxChange)}
      >
        <input
          type="checkbox"
          id={`checkbox-${todo.id}`}
          {...register(`checkbox-${todo.id}`)}
          defaultChecked={todo.status === 'completed'} 
        />
        <label htmlFor={`checkbox-${todo.id}`}>{todo.text}</label>
        <button type="button" onClick={handleEditButtonClick}>
          <FaEdit />
        </button>
        <button type="button" onClick={handleDeleteButtonClick}>
          <FaRegTrashAlt />
        </button>
      </form>
    </div>
  );
}