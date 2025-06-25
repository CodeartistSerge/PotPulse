import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'

const containerVariants = cva([
	'relative',
	'flex',
	'w-100%',
	'max-w-[140rem]',
	'mx-auto',
	'py-32',
	'*:relative',
	'*:z-2',
	'*:flex-nowrap',

	'before:content[""]',
	'before:absolute',
	'before:block',
	'before:top-1/2',
	'before:left-1/2',
	'before:-translate-x-1/2',
	'before:-translate-y-1/2',
	'before:w-[100vw]',
	'before:h-[100%]',
	'before:z-1',
], {
	variants: {
		direction: {
			col: [
				'flex-col',
				'*:flex-grow-1',
			],
			row: [
				'flex-row',
			]
		},
		background: {
			primary: [
				'before:bg-primary',
			],
			canvas: [
				'before:bg-canvas',
			],
			highlight: [
				'before:bg-highlight',
			],
			white: [
				'before:bg-white',
			]
		}
	},
	defaultVariants: {
		direction: 'col',
		background: 'canvas',
	},
});

interface containerProps {
	children: ReactNode;
	className?: string;
	direction?: VariantProps<typeof containerVariants>['direction'];
	background?: VariantProps<typeof containerVariants>['background'];
}

export default function Container({ children, direction, background, className = '' }: containerProps) {
	return (
		<section className={twMerge(containerVariants({ direction, background }), className)} >
			{children}
		</section>
	)
}