import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export class PostsService {
	private static POSTS_DIR = join(process.cwd(), '_posts');
	private static DEFAULT_ARGS = { limit: 10, offset: 0 };

	static getAll(): Array<Post> {
		const slugs = this.getSlugs();
		const posts = slugs
			.map((slug) => this.getBySlug(slug))
			.filter((post) => post !== null) as Post[];
		return posts.sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
	}

	private static getSlugs() {
		return fs.readdirSync(this.POSTS_DIR);
	}

	static getBySlug(slug: string) {
		const realSlug = slug.replace(/\.md$/, '');
		const fullPath = join(this.POSTS_DIR, `${realSlug}.md`);
		if (!fs.existsSync(fullPath)) {
			return null;
		}
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);

		return { ...data, slug: realSlug, content } as Post;
	}

	static get(args?: { limit?: number; offset?: number }) {
		const query = { ...this.DEFAULT_ARGS, ...args };
		let posts = this.getAll();
		const total = posts.length;
		posts = posts.slice(query.offset, query.offset + query.limit);
		return {
			posts,
			total,
			limit: query.limit,
			offset: query.offset,
			next: query.offset + query.limit < total,
			prev: query.offset > 0
		};
	}
}
