import Link from 'next/link';
import Badge from './components/Badge';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-4 pb-8">
      <section className="space-y-8">
        {/* Greeting */}
        <h1 className="text-4xl font-bold text-white tracking-tight">
          hi, i'm ragini tiwari.
        </h1>

        {/* Skills badges */}
        <div className="flex flex-wrap items-center gap-3">
          <Badge>next.js</Badge>
          <span className="text-zinc-600">·</span>
          <Badge variant="outline">full stack</Badge>
          <span className="text-zinc-600">·</span>
          <Badge variant="outline">distributed systems</Badge>
          <span className="text-zinc-600">·</span>
          <Badge variant="outline">backend engineering</Badge>
        </div>

        {/* Description paragraphs */}
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            i learn by thinking from first principles, tinkering with the details and
            abusing caffeine until things finally make sense.
          </p>

          <p>
            i build scalable applications with <span className="text-white font-medium">next.js</span>, <span className="text-white font-medium">node.js</span>, and <span className="text-white font-medium">postgresql</span>.
            i love architecting <span className="text-white font-medium">backend systems</span> and creating seamless user experiences.
          </p>

          <p>
            <span className="text-zinc-500">currently:</span> mastering distributed systems architecture and high-performance backend patterns.
          </p>

          <p>
            you can find my finished projects{' '}
            <Link
              href="/projects"
              className="text-white font-medium underline underline-offset-4 hover:text-blue-400 transition-colors"
            >
              here
            </Link>
            .
          </p>
        </div>
      </section>
    </div >
  );
}
