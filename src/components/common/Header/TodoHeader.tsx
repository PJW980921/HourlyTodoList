
interface TodoHeaderProps {
  filter: string;
  filters: string[];
  onFilterChange: (filter: string) => void;
}
export default function TodoHeader({filters, filter,onFilterChange} : TodoHeaderProps) {
  return (
    <header className=" border-black-0 border-solid border-b-2">
    <ul className="active:border-black-0 text-[2rem] flex flex-row justify-around items-center gap-[5rem] m-[1rem]">
      {filters.map((item,id)=> <li className={`${filter === item ? "border-b-2 " : null }`} key={id}>            
      <button
              onClick={() => onFilterChange(item)}
            >
              {item}
            </button></li>)}
    </ul>
    </header>
  );
}


