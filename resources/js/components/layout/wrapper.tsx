import { type ReactNode } from 'react';

interface wrapperProps {
	children: ReactNode;
}

export default function Wrapper({children}:wrapperProps) {
	return (
		<div className='
			block
			overflow-hidden
			w100%
			relative
			bg-canvas
		'>
			{children}
		</div>
	)
}