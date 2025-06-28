import { Head } from '@inertiajs/react'
import Layout from '@/layouts/main-layout';
import Container from '@/components/layout/container';
import { LinkButton } from '@/components/ui/button';

export default function Landing() {
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
				<Container background="canvas" className="h-[100vh]">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 xl:gap-32 z-2 relative items-center">
						<div className='relative order-2 md:-order-1'>
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
						<div>
							<h1>Thank you for your interest</h1>
							<p>You will be able to access the dashboard after being manualy accepted into the beta test!</p>
							<p>The waiting time highly depends on the server capacity, but we review the applications regulary.</p>
							<p>Stay tuned! 🌿</p>
							<LinkButton className="mt-[1.5rem]" method="post" href={route('logout')}>Log me out</LinkButton>
						</div>
					</div>
				</Container>
			</Layout>
		</>
	);
}