import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { openPopup } from '@/store/popups';
import { useDispatch } from 'react-redux';

export default function Header() {
	const dispatch = useDispatch();
	const handleLogin = () => {
		console.log('footer handleLogin func');
		dispatch(openPopup('login'))
	}
	return (
		<Container direction='alwaysrow' background="accent" className="
			z-10
			py-4!
			before:shadow-lg
		">
			<div className='w-[3rem] md:w-[5rem] flex-grow-0'>
				<Link href='/' className="flex flex-row items-center gap-2 md:gap-4 no-underline">
					<img
						src='/assets/logo/logo-w.svg'
						alt='PotPulse'
						className='w-auto h-[5rem]'
					/>
					<span className="text-white font-semibold text-[2rem]/20 md:text-[3rem]/20 tracking-tighter font-['Poppins',sans-serif]">PotPulse</span>
				</Link>
			</div>
			<div className='flex-grow-1 flex justify-end items-center'>
				<Button mod="white" purpose="header" onClick={handleLogin} >Log In</Button>
			</div>
		</Container>
	)
}