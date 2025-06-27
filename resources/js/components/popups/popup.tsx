import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'
import Button from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { closePopup, popupsState } from '@/store/popups';
import { X } from 'lucide-react';

const popupVariants = cva([
	'fixed',
	'flex',
	'items-center',
	'justify-center',
	'top-0',
	'left-0',
	'w-full',
	'h-full',
	'z-50',
	'bg-highlight/60',
	'overflow-hidden',
], {
	variants: {
		direction: {
			col: [],
		},
		background: {
			canvas: [],
		},
	},
	defaultVariants: {
		direction: 'col',
		background: 'canvas',
	},
});

interface popupProps {
	name: keyof popupsState,
	visible: boolean,
	children: ReactNode;
	className?: string;
	direction?: VariantProps<typeof popupVariants>['direction'];
	background?: VariantProps<typeof popupVariants>['background'];
}

export default function Popup({ name, children, visible=true, direction, background, className = '' }: popupProps) {
	const dispatch = useDispatch();
	const handleClose = () => {
		console.log('popup handleClose func');
		dispatch(closePopup(name));
	}
	return (
		visible &&
		<section className={popupVariants({ direction, background })}>

			<div className={twMerge("relative bg-white rounded-[2rem] max-w-[140rem] max-h-[calc(100vh-18rem)] py-[8rem] px-[6rem] md:px-[12rem] mx-[3rem] w100% flex-grow-1 overflow-y-auto", className)}>
				<Button
					size="icon"
					mod="highlight"
					className="absolute top-[4rem] right-[4rem] z-10 translate-x-[50%] -translate-y-[50%] shadow-none text-[2rem]!"
					onClick={handleClose}
				><X className='stroke-white size-[2rem]' /></Button>
				{children}
			</div>
		</section>
	)
}