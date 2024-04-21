import { format } from 'date-fns';
import Link from 'next/link';
import { getPosts } from '../../lib/api';

export default function Index() {
	const posts = getPosts();
	return (
		<div className="w-full md:w-[860px] mx-auto flex flex-col gap-4">
			<p className="uppercase text-gray-400 text-xs tracking-widest">Abstract</p>
			<h2 className="font-bold text-[28px] md:text-[32px] text-gray-600">
				Ideas about my musings
			</h2>
			<p className="text-sm mb-4">
				Thoughts and learnings around software development, with a focus on leveraging my
				expertise in PHP, JS, Typescript and WordPress.
			</p>
			<hr />
			<div className="mt-2">
				{posts.map((post) => (
					<Link
						href={`/posts/${post.slug}`}
						key={post.slug}
						className="flex flex-col space-y-1 mb-4"
					>
						<div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2 bg-gradient-to-r from-gray-200 to-gray-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
							<p className="tracking-tight truncate flex-1 text-lg text-gray-700 font-semibold">
								{post.title}
							</p>
							<p className="tabular-nums">{format(post.date, 'MMMM dd, yyyy')}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
