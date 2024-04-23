'use client';

import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';

export function Footer() {
	const pathname = usePathname();
	if (pathname !== '/') return null;
	return (
		<div
			className={cn('flex p-6 md:px-20 items-center gap-4 justify-between text-gray-500', {
				hidden: pathname !== '/',
				flex: pathname === '/'
			})}
		>
			<div className="hidden md:block">Ashesh Thapa</div>
			<div>{new Date().getFullYear()}</div>
			<div className="md:hidden flex items-center gap-2">
				<a href="mailto:ashesh.ido@gmail.com">Mail</a>
				<a href="https://www.linkedin.com/in/ashesh-ido/">LinkedIn</a>
				<a href="https://twitter.com/ashesh_ido">Twitter</a>
				<a href="https://profiles.wordpress.org/asheshmagar/">WordPress.org</a>
			</div>
		</div>
	);
}

export default Footer;
