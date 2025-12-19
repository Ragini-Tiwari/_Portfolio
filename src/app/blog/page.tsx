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

const icons: Record<string, React.ReactNode> = {
    clock: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    ),
    calendar: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
        >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    ),
    arrowRight: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3"
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    ),

};


interface Post {
    title: string;
    date: string;
    description: string
    
    url: string;
    readTime: string;
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
                            className="border-l-2 border-[#333] pl-4 hover:border-[#f5d0c5] transition-colors"
                        >
                            <Link href={`${post.url}`} className="group">
                                <h2 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#c9a0a0] transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <div className="flex items-center gap-4 text-xs text-[#666] mb-3">
                                <span className="flex items-center gap-1">
                                    {icons.calendar}
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>

                                <span className="flex items-center gap-1">
                                    {icons.clock}
                                    {post.readTime}
                                </span>
                            </div>

                            <p className="mt-3 text-sm sm:text-base">{post.description}</p>

                            <div className="mt-3 flex items-center justify-between">
                                {/* Left: tags */}
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 bg-gray-800 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Right: read more */}
                                <Link
                                    href={post.url}
                                    className="inline-flex items-center gap-1 text-xs text-[#666] hover:text-[#f5d0c5] group transition-colors"
                                >
                                    read more
                                    <span className="transition-transform group-hover:translate-x-1">
                                        {icons.arrowRight}
                                    </span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </main >

            <Footer visitorCount={visitorCount} />
        </div >
    );
}
