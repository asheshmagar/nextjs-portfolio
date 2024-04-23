'use client';
import {
	MotionStyle,
	MotionValue,
	motion,
	useScroll,
	useSpring,
	useTransform
} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const HeroParallax = ({
	items
}: {
	items: {
		title: string;
		link: string;
		thumbnail: string;
	}[];
}) => {
	const firstRow = items.slice(0, 5);
	const secondRow = items.slice(5, 10);
	const thirdRow = items.slice(10, 15);
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start']
	});

	const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

	const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
	const translateXReverse = useSpring(
		useTransform(scrollYProgress, [0, 1], [0, -1000]),
		springConfig
	);
	const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
	const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
	const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
	const translateY = useSpring(
		useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
		springConfig
	);
	return (
		<div
			ref={ref}
			className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
		>
			<Header />
			{/* <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full min-he  left-0 top-0"></div> */}
			<motion.div
				style={{
					rotateX,
					rotateZ,
					translateY,
					opacity
				}}
				className=""
			>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
					{firstRow.map((product) => (
						<Card product={product} translate={translateX} key={product.title} />
					))}
				</motion.div>
				<motion.div className="flex flex-row  mb-20 space-x-20 ">
					{secondRow.map((product) => (
						<Card product={product} translate={translateXReverse} key={product.title} />
					))}
				</motion.div>
				<motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
					{thirdRow.map((product) => (
						<Card product={product} translate={translateX} key={product.title} />
					))}
				</motion.div>
			</motion.div>
		</div>
	);
};

export const Header = (props: { style?: MotionStyle }) => {
	return (
		<motion.div
			className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0"
			{...props}
		>
			<h1 className="text-2xl md:text-7xl font-bold bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent leading-tight">
				Artisan <br /> of Dynamic Web Solutions
			</h1>
			<p className="max-w-2xl text-base md:text-xl mt-8 bg-gradient-to-l from-gray-400 to-gray-700 bg-clip-text text-transparent">
				Leveraging expertise in PHP, WordPress, JavaScript, React, HTML, CSS, and TypeScript
				to architect dynamic web solutions. Experienced in crafting bespoke themes and
				plugins for WordPress, ensuring seamless integration and optimal performance.
			</p>
		</motion.div>
	);
};

export const Card = ({
	product,
	translate
}: {
	product: {
		title: string;
		link: string;
		thumbnail: string;
	};
	translate: MotionValue<number>;
}) => {
	return (
		<motion.div
			style={{
				x: translate
			}}
			whileHover={{
				y: -20
			}}
			key={product.title}
			className="group/item h-96 w-[30rem] relative flex-shrink-0"
		>
			<Link href={product.link} className="block group-hover/item:shadow-2xl ">
				<div className="absolute inset-0">
					<div className="relative">
						<div className="absolute transition-colors bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_0%,_rgba(255,_255,_255,_0.8)_100%)] inset-[-45px_-93px_-51px_-149px]"></div>
						<Image
							src={product.thumbnail}
							height="600"
							width="600"
							className="object-cover object-left-top h-full w-full transition-all"
							alt={product.title}
						/>
					</div>
				</div>
			</Link>
			{/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/item:opacity-90 bg-gradient-to-tl from-slate-300 to-gray-500 pointer-events-none"></div> */}
			<h2 className="absolute bottom-4 left-4 opacity-0 group-hover/item:opacity-100 text-gray-600 font-semibold text-sm p-2 rounded">
				{product.title}
			</h2>
		</motion.div>
	);
};
