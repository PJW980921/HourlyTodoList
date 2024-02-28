import Header from '@/components/common/Header/Header';
import TodoHeader from '@/components/common/Header/TodoHeader';
import { PoorStory } from '@/styles/fonts/fonts';
import Date from '../components/common/Main/Date';
import Contact from '@/components/common/Footer/Contact';
import TodoMain from '@/components/common/Main/TodoMain';
import Vector from '@/../public/images/Vector.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getTodayTime } from '../Date';
import { Providers } from '@/components/common/Main/Providers';
const filters = ['All', 'Todo', 'Completed'];
export default function Home() {
	const [filter, setFilter] = useState(filters[0]);
	const [newTime, setNewTime] = useState('');

	useEffect(() => {
		const liveTime = setInterval(() => {
			setNewTime(getTodayTime().slice(12, 19));
		}, 1000);
		return () => clearInterval(liveTime);
	}, []);
	return (
		<Providers>
			<div className='mt-8 flex justify-center'>
				<main
					className={`${PoorStory.className} flex h-[35rem] w-[60rem] flex-row justify-around rounded-[5rem] border-2 border-solid border-black-0 `}
				>
					<div className='flex flex-col items-center gap-[10rem]'>
						<Header />
						<Date newTime={newTime} />
						<Contact />
					</div>
					<Image width={1} height={250} src={Vector} className='bg-black-0' alt='중앙 선' />
					<div className='flex flex-col gap-[1rem]'>
						<TodoHeader filters={filters} filter={filter} onFilterChange={setFilter} />
						<TodoMain filter={filter} />
					</div>
				</main>
			</div>
		</Providers>
	);
}
