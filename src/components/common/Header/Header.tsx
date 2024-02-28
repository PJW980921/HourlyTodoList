import Link from 'next/link';
import DarkModeButton from '../Main/DarkModeButton';

export default function Header() {
	return (
		<header className='m-[1rem] flex w-full flex-row gap-[1rem]'>
			<Link href='/'>
				<span className='flex w-full flex-row text-[2rem]'>HourlyTodoList</span>
			</Link>
			<DarkModeButton />
		</header>
	);
}
