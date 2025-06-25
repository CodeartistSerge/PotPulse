import { type ReactNode } from 'react';
import Container from '@/components/layout/container';
import { Link } from '@inertiajs/react';

export default function Header() {
	return (
		<Container direction='row'>
			<div className='w-[5rem] flex-grow-0'>
				<Link href='/'>
					<img
						src='/assets/logo/logo.svg'
						alt='PotPulse'
						className='w-full h-auto'
					/>
				</Link>
			</div>
			<div className='w-[5rem] flex-grow-0'>
				<Link href='/'>
					<img
						src='/assets/logo/logo.svg'
						alt='PotPulse'
						className='w-full h-auto'
					/>
				</Link>
			</div>
		</Container>
	)
}