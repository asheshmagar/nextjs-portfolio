export type Post = {
	slug: string;
	title: string;
	publishedAt: string;
	summary?: string;
	content: string;
	tags?: string[];
};
