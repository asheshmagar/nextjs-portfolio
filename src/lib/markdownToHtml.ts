import { remark } from 'remark';
import remarkHighlightjs from 'remark-highlight.js';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
	const result = await remark()
		.use(html, { sanitize: false })
		// @ts-ignore
		.use(remarkHighlightjs)
		.process(markdown);
	return result.toString();
}
