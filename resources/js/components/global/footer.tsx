import Container from '@/components/layout/container';
import Popup from '@/components/popups/popup';
import Button from '@/components/ui/button';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

export default function Footer() {
	const loginPopupState = useSelector((state:RootState) => state.popups.login );
	return (
		<>
			<Container background="accent" className="
				text-center
				z-10
				[&]:py-8
				before:shadow-lg
				before:-scale-y-100
			">
				<small className="text-white">© 2025 PotPulse • Made with love in New Zealand</small>
			</Container>
			<Popup visible={ loginPopupState.isOpen }>
				<h1>Hi there!</h1>
			</Popup>
		</>
	)
}