import type { Metadata } from 'next';
import Link from 'next/link';
import blogData from '@/data/blog.json';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    readTime: string;
    content: string;
}

const blogPosts: Record<string, BlogPost> = blogData.blogPosts.reduce((acc, post) => {
    acc[post.slug] = post;
    return acc;
}, {} as Record<string, BlogPost>);

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        return {
            title: 'Post Not Found | Ranjan Kumar',
        };
    }

    return {
        title: `${post.title} | Ranjan Kumar`,
        description: post.description,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts[slug];

    if (!post) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-16 text-center">
                <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
                <p className="text-zinc-400 mb-8">The blog post you're looking for doesn't exist.</p>
                <Link
                    href="/blog"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                    ← Back to blog
                </Link>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <Link
                href="/blog"
                className="text-zinc-500 hover:text-white transition-colors inline-flex items-center gap-2 mb-8"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                back to blog
            </Link>

            <article>
                <header className="mb-8">
                    <div className="flex items-center gap-4 text-sm text-zinc-500 mb-4">
                        <time dateTime={post.date}>{formattedDate}</time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </header>

                <div className="prose prose-invert prose-zinc max-w-none">
                    <div className="text-zinc-400 leading-relaxed whitespace-pre-line">
                        {post.content}
                    </div>
                </div>
            </article>
        </div>
    );
}

export function generateStaticParams() {
    return blogData.blogPosts.map((post) => ({
        slug: post.slug,
    }));
}
