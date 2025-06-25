import { type ReactNode } from 'react';
import './container.css';

interface containerProps {
	children: ReactNode;
	className?: string;
}

export default function Container({ children, className = '' }: containerProps) {
	return (
		<div className={`caContainer ${className}`}
		>
			{children}
		</div>
	)
}