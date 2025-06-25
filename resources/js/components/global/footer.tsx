import { type ReactNode } from 'react';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function Footer() {
	return (
		<Container className="
			text-center
			z-10
			py-8
			before:shadow-lg
			before:-scale-y-100
		">
			<small>© 2025 PotPulse • Made with 🌱 in New Zealand </small>
		</Container>
	)
}