import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
export default function TodoMain() {
  return (
    <main className='w-full h-[25rem] border-2 border-solid border-black-0 rounded-[2rem] '>
      <div className='flex flex-col justify-center text-14-400 gap-[1rem]'>
      <li className="mt-2 list-none flex flex-row justify-center gap-2 border-black-0  border-dashed border-b-2">
      <input type="checkbox" />
      <label htmlFor="checkbox">공부하기</label>
      <div className="flex items-center gap-2">
      <button><FaEdit /></button>
      <button><FaRegTrashAlt /></button>
      </div>
      </li>
      <li className="list-none flex flex-row justify-center gap-2 border-black-0 border-dashed border-b-2">
      <input type="checkbox" />
      <label htmlFor="checkbox">청소하기</label>
      <div className="flex items-center gap-2">
      <button><FaEdit /></button>
      <button><FaRegTrashAlt /></button>
      </div>
      </li>
      </div>
    </main>
  );
}

