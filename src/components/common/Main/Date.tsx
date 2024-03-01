import { getTodayTime } from '@/../../src/Date';
import React from 'react';

interface DateProps {
	newTime: string;
}
export default function DateMain({ newTime }: DateProps) {
	return (
		<main>
			<p className='flex items-center justify-center text-42-700'>{newTime}</p>
			<p className='flex items-center justify-center text-14-400 text-gray-7'>
				{getTodayTime().slice(0, 9) + getTodayTime().slice(9, 11)}
			</p>
		</main>
	);
}
