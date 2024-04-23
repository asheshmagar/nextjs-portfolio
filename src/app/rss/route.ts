import { format } from 'date-fns';
import { PostsService } from '../../lib/api';
import { baseUrl } from '../sitemap';

export async function GET() {
	let posts = PostsService.getAll();

	const items = posts
		.sort((a, b) => {
			if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
				return -1;
			}
			return 1;
		})
		.map(
			(post) =>
				`<item>
					<title>${post.title}</title>
					<link>${baseUrl}/posts/${post.slug}</link>
					<description>${post.summary || ' '}</description>
					<pubDate>${format(post.publishedAt, "yyyy-MM-dd'T'HH:mm:ssXX")}</pubDate>
				</item>`
		)
		.join('\n');

	const feed = `<?xml version="1.0" encoding="UTF-8" ?>
	<rss version="2.0">
	<channel>
		<title>Ashesh's blog</title>
		<link>${baseUrl}</link>
		<description>I'm knowledgeable and eager to discuss subjects related to JavaScript, TypeScript, React, web development, WordPress, and PHP MySQL.</description>
		${items}
	</channel>
	</rss>`;

	return new Response(feed, {
		headers: {
			'Content-Type': 'text/xml'
		}
	});
}
