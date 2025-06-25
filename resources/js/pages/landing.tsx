import { Head } from '@inertiajs/react'
import Layout from '@/layouts/main-layout';
import Container from '@/components/layout/container';
import Button from '@/components/ui/button';

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
				<Container background="canvas">
					<div className="grid grid-cols-2 gap-32 z-2 relative">
						<div>
							<h1>Feel the <span className="text-accent">pulse</span> of every pot</h1>
							<p>PotPulse learns from your weather and quick soil checks to nudge you just in time - never too early, never too late</p>
							<div className="flex flex-raw gap-4">
								<Button text="Join the Beta" />
								<Button text="How it works" mod="transparent" />
							</div>
						</div>
						<div className='relative'>
							<div className="
								bg-primary
								rounded-lg
								w100
								h-[30rem]
								relative
								top-1/2
								left-1/2
								-translate-x-1/2
								-translate-y-1/2
								overflow-hidden

								before:content['']
								before:absolute
								before:block
								before:top-1/2
								before:left-1/2
								before:-translate-x-1/2
								before:-translate-y-1/2
								before:w-[100vw]
								before:h-[100%]
								before:z-3
								before:bg-canvas/20
							">
								<img
									src='/assets/landing-hero.png'
									alt='PotPulse'
									className="
										w-100%
										h-auto
										absolute
										top-1/2
										left-1/2
										-translate-x-1/2
										-translate-y-1/2
										stroke-white
									"
								/>
								<img
									src='/assets/logo/logo-w.svg'
									alt='PotPulse'
									className="
										w-[17rem]
										h-auto
										absolute
										top-1/2
										left-1/2
										-translate-x-1/2
										-translate-y-1/2
										stroke-white
										z-5
										opacity-60
									"
								/>
							</div>
						</div>
					</div>
				</Container>
				<Container background="white">
					<div className="grid grid-cols-3 gap-32 z-2 relative items-start">
						<div className="flex flex-col align-center justify-center">
							<img
								src='/assets/landing-hero.png'
								alt='PotPulse'
								className="w100% h-auto -mb-32"
							/>
							<div className="block bg-canvas w-[60%] h-[0] pb-[60%] rounded-lg ml-[20%] mb-12 shadow-lg relative">
								<h5 className="text-center absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Smart Reminders</h5>
							</div>
							<p>Weather-aware nudges tuned by your quick "dry or not" check. Weather-aware nudges tuned by your quick "dry or not" check.</p>
						</div>
						<div className="flex flex-col align-center justify-center">
							<img
								src='/assets/landing-hero.png'
								alt='PotPulse'
								className="w100% h-auto -mb-32"
							/>
							<div className="block bg-canvas w-[60%] h-[0] pb-[60%] rounded-lg ml-[20%] mb-12 shadow-lg relative">
								<h5 className="text-center absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Zero Over-Watering</h5>
							</div>
							<p>Forget root-rot: PotPulse learns your plant's rhythm and shifts alerts automatically. Forget root-rot: PotPulse learns your plant's rhythm and shifts alerts automatically.</p>
						</div>
						<div className="flex flex-col align-center justify-center">
							<img
								src='/assets/landing-hero.png'
								alt='PotPulse'
								className="w100% h-auto -mb-32"
							/>
							<div className="block bg-canvas w-[60%] h-[0] pb-[60%] rounded-lg ml-[20%] mb-12 shadow-lg relative">
								<h5 className="text-center absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">One-Tap Updates</h5>
							</div>
							<p>Mark whole shelves at once. Bye-bye, notification clutter. Mark whole shelves at once. Bye-bye, notification clutter.</p>
						</div>
					</div>
				</Container>
				<Container background="canvas" className="text-center">
					<div>
						<h3>Let the sunshine in</h3>
						<p>Join a handful of plant lovers shaping the future of easy care.</p>
						<Button text="Request Invote" />
					</div>
				</Container>
			</Layout>
		</>
	);
}