import { Head } from '@inertiajs/react'
import Layout from '@/layouts/main-layout';
import Container from '@/components/layout/container';
import Button, { LinkButton } from '@/components/ui/button';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { openPopup } from '@/store/popups';

export default function Landing() {
	const uniqueID = useId();
	let counter = 0;
	const dispatch = useDispatch();
	const handleJoinBetaClick = () => {
		dispatch(openPopup('login'))
	}
	return (
		<>
			<Head
				title={`Homepage`}
			>
				<link rel="icon" type="image/svg+xml" href="/assets/logo/logo.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
			</Head>
			<Layout>
				<Container background="canvas">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-32 z-2 relative items-center">
						<div>
							<h1>Let your <span className="text-accent">plants</span> set the pace</h1>
							<p>Set it once with your plant and pot size - PlanToWater handles the rest. It watches the weather and listens to your feedback to gently adjust the rhythm. No more overthinking.</p>
							<div className="flex flex-raw gap-4 mt-12">
								<Button onClick={handleJoinBetaClick}>Join the Beta</Button>
								<LinkButton mod="transparent" href="/#how-it-works">How it works</LinkButton>
							</div>
						</div>
						<div className='relative -order-1 md:order-2'>
							<div className="
								bg-primary
								rounded-lg
								w100
								h-auto
								relative
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
									alt='PlanToWater'
									className="
										w-100%
										h-auto
										stroke-white
									"
								/>
								<img
									src='/assets/logo/logo-w.svg'
									alt='PlanToWater'
									className="animate-[short-ping_1s_ease-in-out_infinite]
										w-[12rem]
										md:w-[17rem]
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
								<img
									src='/assets/logo/logo-w.svg'
									alt='PlanToWater'
									className="
										w-[12rem]
										md:w-[17rem]
										h-auto
										absolute
										top-1/2
										left-1/2
										-translate-x-1/2
										-translate-y-1/2
										stroke-white
										z-5
									"
								/>
							</div>
						</div>
					</div>
				</Container>
				<Container background="white">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-16 xl:gap-32 z-2 relative items-start">
						{(() => {
							const data = [
								{
									id: 1,
									title: 'Smart Reminders',
									description: 'Smart, weather-aware nudges automatically adjust themselves, guided by your quick "dry-or-not" fingertip check, ensuring perfectly timed watering reminders every time.',
									image: '/assets/water-plant.png',
								},
								{
									id: 2,
									title: 'Zero Over-Watering',
									description: 'Forget root-rot: PlanToWater understands how your plant behaves in its environment, learning its natural rhythm over time and intelligently shifting reminders to avoid unnecessary or premature watering.',
									image: '/assets/watering.png',
								},
								{
									id: 3,
									title: 'One-Tap Updates',
									description: 'Mark entire plant groups or shelves in a single tap - no more tapping through dozens of reminders. Say goodbye to notification clutter and hello to calm, efficient plant care.',
									image: '/assets/bedroom-plants.png',
								},
							];
							return data.map((item) => (
								<div className="flex flex-col align-center justify-center" key={item.id}>
									<img
										src={item.image}
										alt='PlanToWater'
										className="w100% h-auto -mb-24 md:-mb-16 xl:-mb-32"
									/>
									<div className="block bg-white w-[60%] h-[0] pb-[60%] rounded-lg ml-[20%] mb-12 shadow-lg relative">
										<h5 className="text-center absolute w-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.2em] py-4">{item.title}</h5>
									</div>
									<p>{item.description}</p>
								</div>
							));
						})()}
					</div>
				</Container>
				<Container background="canvas" className="gap-8 items-center justify-center" direction='row' id="how-it-works">
					<div className="w-[100%] md:w-[30%] flex-grow-0">
						<h2>How It Works</h2>
					</div>
					<div className="w-[100%] md:w-[30%] flex-grow-0">
						<p>PlanToWater gently learns your plant's watering rhythm through simple feedback and weather awareness. No complicated sensors, no stress.</p>
					</div>
				</Container>
				<Container background="white" className="gap-[9.7vw] xl:gap-64 pt-60" direction='row'>
					{(() => {
						const data = [
							{
								id: 1,
								title: 'Add Your Plants',
								description: 'Pick a soil type, container size, and maturity level-just once per plant.',
								image: '/assets/add-plant-1.png',
							},
							{
								id: 2,
								title: 'Let Weather Sync',
								description: 'PlanToWater checks humidity and heat daily, adapting to your local forecast.',
								image: '/assets/weather-1.png',
							},
							{
								id: 3,
								title: 'Give Reminders a Feedback',
								description: 'Get a gentle nudge-tap "dry" or "still moist". PlanToWater learns fast evolving its reminders.',
								image: '/assets/lush.png',
							},
						];
						return data.map((item) => (
							<div className="relative *:relative *:z-2 not-last:pb-32 md:not-last:pb-32 how-it-work-pt-0 md:how-it-work-pt-32" key={uniqueID + (counter++)} style={{['--how-it-works-index' as string]: item.id}}>
								<div className="[&]:absolute [&]:z-1 text-[18rem] text-accent/20 left-0 -translate-y-65 -translate-x-[7rem] tracking-tighter">0{item.id}</div>
								<img
									src={item.image}
									alt='PlanToWater'
									className="w100% h-auto mb-12 xl:mb-16"
								/>
								<h4 className="mb-8 xl:mb-16 leading-[1.2em] py-4">{item.title}</h4>
								<p className="mb-12 xl:mb-24">{item.description}</p>
							</div>
						));
					})()}
				</Container>
				<Container background="canvas" className="text-center">
					<div>
						<h3>Enjoy the Rhythm</h3>
						<div className="mb-12">
							<p>PlanToWater evolves its reminders as your plants grow.</p>
							<p>Join a handful of plant lovers shaping the future of easy care.</p>
						</div>
						<Button onClick={handleJoinBetaClick}>Request Invite</Button>
					</div>
				</Container>
			</Layout>
		</>
	);
}