import Link from "next/link";

<<<<<<< HEAD
const tags = ["next JS", "full stack", "distributed systems", "developer tools"];
=======
const tags = ["full-stack systems", "API & database design", "developer tools"];

>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50

export default function Hero() {
    return (
        <section className="max-w-2xl">
            <h1 className="text-4xl font-bold text-white mb-6 tracking-tight">
                hi, i&apos;m ragini.
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, index) => (
                    <span key={tag}>
                        <span className="tag">{tag}</span>
                        {index < tags.length - 1 && (
                            <span className="mx-2 text-gray-500">·</span>
                        )}
                    </span>
                ))}
            </div>

            {/* Description */}
<<<<<<< HEAD
           <div className="space-y-6 leading-relaxed">
=======
            <div className="space-y-6 leading-relaxed">
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
                <p>
                    I break problems down to their roots, tinker relentlessly, and let coffee
                     fuel the aha moments.
                </p>
                <p>
                    i mostly work with <span className="highlight">NodeJS & React JS</span>, exploring{" "}
                    <span className="highlight">Data & Application Systems</span> through
                    projects i build entirely from scratch —{" "}
                    <span className="highlight">interpreters</span>,{" "}
                    <span className="highlight">tiny data stores</span>,{" "}
                    <span className="highlight">rate limiters</span> and other things
                    that force me to understand what&apos;s actually going on.
                </p>
                <p>
                    <span className="accent">currently:</span> exploring distributed
                    systems, concurrency patterns, system fundamentals.
                </p>
<<<<<<< HEAD
              
=======
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
                <p>
                    you can find my finished projects{" "}
                    <Link href="/projects" className="highlight underline">
                        here
                    </Link>
                    .
                </p>
            </div>
        </section>
    );
}
