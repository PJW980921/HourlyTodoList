import React from 'react';
import { TbPencilPlus } from 'react-icons/tb';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { todayTime } from '@/pages/Date';

interface IForm {
  todo: string;
}

interface TodoFormProps {
  onAdd: (newTodo: { id: string; text: string; status: string, time: string  }) => void;
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>();



  const onSubmit = (data: IForm) => {
    if(data.todo.trim().length === 0) {
      alert('Todo를 입력해주세요.');
      return;
    }
    const currentTime = todayTime().slice(12, 19);
    onAdd({ id: uuidv4(), text: data.todo, status : 'Todo', time: currentTime });
    reset();
  };

  return (
    <form className="flex flex-row gap-[1rem]" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <input
          type="text"
          {...register('todo', {
            minLength: {
              value: 4,
              message: '네 글자 이상 입력해주세요.',
            },
          })}
          onChange={(e) => setValue('todo', e.target.value)}
          placeholder="오늘의 할일은 무엇인가요?"
          className="w-full border-2 border-solid border-black-0 rounded-[1rem]"
        />
        <label className="flex items-center text-[0.6rem] text-red">{!isValid ? errors?.todo?.message : null}</label>
      </div>
      <button type="submit" className="flex-shrink-0 flex border-2 border-solid rounded-full border-black-0 w-[2rem] items-center justify-center">
        <TbPencilPlus />
      </button>
    </form>
  );
}