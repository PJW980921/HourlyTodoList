import Link from "next/link";

export default function Header () {
  return (
    <header className="w-full m-[1rem]">
      <Link href='/'><span className="w-full flex flex-row text-[2rem]">HourlyTodoList</span></Link>
    </header>
  )
}
