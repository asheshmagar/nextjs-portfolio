'use client';
import { animate, motion, transform, useMotionValue, useSpring } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

export function StickyCursor({
	stickyElement
}: {
	stickyElement: React.MutableRefObject<HTMLElement | null>;
}) {
	const [isHovered, setIsHovered] = useState(false);
	const cursor = useRef(null);
	const cursorSize = isHovered ? 60 : 15;

	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0)
	};

	const scale = {
		x: useMotionValue(1),
		y: useMotionValue(1)
	};

	//Smooth out the mouse values
	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions)
	};

	const rotate = (distance: { x: number; y: number }) => {
		const angle = Math.atan2(distance.y, distance.x);
		animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
	};

	const manageMouseMove = (e: MouseEvent) => {
		const { clientX, clientY } = e;
		// @ts-expect-error
		const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

		//center position of the stickyElement
		const center = { x: left + width / 2, y: top + height / 2 };

		if (isHovered) {
			//distance between the mouse pointer and the center of the custom cursor and
			const distance = { x: clientX - center.x, y: clientY - center.y };

			//rotate
			rotate(distance);

			//stretch based on the distance
			const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
			const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
			const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
			scale.x.set(newScaleX);
			scale.y.set(newScaleY);

			//move mouse to center of stickyElement + slightly move it towards the mouse pointer
			mouse.x.set(center.x - cursorSize / 2 + distance.x * 0.1);
			mouse.y.set(center.y - cursorSize / 2 + distance.y * 0.1);
		} else {
			//move custom cursor to center of stickyElement
			mouse.x.set(clientX - cursorSize / 2);
			mouse.y.set(clientY - cursorSize / 2);
		}
	};

	const manageMouseOver = (e: MouseEvent) => {
		setIsHovered(true);
	};

	const manageMouseLeave = (e: MouseEvent) => {
		setIsHovered(false);
		animate(cursor.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 });
	};

	useEffect(() => {
		// @ts-expect-error
		stickyElement.current.addEventListener('mouseenter', manageMouseOver);
		// @ts-expect-error
		stickyElement.current.addEventListener('mouseleave', manageMouseLeave);
		window.addEventListener('mousemove', manageMouseMove);
		return () => {
			// @ts-expect-error
			stickyElement.current.removeEventListener('mouseenter', manageMouseOver);
			// @ts-expect-error
			stickyElement.current.removeEventListener('mouseleave', manageMouseLeave);
			window.removeEventListener('mousemove', manageMouseMove);
		};
	}, [isHovered]);

	const template = ({ rotate, scaleX, scaleY }: { [key: string]: number }) => {
		return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
	};

	return (
		<div>
			<motion.div
				transformTemplate={template}
				style={{
					left: smoothMouse.x,
					top: smoothMouse.y,
					scaleX: scale.x,
					scaleY: scale.y
				}}
				animate={{
					width: cursorSize,
					height: cursorSize
				}}
				className="fixed w-[15px] h-[15px] bg-black rounded-full pointer-events-none"
				ref={cursor}
			></motion.div>
		</div>
	);
}
