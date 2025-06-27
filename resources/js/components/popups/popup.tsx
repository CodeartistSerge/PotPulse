import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge'
import Button from '@/components/ui/button';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux';
import { closePopup } from '@/store/popups';

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
	visible: boolean,
	children: ReactNode;
	className?: string;
	direction?: VariantProps<typeof popupVariants>['direction'];
	background?: VariantProps<typeof popupVariants>['background'];
}

export default function Popup({ children, visible=true, direction, background, className = '' }: popupProps) {
	const dispatch = useDispatch();
	const handleClose = () => {
		console.log('popup handleClose func');
		dispatch(closePopup('login'));
	}
	return (
		visible &&
		<section className={twMerge(popupVariants({ direction, background }), className)}>
			<div className="relative bg-white rounded-[2rem] max-w-[140rem] max-h-[calc(100vh-18rem)] py-[8rem] px-[12rem] w100% flex-grow-1 overflow-y-auto">
				<Button
					size="icon"
					mod="highlight"
					text={<XMarkIcon className='fill-white size-[2rem]'/>}
					className="absolute top-[4rem] right-[4rem] z-10 translate-x-[50%] -translate-y-[50%] shadow-none text-[2rem]!"
					onClick={handleClose}
				/>
				{children}
			</div>
		</section>
	)
}