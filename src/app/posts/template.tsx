'use client';
import { motion } from 'framer-motion';
import React from 'react';

export default function Template(props: { children: React.ReactNode }) {
	return (
		<motion.div
			initial={{
				y: 20,
				opacity: 0,
				filter: 'blur(5px)'
			}}
			animate={{
				y: 0,
				opacity: 1,
				filter: 'blur(0px)'
			}}
			transition={{
				ease: 'easeInOut',
				duration: 0.75
			}}
		>
			{props.children}
		</motion.div>
	);
}
