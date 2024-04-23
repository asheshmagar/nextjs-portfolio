import { Post } from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

export class PostsService {
	private static POSTS_DIR = join(process.cwd(), '_posts');

	static getAll(): Array<Post> {
		const slugs = PostsService.getSlugs();
		const posts = slugs
			.map((slug) => PostsService.getBySlug(slug))
			.filter((post) => post !== null) as Post[];
		return posts.sort((post1, post2) => (post1.publishedAt > post2.publishedAt ? -1 : 1));
	}

	private static getSlugs() {
		return fs.readdirSync(PostsService.POSTS_DIR);
	}

	static getBySlug(slug: string) {
		const realSlug = slug.replace(/\.md$/, '');
		const fullPath = join(PostsService.POSTS_DIR, `${realSlug}.md`);
		if (!fs.existsSync(fullPath)) {
			return null;
		}
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);

		return { ...data, slug: realSlug, content } as Post;
	}
}
