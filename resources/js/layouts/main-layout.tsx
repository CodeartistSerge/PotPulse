import { type ReactNode } from 'react';
import Wrapper from '@/components/layout/wrapper';
import Header from '@/components/global/header';
import Footer from '@/components/global/footer';

interface containerProps {
	children: ReactNode;
}

export default function MainLayout({children}:containerProps) {
	return (
		<Wrapper>
			<Header/>
			{children}
			<Footer/>
		</Wrapper>
	)
}