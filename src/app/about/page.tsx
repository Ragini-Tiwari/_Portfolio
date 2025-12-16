import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export const revalidate = 60;

async function getVisitorCount() {
    try {
        const count = await prisma.visitor.count();
        return count;
    } catch {
        return 0;
    }
}

export default async function About() {
    const visitorCount = await getVisitorCount();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="w-full h-px bg-gray-800" />

            <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
                    about me
                </h1>

                <div className="space-y-6 leading-relaxed text-sm sm:text-base">
                    <p>
                        i&apos;m a builder at heart.
                         I believe that hands-on creation is the fastest path to understanding and mastery.
                    </p>

                    <p>
                        It all started with a fascination for what happens behind the scenes. That
                         spark of curiosity led me to explore{" "}
                        <span className="highlight">scalable systems</span>,{" "}
                        <span className="highlight">distributed systems</span>, and{" "}
                        <span className="highlight">systems programming</span>.
                    </p>

                    <h2 className="text-lg sm:text-xl font-semibold text-white mt-8 sm:mt-10 mb-4">
                        what i do
                    </h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>building end-to-end web applications using modern frameworks</li>
                        <li>designing scalable relational and non-relational database schemas</li>
                        <li>implementing secure authentication and authorization flows</li>
                        <li>optimizing application performance and seo</li>
                    </ul>

            
                    

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

                    <h2 className="text-lg sm:text-xl font-semibold text-white mt-8 sm:mt-10 mb-4">
                        get in touch
                    </h2>
                    <p>
                        feel free to reach out if you want to discuss backend development,
                        distributed systems, or just want to say hi!
                    </p>
                </div>
            </main>

            <Footer visitorCount={visitorCount} />
        </div>
    );
}
