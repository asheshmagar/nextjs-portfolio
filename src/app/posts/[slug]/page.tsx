import { getAllPosts, getPostBySlug } from '@/lib/api';
import { CMS_NAME } from '@/lib/constants';
import markdownToHtml from '@/lib/markdownToHtml';
import { format } from 'date-fns';
import 'highlight.js/styles/atom-one-light.min.css';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PostBody } from '../../_components/post-body';

export default async function Post({ params }: Params) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || '');

	return (
		<div className="w-full md:w-[860px] mx-auto flex flex-col gap-0 mb-10">
			<Link
				prefetch
				href="/posts"
				className="text-gray-400 text-xs underline tracking-widest"
			>
				Back
			</Link>
			<div className="w-full mt-10 flex flex-col md:flex-row space-x-0 md:space-x-2">
				<h3 className="tracking-tight font-semibold flex-1 text-lg text-gray-700">
					{post.title}
				</h3>
				<p className="tabular-nums text-sm text-gray-500">
					{format(post.date, 'MMMM dd, yyyy')}
				</p>
			</div>
			<PostBody content={content} />
		</div>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

// export function generateMetadata({ params }: Params): Metadata {
// 	const post = getPostBySlug(params.slug);

// 	if (!post) {
// 		return notFound();
// 	}

// 	const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

// 	return {
// 		title,
// 		openGraph: {
// 			title,
// 			images: [post.ogImage.url]
// 		}
// 	};
// }

// export async function generateStaticParams() {
// 	const posts = getAllPosts();

// 	return posts.map((post) => ({
// 		slug: post.slug
// 	}));
// }
