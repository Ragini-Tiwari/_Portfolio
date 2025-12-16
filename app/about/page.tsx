import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | Ragini Tiwari',
    description: 'Learn more about Ragini Tiwari - a full stack developer exploring distributed systems',
};

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-16">
            <h1 className="text-3xl font-bold text-white mb-8 tracking-tight">about me</h1>

            <div className="space-y-8 text-zinc-400 leading-relaxed">
                {/* Introduction */}
                <section className="space-y-4">
                    <p>
                        hey! i'm <span className="text-white font-medium">ragini</span>, a passionate full stack developer
                        who loves building scalable web applications and exploring distributed systems.
                    </p>
                    <p>
                        my journey started with curiosity about how software systems work under the hood.
                        i enjoy working across the entire stack, from crafting beautiful user interfaces with next.js
                        to designing robust backend architectures with node.js.
                    </p>
                </section>

                {/* What I Do */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">what i do</h2>
                    <p>
                        i specialize in <span className="text-white font-medium">full stack development</span> and{' '}
                        <span className="text-white font-medium">cloud architecture</span>. my work involves:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>building end-to-end web applications using modern frameworks</li>
                        <li>designing scalable relational and non-relational database schemas</li>
                        <li>implementing secure authentication and authorization flows</li>
                        <li>optimizing application performance and seo</li>
                    </ul>
                </section>

                {/* Tech Stack */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">technologies i work with</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                            <h3 className="text-white font-medium mb-2">languages</h3>
                            <p className="text-sm">TypeScript, JavaScript, Java, Python</p>
                        </div>
                        <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                            <h3 className="text-white font-medium mb-2">frameworks</h3>
                            <p className="text-sm">Next.js, React, Node.js, Express</p>
                        </div>
                        <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                            <h3 className="text-white font-medium mb-2">databases & tools</h3>
                            <p className="text-sm">PostgreSQL, MongoDB, Docker, Git</p>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">my philosophy</h2>
                    <blockquote className="border-l-2 border-zinc-600 pl-4 italic">
                        "the best way to understand something is to build it yourself."
                    </blockquote>
                    <p>
                        i believe in learning by doing. every project i work on is an opportunity to
                        understand something new at a deeper level. whether it's building a rate limiter,
                        implementing a tiny database, or creating an interpreter — each project adds
                        to my understanding of how systems really work.
                    </p>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold text-white">get in touch</h2>
                    <p>
                        i'm always open to interesting conversations, collaborations, or just saying hi.
                        feel free to reach out through any of the social links below!
                    </p>
                </section>
            </div>
        </div>
    );
}
