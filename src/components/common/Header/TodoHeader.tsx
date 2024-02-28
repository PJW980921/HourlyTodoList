interface TodoHeaderProps {
	filter: string;
	filters: string[];
	onFilterChange: (filter: string) => void;
}
export default function TodoHeader({ filters, filter, onFilterChange }: TodoHeaderProps) {
	return (
		<header className=' border-b-2 border-solid border-black-0'>
			<ul className='m-[1rem] flex flex-row items-center justify-around gap-[5rem] text-[2rem] active:border-black-0'>
				{filters.map((item, id) => (
					<li className={`${filter === item ? 'border-b-2 ' : null}`} key={id}>
						<button onClick={() => onFilterChange(item)}>{item}</button>
					</li>
				))}
			</ul>
		</header>
	);
}
