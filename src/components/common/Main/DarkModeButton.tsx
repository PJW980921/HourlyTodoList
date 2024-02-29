import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { BsMoonStarsFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
import { Switch } from 'antd';

const DarkModeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<label className='flex flex-row items-center justify-center'>
			<Switch
				className=' bg-black-4'
				checked={theme === 'dark'}
				checkedChildren={
					<BsSunFill className=' mt-[0.3rem] flex flex-row items-center justify-center text-yellow-300' />
				}
				unCheckedChildren={
					<BsMoonStarsFill className=' mt-[0.6rem] flex flex-row items-center justify-center text-yellow-300' />
				}
				onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			/>
		</label>
	);
};

export default DarkModeButton;
