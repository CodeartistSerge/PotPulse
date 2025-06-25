import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
// import './container.css';

const containerVariants = cva([
	'relative',
	'flex',
	'w-100%',
	'max-w-[140rem]',
	'mx-auto',
	'py-4',
	'*:relative',
	'*:z-2',
	'*:flex-nowrap',
	/*
		position: relative;
		display: flex;
		width: 100%;
		max-width: 140rem;
		margin: 0 auto;
		padding: 1rem;
		> * {
			position: relative;
			z-index: 2;
			flex-wrap: nowrap;
		}
	*/
], {
	variants: {
		direction: {
			col: [
				'flex-col',
				'*:flex-grow-1',
				/*
					flex-direction: column;
					> * {
						flex-grow: 1;
					}
				*/
			],
			row: [
				'flex-row',
				/*
					flex-direction: row;
				*/
			]
		}
	},
	defaultVariants: {
		direction: 'col'
	},
});

interface containerProps {
	children: ReactNode;
	className?: string;
	direction?: VariantProps<typeof containerVariants>['direction'];
}

export default function Container({ children, direction, className = '' }: containerProps) {
	return (
		// <div className={`caContainer ${className}`}
		<div className={containerVariants({ direction, className: className })}
		>
			{children}
		</div>
	)
}