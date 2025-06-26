import { type ReactNode } from 'react';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Header() {
	return (
		<Container direction='row' background="accent" className="
			z-10
			py-4
			before:shadow-lg
		">
			<div className='w-[5rem] flex-grow-0'>
				<Link href='/' className="flex flex-row items-center gap-4">
					<img
						src='/assets/logo/logo-w.svg'
						alt='PotPulse'
						className='w-auto h-[5rem]'
					/>
					<span className="text-white font-semibold text-[3rem]/20 tracking-tighter font-['Poppins',sans-serif]">PotPulse</span>
				</Link>
			</div>
			<div className='flex-grow-1 flex justify-end items-center'>
				<Button text="Log In" mod="white" purpose="header" />
			</div>
		</Container>
	)
}