export default function TodoHeader() {
  const navTitles = ['All', 'Todo', 'Completed'];
  return (
    <header className=" border-black-0 border-solid border-b-2">
    <ul className=" active:border-black-4 text-[2rem] flex flex-row justify-around items-center gap-[5rem] m-[1rem]">
      {navTitles.map((item,id)=> <li key={id}>{item}</li>)}
    </ul>
    </header>
  );
}


