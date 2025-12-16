import type { Metadata } from 'next';
import Link from 'next/link';
import projectsData from '@/data/projects.json';

export const metadata: Metadata = {
    title: 'Projects | Ranjan Kumar',
    description: 'A collection of projects built from scratch to understand systems deeply',
};

interface Project {
    title: string;
    description: string;
    tags: string[];
    github: string | null;
    demo: string | null;
    featured: boolean;
}

const projects: Project[] = projectsData.projects;

export default function ProjectsPage() {
    const featuredProjects = projects.filter((p) => p.featured);
    const otherProjects = projects.filter((p) => !p.featured);

    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">projects</h1>
            <p className="text-zinc-500 mb-12">
                things i've built from scratch to understand how systems really work.
            </p>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section className="mb-16">
                    <h2 className="text-lg font-semibold text-zinc-400 mb-6 uppercase tracking-wider">
                        Featured
                    </h2>
                    <div className="space-y-6">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </div>
                </section>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <section>
                    <h2 className="text-lg font-semibold text-zinc-400 mb-6 uppercase tracking-wider">
                        Other Projects
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {otherProjects.map((project) => (
                            <ProjectCardSmall key={project.title} project={project} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group p-6 bg-zinc-800/30 rounded-lg border border-zinc-700/50 hover:border-zinc-600/50 transition-all">
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-3">
                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors"
                            aria-label="View on GitHub"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </Link>
                    )}
                    {project.demo && (
                        <Link
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-500 hover:text-white transition-colors"
                            aria-label="View demo"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                        </Link>
                    )}
                </div>
            </div>

            <p className="text-zinc-400 mb-4 leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-zinc-800 text-zinc-400 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectCardSmall({ project }: { project: Project }) {
    return (
        <div className="group p-4 bg-zinc-800/20 rounded-lg border border-zinc-700/30 hover:border-zinc-600/50 transition-all">
            <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                {project.github && (
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-500 hover:text-white transition-colors"
                        aria-label="View on GitHub"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                    </Link>
                )}
            </div>

            <p className="text-zinc-500 text-sm leading-relaxed">
                {project.description}
            </p>
        </div>
    );
}
