import Link from 'next/link';
import { Logo } from './logo';

const Sidebar = () => {
	return (
		<div className="fixed left-0 top-0 bottom-0 w-auto z-[2] border-r-[1px] hidden md:block">
			<div className="h-full flex items-start flex-row flex-nowrap gap-0 justify-start relative min-w-min overflow-visible">
				<div className="w-[240px] py-[40px] flex flex-col gap-8">
					<div className="px-8 pb-8 border-b-[1px] flex flex-col flex-none gap-4 h-min justify-center p-0 relative">
						<Logo />
						<div className="flex flex-col gap-1">
							{/* <Link
								href="/"
								className="font-semibold text-lg text-gray-800 tracking-wider"
								prefetch
							>
								About
							</Link> */}
							<Link
								href="/posts"
								className="font-semibold text-lg text-gray-800 tracking-wider hover:opacity-70"
								prefetch
							>
								Posts
							</Link>
							<a
								href="/resume.pdf"
								className="font-semibold text-lg text-gray-800 tracking-wider hover:opacity-70"
							>
								CV
							</a>
						</div>
					</div>
					<div className="px-8 pb-8 flex flex-col flex-none gap-4 h-min justify-center p-0 relative">
						<p className="uppercase font-xs font-semibold opacity-50 tracking-widest">
							Contact
						</p>
						<div className="flex flex-col gap-2">
							<a
								className="font-normal text-sm text-gray-600 tracking-wider"
								href="mailto:ashesh.ido@gmail.com"
							>
								Mail
							</a>
							<a
								className="font-normal text-sm text-gray-600 tracking-wider"
								href="https://www.linkedin.com/in/ashesh-ido/"
							>
								LinkedIn
							</a>
							<a
								className="font-normal text-sm text-gray-600 tracking-wider"
								href="https://twitter.com/ashesh_ido"
							>
								Twitter
							</a>
							<a
								className="font-normal text-sm text-gray-600 tracking-wider"
								href="https://profiles.wordpress.org/asheshmagar/"
							>
								WordPress.org
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
