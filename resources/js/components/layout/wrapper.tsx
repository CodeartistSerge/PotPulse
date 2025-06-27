import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

interface wrapperProps {
	children: ReactNode;
}

export default function Wrapper({children}:wrapperProps) {

	return (
		<div className={cn(
			"block overflow-hidden w100% relative bg-canvas",
		)}>
			{children}
		</div>
	)
}