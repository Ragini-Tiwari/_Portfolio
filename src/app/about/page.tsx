import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import techStackData from "@/data/techStack.json";
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

const icons: Record<string, React.ReactNode> = {
  terminal: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  ),
  database: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  ),
  server: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  ),
  message: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>
  ),
};

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
            i&apos;m a builder at heart. I believe that hands-on creation is the fastest path to understanding and mastery.
          </p>

          <p>
            my journey started with curiosity about how things work under the hood. that curiosity led me to explore{" "}
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
            <li>optimizing application performance and SEO</li>
          </ul>

          {/* Tech Stack */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white">technologies</h2>
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

          {/* Tech Stack Categories 
         <section className="mb-12">
            <h2 className="text-xl text-[#e8e8e8] mb-6">technologies i use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStackData.categories.map((category) => (
                <div key={category.name} className="border border-[#333] rounded p-4">
                  <div className="flex items-center gap-2 mb-3 text-[#e8e8e8]">
                    {icons[category.icon]}
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((item) => (
                      <span key={item} className="px-2 py-1 bg-[#252525] rounded text-xs text-[#a8a8a8]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>*/}

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
