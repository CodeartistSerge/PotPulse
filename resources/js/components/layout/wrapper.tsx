import { type ReactNode } from 'react';

interface wrapperProps {
	children: ReactNode;
}

export default function Wrapper({children}:wrapperProps) {
	return (
		<div className='
			block
			w100%
			relative
			overflow-hidden
			bg-canvas
		'>
			{children}
		</div>
	)
}