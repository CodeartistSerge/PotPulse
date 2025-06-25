import { type ReactNode } from 'react';
import Wrapper from '@/components/layout/wrapper';
import Header from '@/components/global/header';

interface containerProps {
	children: ReactNode;
}

export default function MainLayout({children}:containerProps) {
	return (
		<Wrapper>
			<Header/>
			{children}
		</Wrapper>
	)
}