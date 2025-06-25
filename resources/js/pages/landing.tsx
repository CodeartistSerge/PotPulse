import { Head } from '@inertiajs/react'
import Layout from '@/layouts/main-layout';
import Container from '@/components/layout/container';

interface LandingProps {
	name: string;
}

export default function Landing({ name }:LandingProps) {
	return (
		<>
			<Head
				title="Welcome"
			>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
			</Head>
			<Layout>
				<Container
					className="
						before:content['']
						before:absolute
						before:block
						before:top-1/2
						before:left-1/2
						before:-translate-x-1/2
						before:-translate-y-1/2
						before:w-[100vw]
						before:h-[100%]
						before:bg-canvas
						before:z-1
					"
				>
					<div className="grid grid-cols-2 gap-16">
						<div>
							<h1>Feel the <span className="text-accent">pulse</span> of every pot</h1>
							<p>PotPulse learns from your weather and quick soil checks to nudge you just in time - never too early, never too late</p>
						</div>
						<div>
							<h1>Feel the pulse of every pot.</h1>
							<p>PotPulse learns from your weather and quick soil checks to nudge you just in time - never too early, never too late.</p>
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
}