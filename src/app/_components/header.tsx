import Link from 'next/link';
import { Logo } from './logo';

const Header = () => {
	return (
		<div className="text-center gap-4 justify-between py-4 px-6 flex md:hidden bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 fixed top-0 bg-gray-200 w-full">
			<Logo />
			<div className="flex items-center gap-2">
				<Link href="/about" className="text-sm" prefetch>
					About
				</Link>
				<Link href="/posts" className="text-sm" prefetch>
					Posts
				</Link>
				<a href="/resume.pdf" className="text-sm">
					CV
				</a>
			</div>
		</div>
	);
};

export default Header;
