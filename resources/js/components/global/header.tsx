import { type ReactNode } from 'react';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Header() {
	return (
		<Container direction='row' className="
			z-10
			py-8
			before:shadow-lg
		">
			<div className='w-[5rem] flex-grow-0'>
				<Link href='/' className="flex flex-row items-center gap-2">
					<img
						src='/assets/logo/logo.svg'
						alt='PotPulse'
						className='w-auto h-[5rem]'
					/>
					<span className="text-accent font-semibold text-[3rem]/20 tracking-tighter font-['Poppins',sans-serif]">PotPulse</span>
				</Link>
			</div>
			<div className='flex-grow-1 flex justify-end'>
				<Button text="Get Early Access" purpose="header" />
			</div>
		</Container>
	)
}