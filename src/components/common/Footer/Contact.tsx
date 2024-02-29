import { FaGithub } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';
import { SiVelog } from 'react-icons/si';
import Link from 'next/link';

export default function Contact() {
	return (
		<footer>
			<ul className='felx-row flex gap-[1rem]'>
				<Link href='https://github.com/PJW980921'>
					<li>
						<FaGithub />
					</li>
				</Link>
				<Link href='mailto:jackgg12322@gmail.com'>
					{' '}
					<li>
						<TbBrandGmail />
					</li>
				</Link>
				<Link href='https://velog.io/@jackgg12322/posts'>
					{' '}
					<li>
						<SiVelog />
					</li>
				</Link>
			</ul>
		</footer>
	);
}
