import Container from '@/components/layout/container';
import LoginPopup from '@/components/popups/loginPopup';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import RegisterPopup from '../popups/registerPopup';

export default function Footer() {
	const loginPopupState = useSelector((state:RootState) => state.popups.login );
	const registerPopupState = useSelector((state:RootState) => state.popups.register );
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
			<LoginPopup visible={ loginPopupState.isOpen } canResetPassword={false} />
			<RegisterPopup visible={ registerPopupState.isOpen } />
		</>
	)
}