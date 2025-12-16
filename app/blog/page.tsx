import type { Metadata } from 'next';
import Link from 'next/link';
import blogData from '@/data/blog.json';

export const metadata: Metadata = {
    title: 'Blog | Ranjan Kumar',
    description: 'Thoughts on backend development, distributed systems, and software engineering',
};

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    readTime: string;
}

const blogPosts: BlogPost[] = blogData.blogPosts;

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

export default function BlogPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">blog</h1>
            <p className="text-zinc-500 mb-12">
                thoughts on backend development, distributed systems, and things i learn along the way.
            </p>

            <div className="space-y-8">
                {blogPosts.map((post) => (
                    <article
                        key={post.slug}
                        className="group p-6 -mx-6 rounded-lg transition-colors hover:bg-zinc-800/30"
                    >
                        <Link href={`/blog/${post.slug}`} className="block space-y-3">
                            <div className="flex items-center gap-4 text-sm text-zinc-500">
                                <time dateTime={post.date}>{formatDate(post.date)}</time>
                                <span>·</span>
                                <span>{post.readTime}</span>
                            </div>

                            <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-zinc-400 leading-relaxed">
                                {post.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </article>
                ))}
            </div>

            {blogPosts.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-zinc-500">
                        no posts yet. check back soon!
                    </p>
                </div>
            )}
        </div>
    );
}
