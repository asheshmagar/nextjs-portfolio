import { format } from 'date-fns';
import Link from 'next/link';
import { PostsService } from '../../lib/api';

export default function Index() {
	const posts = PostsService.getAll();
	return (
		<div className="w-full md:w-[860px] mx-auto flex flex-col gap-4">
			<p className="uppercase text-gray-400 text-xs tracking-widest">Abstract</p>
			<h2 className="font-bold text-[28px] md:text-[32px] text-gray-600 flex items-center gap-4">
				Ideas about my musings{' '}
				<Link href="/rss">
					<span className="sr-only"></span>
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 448 512"
						className="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M128.081 415.959c0 35.369-28.672 64.041-64.041 64.041S0 451.328 0 415.959s28.672-64.041 64.041-64.041 64.04 28.673 64.04 64.041zm175.66 47.25c-8.354-154.6-132.185-278.587-286.95-286.95C7.656 175.765 0 183.105 0 192.253v48.069c0 8.415 6.49 15.472 14.887 16.018 111.832 7.284 201.473 96.702 208.772 208.772.547 8.397 7.604 14.887 16.018 14.887h48.069c9.149.001 16.489-7.655 15.995-16.79zm144.249.288C439.596 229.677 251.465 40.445 16.503 32.01 7.473 31.686 0 38.981 0 48.016v48.068c0 8.625 6.835 15.645 15.453 15.999 191.179 7.839 344.627 161.316 352.465 352.465.353 8.618 7.373 15.453 15.999 15.453h48.068c9.034-.001 16.329-7.474 16.005-16.504z"></path>
					</svg>
				</Link>
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
							<p className="tabular-nums">
								{format(post.publishedAt, 'MMMM dd, yyyy')}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
