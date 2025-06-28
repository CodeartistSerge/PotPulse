import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { LinkButton } from '@/components/ui/button';
import { Link, usePage } from '@inertiajs/react';
import { openPopup } from '@/store/popups';
import { useDispatch } from 'react-redux';
import { SharedData } from '@/types';

export default function Header() {
	const { auth } = usePage<SharedData>().props;
	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(openPopup('login'))
	}
	return (
		<Container direction='alwaysrow' background="accent" className="
			z-10
			py-4!
			before:shadow-lg
		">
			<div className=' flex-grow-0'>
				<Link href='/' className="flex flex-row items-center gap-2 md:gap-4 no-underline">
					<img
						src='/assets/logo/logo-w.svg'
						alt='PlanToWater'
						className='w-[3rem] md:w-[5rem] w-auto h-[5rem]'
					/>
					<span className="text-white font-semibold text-[2rem]/20 md:text-[3rem]/20 tracking-tighter font-['Poppins',sans-serif]">PlanToWater</span>
				</Link>
			</div>
			<div className='flex-grow-1 flex justify-end items-center'>
				{(() => {
					if(auth?.user?.name)
						return <LinkButton mod="white" method="get" purpose="header" onClick={handleLogin} href={route('dashboard')}>{auth.user.name}</LinkButton>
					else
						return <Button mod="white" purpose="header" onClick={handleLogin} >Log In</Button>
				})()}
			</div>
		</Container>
	)
}