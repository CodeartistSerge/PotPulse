import { Link } from '@inertiajs/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva([
	'bg-accent',
	'rounded-full',
	'py-4',
	'px-8',
	'xl:py-6',
	'xl:px-10',
	'text-white',
	'text-[1.4rem]',
	'xl:text-[2rem]',
	'shadow-md',
	'cursor-pointer',
	'hover:brightness-95',
	'transition-all',
	'duration-300',
	'font-["Poppins",sans-serif]',
	'font-semibold',
], {
	variants: {
		size: {
			regular: [],
			large: [],
			small: [],
			icon: [],
		},
		mod: {
			regular: [],
			transparent: [
				'bg-transparent',
				'border',
				'border-accent',
				'text-accent',
				'hover:bg-accent/10',
			],
			outline: [
				'bg-transparent',
				'border',
				'border-text',
				'text-text',
				'hover:bg-accent/10',
			],
			white: [
				'bg-white',
				'border',
				'border-accent',
				'text-accent',
				'hover:bg-white/90',
			],
			highlight: [
				'bg-highlight',
				'border',
				'border-highlight',
				'text-white',
			],
		},
		purpose: {
			regular: [],
			header: [
				'py-0!',
				'leading-[2em]',
				'h-[2.2em]',
				'font-["Raleway",sans-serif]',
				// 'font-normal',
			],
		}
	},
	defaultVariants: {
		size: 'regular',
		purpose: 'regular',
		mod: 'regular',
	},
});

interface buttonProps {
	text: string;
	className?: string;
	href?: string;
	size?: VariantProps<typeof buttonVariants>['size'];
	purpose?: VariantProps<typeof buttonVariants>['purpose'];
	mod?: VariantProps<typeof buttonVariants>['mod'];
}

export default function Button({ text, size, purpose, mod, href, className = '' }: buttonProps) {
	if (href) {
		return <Link href={href} className={twMerge(buttonVariants({ size, purpose, mod }), className)}>{text}</Link>
	} else {
		return (
			<button className={twMerge(buttonVariants({ size, purpose, mod }), className)} >{text}</button>
		)
	}
}