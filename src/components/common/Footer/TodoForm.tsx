import { TbPencilPlus } from "react-icons/tb";

export default function TodoForm() {
  return (
    <form className="flex flex-row gap-[1rem]">
      <input type="text" className=" w-full border-2 border-solid border-black-0 rounded-[1rem]" />
      <button className="flex flex-row border-2 border-solid border-black-0 w-[2rem] items-center justify-center"><TbPencilPlus /></button>
    </form>
  );
}

