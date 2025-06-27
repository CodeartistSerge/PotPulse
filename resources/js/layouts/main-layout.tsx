import { useEffect, type ReactNode } from 'react';
import Wrapper from '@/components/layout/wrapper';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface containerProps {
	children: ReactNode;
}

export default function MainLayout({children}:containerProps) {
	const popupsState = useSelector((state:RootState) => state.popups);
	const anyPopupsOpen = Object.values(popupsState).reduce((acc, val) => {
		return acc = val.isOpen || acc;
	}, false)
	useEffect(() => {
		if(typeof window !== 'undefined') {
			// We don't have document on teh server?
			if(anyPopupsOpen) {
				document.body.classList.add('popupIsOpen');
			} else {
				document.body.classList.remove('popupIsOpen');
			}
		}
	}, [anyPopupsOpen]);
	return (
		<Wrapper>
			<Header/>
			{children}
			<Footer/>
		</Wrapper>
	)
}