import Footer from '@/app/_components/footer';
import Header from '@/app/_components/header';
import Sidebar from '@/app/_components/sidebar';
import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import Providers from './_components/progressbar-provider';
import './globals.css';

const titillium = Titillium_Web({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600', '700', '900']
});

export const metadata: Metadata = {
	title: `Ashesh's Site`,
	description: `I'm knowledgeable and eager to discuss subjects related to JavaScript, TypeScript, React, web development, WordPress, and PHP MySQL.`
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
				<meta name="theme-color" content="#000" />
				<link rel="alternate" type="application/rss+xml" href="/feed.xml" />
			</head>
			<body className={titillium.className}>
				<Providers>
					<Sidebar />
					<div className="pl-0 md:pl-[240px] min-h-screen flex flex-col">
						<Header />
						<div className="pt-28 md:pt-10 px-8 md:px-16 flex-1">{children}</div>
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
