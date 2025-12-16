import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import blogsData from "@/data/blogs.json";

export const revalidate = 60;

async function getVisitorCount() {
    try {
        const count = await prisma.visitor.count();
        return count;
    } catch {
        return 0;
    }
}

interface Post {
    title: string;
    date: string;
    description: string;
    url: string;
    tags: string[];
}

export default async function Blog() {
    const visitorCount = await getVisitorCount();
    const posts = blogsData.posts as Post[];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-px bg-gray-800" />

            <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">blog</h1>
                <p className="mb-10 text-gray-400">
                    writing about backend development, distributed systems, and things
                    i learn along the way.
                </p>

                <div className="space-y-8">
                    {posts.map((post) => (
                        <article
                            key={post.url}
                            className="border-b border-gray-800 pb-8 last:border-0"
                        >
                            <Link href={`${post.url}`} className="group">
                                <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#c9a0a0] transition-colors">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                            <p className="mt-3 text-sm sm:text-base">{post.description}</p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-1 bg-gray-800 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </main>

            <Footer visitorCount={visitorCount} />
        </div>
    );
}
