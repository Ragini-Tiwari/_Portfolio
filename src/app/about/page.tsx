import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import techStackData from "@/data/techStack.json";
import experiencesData from "@/data/experience.json";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About | Govind Tiwari",
  description: "About Govind Tiwari, a backend developer focused on secure APIs, service design, data flow, and Go systems.",
};

export default function About() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="section-header">
            <div>
              <p className="overline">About</p>
              <h1 className="page-title mt-4">Backend craft with a bias for reliable systems.</h1>
              <p className="section-copy mt-6">
                I like understanding what happens below the abstraction line, then turning that understanding into APIs, services, tools, and interfaces that hold up in real use.
              </p>
            </div>
            <div className="callout-panel">
              <p className="overline">Principle</p>
              <p className="section-copy mt-4">
                Simple systems with clear data flow, observability, and strong validation beat clever systems that are hard to debug.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="working-grid">
            {[
              ["Secure APIs", "Input validation, API hardening, auth flows, and injection prevention."],
              ["Service design", "Backend structure that keeps data movement explicit and maintainable."],
              ["Concurrency", "Go, workers, queues, and service flow designed for production load."],
            ].map(([label, copy]) => (
              <div key={label} className="working-item">
                <p className="working-label">{label}</p>
                <p className="working-copy">{copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div>
              <p className="overline">Toolbox</p>
              <h2 className="section-heading mt-4">Technologies I use</h2>
            </div>
            <p className="section-copy">
              A focused stack for backend services, deployment, data, storage, and day-to-day engineering.
            </p>
          </div>
          <div className="toolbox-grid">
            {techStackData.categories.map((category) => (
              <div key={category.name} className="toolbox-item">
                <h3 className="toolbox-title">{category.name}</h3>
                <div className="toolbox-tags">
                  {category.technologies.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="experience-layout">
            <h2 className="experience-kicker">
              Where I&apos;ve been
              <br />
              building
            </h2>
            <div>
              {experiencesData.experiences.map((exp) => (
                <article key={`${exp.company}-${exp.role}`} className="timeline-item">
                  <p className="timeline-date">{exp.period}</p>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <p className="timeline-company">{exp.company}</p>
                  <p className="timeline-copy">{exp.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="callout-panel section-header">
            <div>
              <p className="overline">Availability</p>
              <h2 className="section-heading mt-4">Open to backend and full-stack roles.</h2>
              <p className="section-copy mt-4">
                Strongest fit: secure APIs, production backend systems, database-backed products, and teams that value practical execution.
              </p>
            </div>
            <Link href="mailto:108tiwari.g@gmail.com" className="btn-primary">
              Hire me
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeToggle floating />
    </div>
  );
}
