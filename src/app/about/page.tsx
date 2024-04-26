'use client';

import Image from 'next/image';
import { InfiniteMovingCards } from '../_components/infinite-moving-cards';

const testimonials = [
	{
		name: 'Charles Dickens',
		image: '/assets/about/20240316_114221.jpg'
	},
	{
		name: 'William Shakespeare',
		image: '/assets/about/IMG_7964.jpg'
	},
	{
		name: 'Edgar Allan Poe',
		image: '/assets/about/20240317_122406.jpg'
	},
	{
		name: 'Jane Austen',
		image: '/assets/about/20240316_114223.jpg'
	},
	{
		name: 'Herman Melville',
		image: '/assets/about/IMG_7964.jpg'
	}
];

export default function Index() {
	const year = new Date().getFullYear();
	return (
		<>
			<div className="relative flex flex-col mb-20 items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
				<div className="w-full h-64 lg:w-1/2 lg:h-auto relative">
					<div className="absolute transition-colors bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.8)_100%)] inset-[-45px_-56px_-51px_-149px]"></div>
					<Image
						className="h-full w-full object-cover rounded"
						src="/assets/about/me1.jpg"
						alt="Me"
						width={500}
						height={500}
					/>
				</div>
				<div className="max-w-lg rounded-0 md:max-w-2xl md:z-10 md:absolute md:top-0 lg:w-3/5 lg:left-0 lg:ml-20 xl:ml-12">
					<div className="flex flex-col p-12 md:px-16 relative">
						{/* <div className="absolute rounded transition-colors bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.8)_100%)] inset-[-45px_-30px_-51px_-100px]"></div> */}
						<h1 className="text-[100px] md:text-[172px] font-bold leading-none z-[1] bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
							Ashesh <br /> Thapa
						</h1>
					</div>
				</div>
			</div>
			<hr />
			<h2 className="uppercase py-4 mt-4 text-gray-400 text-sm mb-4">Info</h2>
			<p className="mb-8 bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
				I am a passionate web developer based in Kathmandu, Nepal, with a proven track
				record of over {year - 2019} years in the industry. My journey began with a
				deep-rooted fascination for technology and a drive to create meaningful digital
				experiences. Over the years, I have honed my skills and expertise to become a
				proficient developer capable of delivering top-notch solutions.
			</p>
			<hr />
			<h2 className="uppercase py-4 mt-4 text-gray-400 text-sm mb-6">My Awesome Team</h2>
			<InfiniteMovingCards
				items={[
					{
						name: 'My team one',
						image: '/assets/about/20240316_114221.jpg'
					},
					{
						name: 'My team two',
						image: '/assets/about/IMG_7964.JPG'
					},
					{
						name: 'My team three',
						image: '/assets/about/20240317_122406.jpg'
					},
					{
						name: 'My team four',
						image: '/assets/about/20240316_114223.jpg'
					},
					{
						name: 'My team five',
						image: '/assets/about/IMG_7964.JPG'
					}
				]}
				speed="slow"
			/>
		</>
	);
}
