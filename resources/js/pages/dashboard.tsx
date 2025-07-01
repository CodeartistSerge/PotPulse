import { Head, usePage } from '@inertiajs/react'
import Layout from '@/layouts/main-layout';
import Container from '@/components/layout/container';
import { SharedData } from '@/types';
import { cn, pre } from '@/lib/utils';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Button from '@/components/ui/button';
import { SquarePen } from 'lucide-react';

export default function Dashboard() {
	const { auth } = usePage<SharedData>().props;
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
				<Container background="canvas" className="gap-8 items-center justify-center" direction='row'>
					<div className="w-[100%] md:w-[50%] flex-grow-0">
						<h2>Welcome back, <span className="text-accent">{auth?.user?.name}</span></h2>
					</div>
					<div className="w-[100%] md:w-[50%] flex-grow-0">
						<p>You can put some text encouraging adding more plants or showing some user stats. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
					</div>
				</Container>
				<Container background="white" direction="col">
					{(() => {
						const categories = [
							{
								id: 47856,
								name: 'Category Name 1',
							},
							{
								id: 1874,
								name: 'Lorem Ipsum Dolor',
							},
						]
						const data = [
							{
								id: 1,
								name: 'Monstera Deliciosa',
								period_s: 86400,
								image: '',
								category: 1874
							},
							{
								id: 2,
								name: 'Orchid White',
								period_s: 86400,
								image: '',
								category: null
							},
							{
								id: 3,
								name: 'I dont know',
								period_s: 86400,
								image: '',
								category: null
							},
							{
								id: 4,
								name: 'Lorem Ipsum',
								period_s: 86400,
								image: '',
								category: 1874
							},
						]
						return [{
							id: null,
							name: 'default'
						}, ...categories].map((category) => {
							const plants = data.filter(v => category.id == v.category)
							return (
								<ul
									key={`category-${category.id}`}
									className={cn(
										"not-last:mb-[4rem]"
									)}
								>
									<li
										key={`category-${category.id}-heading`}
										className={cn(
											"relative",
											"flex flex-row flex-nowrap items-center place-content-between",
											"not-last:mb-[4rem]",
											"before:content[''] before:block before:absolute before:w-[calc(100%+4rem)] before:h-[4px] before:bg-text before:-left-[2rem] before:top-[0.8em]",
										)}
									>
										<h6
											className={cn(
												"uppercase",
												"px-[0.5em] mb-0",
												"bg-white",
												"inline-block z-1 relative",
											)}
										>
											{category.name}
										</h6>
										<span
											className={cn(
												"px-[1rem] -mr-[1rem]",
												"bg-white",
												"inline-block z-1 relative",
											)}
										>
											<Button size="icon" mod="outline" className="bg-white"><SquarePen className="stroke-text" /></Button>
										</span>
									</li>
									{(() => plants.map((plant) => (
										<li
											key={plant.id}
											className={cn(
												"flex flex-row flex-wrap",
												"bg-accent/10 rounded-2xl",
												// "h-[3em]",
												"not-last:mb-[4rem] px-[2rem] -mx-[2rem] py-[2rem]",
											)}
										>
											<p className="w-[100%] flex-grow-1 first:pt-[1rem] mb-0 pl-[12rem]">{plant.name}</p>
											<p className="w-[10rem] relative">
												<img className="w-[8.5rem] absolute bottom-0 right-0" src="/assets/dashboard_plant_placeholder.png" alt="a generic plant photo" />
											</p>
											<p className="w-[0rem] flex-grow-1 pl-[2rem] flex flex-row flex-nowrap items-center">
												<small className="flex-grow-1 pr-[1rem] mb-0">Next notification in 7 days (Mon, 11 Dec)</small>
												<Button size="icon" className="bg-highlight"><SquarePen className="stroke-white" /></Button>
											</p>
										</li>
									)))()}
								</ul>
							);
						})
					})()}
				</Container>
			</Layout>
		</>
	);
}