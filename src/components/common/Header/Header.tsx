import Link from "next/link";
import DarkModeButton from '../Main/DarkModeButton';

export default function Header () {
  return (
    <header className="flex flex-row gap-[1rem] w-full m-[1rem]">
      <Link href='/'><span className="w-full flex flex-row text-[2rem]">HourlyTodoList</span></Link>
      <DarkModeButton/>
    </header>
  )
}
