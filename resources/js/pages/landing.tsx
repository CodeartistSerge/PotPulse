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
						caContainer-col
						before:content['']
						before:absolute
						before:block
						before:top-1/2
						before:left-1/2
						before:-translate-x-1/2
						before:-translate-y-1/2
						before:w-[100vw]
						before:h-[100%]
						before:bg-accent
						before:z-1
					"
				>
					<h1>Hi there {name}~</h1>
					<h2>Hi there {name}~</h2>
					<h3>Hi there {name}~</h3>
					<h4>Hi there {name}~</h4>
					<h5>Hi there {name}~</h5>
					<h6>Hi there {name}~</h6>
				</Container>
			</Layout>
		</>
	);
}