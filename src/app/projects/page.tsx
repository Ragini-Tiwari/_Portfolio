import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import projectsData from "@/data/projects.json";

export const revalidate = 60;

async function getVisitorCount() {
    try {
        const count = await prisma.visitor.count();
        return count;
    } catch {
        return 0;
    }
}

interface Project {
    name: string;
    description: string;
    longDescription: string
    tech: string[];
    github: string | null;
    live: string | null;
    featured: boolean;
    status: "completed" | "in-progress" | "archived"
}

function StatusBadge({ status }: { status: Project["status"] }) {
    const styles = {
        completed: "bg-green-950/40 text-green-500/70 border-green-900/50",
        "in-progress": "bg-yellow-950/40 text-yellow-500/70 border-yellow-900/50",
        archived: "bg-gray-950/40 text-gray-500/70 border-gray-800/50",
    }

    return <span className={`ml-3 px-2.5 py-0.5 text-xs rounded border ${styles[status]}`}>{status}</span>
}

export default async function Projects() {
    const visitorCount = await getVisitorCount();
    const projects = projectsData.projects as Project[];
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-px bg-gray-800" />

            <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6">projects</h1>
                <p className="mb-10 text-gray-400">
                    things i&apos;ve built to learn and explore. all projects are built
                    from scratch to understand how things really work.
                </p>

                <div className="flex flex-wrap gap-4 mb-8 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span>completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span>in progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gray-400" />
                        <span>archived</span>
                    </div>
                </div>

                {/* Featured Projects */}
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">featured</h2>
                <div className="space-y-6 mb-12">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.name}
                            className="border border-gray-800 rounded-lg p-4 sm:p-5 hover:border-gray-700 transition-colors"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="text-base sm:text-lg font-semibold text-white">
                                    {project.name}
                                    <StatusBadge status={project.status} />
                                </h3>
                                <div className="flex gap-3 flex-shrink-0">
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="text-gray-500 hover:text-white"
                                            title="Live Demo"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-gray-500 hover:text-white"
                                            title="GitHub"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>

                            <p className="mt-2 text-sm">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="tag text-xs">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Other Projects */}
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">
                    other projects
                </h2>
                <div className="grid gap-4">
                    {otherProjects.map((project) => (
                        <div
                            key={project.name}
                            className="border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                        >
                            <div className="flex justify-between items-start gap-4">
                                <h3 className="font-semibold text-white">
                                    {project.name}
                                    <StatusBadge status={project.status} />
                                </h3>
                                <div className="flex gap-3 flex-shrink-0">
                                    {project.live && (
                                        <Link
                                            href={project.live}
                                            target="_blank"
                                            className="text-gray-500 hover:text-white"
                                            title="Live Demo"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                        </Link>
                                    )}
                                    {project.github && (
                                        <Link
                                            href={project.github}
                                            target="_blank"
                                            className="text-gray-500 hover:text-white"
                                            title="GitHub"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </Link>
                                    )}
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-400">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs text-gray-500">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer visitorCount={visitorCount} />
        </div>
    );
}