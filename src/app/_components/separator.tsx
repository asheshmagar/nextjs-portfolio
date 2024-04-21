'use client';
import { MouseEvent, useEffect, useRef } from 'react';

export function Separator() {
	const path = useRef<SVGPathElement | null>(null);
	let progress = 0;
	let x = 0.5;
	let time = Math.PI / 2;
	let reqId: null | number = null;

	useEffect(() => {
		setPath(progress);
	}, []);

	const setPath = (progress: number) => {
		const width = window.innerWidth * 0.7;
		path.current?.setAttributeNS(
			null,
			'd',
			`M0 250 Q${width * x} ${250 + progress}, ${width} 250`
		);
	};

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const manageMouseEnter = () => {
		if (reqId) {
			cancelAnimationFrame(reqId);
			resetAnimation();
		}
	};

	const manageMouseMove = (e: MouseEvent) => {
		const { movementY, clientX } = e;
		if (!path.current) return;
		const pathBound = path.current.getBoundingClientRect();
		x = (clientX - pathBound.left) / pathBound.width;
		progress += movementY;
		setPath(progress);
	};

	const manageMouseLeave = () => {
		animateOut();
	};

	const animateOut = () => {
		const newProgress = progress * Math.sin(time);
		progress = lerp(progress, 0, 0.025);
		time += 0.2;
		setPath(newProgress);
		if (Math.abs(progress) > 0.75) {
			reqId = requestAnimationFrame(animateOut);
		} else {
			resetAnimation();
		}
	};

	const resetAnimation = () => {
		time = Math.PI / 2;
		progress = 0;
	};
	return (
		<div className="h-[1px] mb-[20px] w-full relative">
			<div
				onMouseEnter={manageMouseEnter}
				onMouseMove={manageMouseMove}
				onMouseLeave={manageMouseLeave}
				className="h-[40px] w-full relative -top-[20px] z-[1] hover:h-[500px] hover:-top-[250px]"
			></div>
			<svg className="w-full h-[500px] absolute top-[-250px]">
				<path ref={path} className="stroke-gray-300 stroke-[1px] fill-none"></path>
			</svg>
		</div>
	);
}
