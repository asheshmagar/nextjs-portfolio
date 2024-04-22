'use client';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export const AnimatedTooltip = ({
	items
}: {
	items: {
		id: number;
		name: string;
		image: string;
	}[];
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const springConfig = { stiffness: 100, damping: 5 };
	const x = useMotionValue(0); // going to set this value on mouse move
	// rotate the tooltip
	const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
	// translate the tooltip
	const translateX = useSpring(useTransform(x, [-200, 200], [-50, 50]), springConfig);
	const handleMouseMove = (event: any) => {
		const halfWidth = event.target.offsetWidth / 2;
		x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
	};

	return (
		<>
			{items.map((item) => (
				<div
					className="relative flex items-center justify-center rounded-3xl shadow-md p-4"
					key={item.name}
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{hoveredIndex === item.id && (
						<motion.div
							initial={{ opacity: 0, y: 20, scale: 0.6 }}
							animate={{
								opacity: 1,
								y: 0,
								scale: 1,
								transition: {
									type: 'spring',
									stiffness: 260,
									damping: 10
								}
							}}
							exit={{ opacity: 0, y: 20, scale: 0.6 }}
							style={{
								translateX: translateX,
								rotate: rotate,
								whiteSpace: 'nowrap'
							}}
							className="absolute -left-14 -top-16 translate-x-1/2 sm:-left-4"
						>
							<div className=" z-50 w-[100px] rounded-md border border-gray-100 text-center bg-white px-4 py-2 text-sm font-bold text-gray-600 shadow-xl sm:w-[130px] sm:text-base md:text-lg bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
								<p>{item.name}</p>
							</div>
						</motion.div>
					)}
					<Image
						onMouseMove={handleMouseMove}
						height={100}
						width={100}
						src={item.image}
						alt={item.name}
						className="relative w-12 object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105 md:w-16"
					/>
				</div>
			))}
		</>
	);
};
