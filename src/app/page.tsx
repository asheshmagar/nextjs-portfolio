'use client';

import { motion } from 'framer-motion';
import { EXPERTISE_TECHS, PROJECTS } from '../lib/constants';
import { AnimatedTooltip } from './_components/animated-tooltip';
import { HeroParallax } from './_components/hero-parallax';

export default function Index() {
	return (
		<>
			<motion.div
				initial={{
					filter: 'blur(5px)',
					y: -15
				}}
				animate={{
					y: 0,
					filter: 'blur(0px)',
					transition: { type: 'spring', duration: 0.7 }
				}}
				className="flex flex-col"
			>
				<div className="group">
					<h1 className="text-md md:text-lg flex gap-2 items-end font-semibold bg-gradient-to-r from-gray-400 to-gray-700 bg-clip-text text-transparent">
						Hey there, <span>स्वागतम !</span>
					</h1>
				</div>
				<div className="group">
					<motion.h2 className="mt-6 text-[22px] md:text-[42px] font-semibold text-gray-600 tracking-tight leading-none md:leading-[56px] bg-gradient-to-r from-gray-500 to-gray-800  bg-clip-text text-transparent">
						Ashesh is a full stack developer based in Kathmandu, currently holds the
						position of Senior Developer and Team Lead at ThemeGrill Pvt Limited. He
						brings a wealth of experience in PHP, WordPress, JavaScript, TypeScript,
						React, MySql and diverse web technologies to his role.
					</motion.h2>
				</div>
				<div className="pt-[40px]">
					<hr className="mb-6" />
					<p className="uppercase py-4 text-gray-400 text-sm">
						Involvement in Various Endeavors
					</p>
					<div className="-mx-8 mt-8 mb-20 md:-mx-16">
						<HeroParallax items={PROJECTS} />
					</div>
				</div>
				<div className="group">
					<hr className="mb-6" />
					<p className="uppercase py-4 text-gray-400 text-sm mb-14">
						Skills that define me
					</p>
					<div className="flex flex-wrap justify-center gap-8  md:gap-16">
						<AnimatedTooltip items={EXPERTISE_TECHS} />
					</div>
				</div>
				<hr className="mb-6 mt-20" />
			</motion.div>
		</>
	);
}
