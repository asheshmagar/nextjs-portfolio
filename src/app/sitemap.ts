import { PostsService } from '../lib/api';

export const baseUrl = 'https://asheshthapa.com.np';

export default async function sitemap() {
	let blogs = PostsService.getAll().map((post) => ({
		url: `${baseUrl}/posts/${post.slug}`,
		lastModified: post.publishedAt
	}));

	let routes = ['', '/posts'].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split('T')[0]
	}));

	return [...routes, ...blogs];
}
