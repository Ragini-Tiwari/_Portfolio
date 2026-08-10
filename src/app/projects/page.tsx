import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Projects | Ragini Tiwari",
  description: "Projects by Ragini Tiwari spanning Java, Node.js, Python, APIs, databases, and full-stack web applications.",
};

interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  status: "completed" | "in-progress" | "archived";
}

export default function Projects() {
  const projects = projectsData.projects as Project[];

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <div className="section-header">
            <div>
              <p className="overline">Project lab</p>
              <h1 className="page-title mt-4">Useful systems, CLIs, and production builds.</h1>
              <p className="section-copy mt-6">
                A selected set of software tools, services, production websites, and experiments. Each project is built to sharpen a practical part of service design.
              </p>
            </div>
            <div className="stats-panel">
              <div className="stats-grid">
                <div>
                  <p className="stat-number">{projects.length}</p>
                  <p className="stat-label">Projects</p>
                </div>
                <div>
                  <p className="stat-number">{projects.filter((p) => p.featured).length}</p>
                  <p className="stat-label">Featured</p>
                </div>
                <div>
                  <p className="stat-number">{projects.filter((p) => p.status === "completed").length}</p>
                  <p className="stat-label">Shipped</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-cell">
                <p className="project-status">
                  <span className={`status-dot ${project.status === "in-progress" ? "status-dot--amber" : ""}`} aria-hidden="true" />
                  {project.status.replace("-", " ")}
                </p>
                <h2 className="project-title">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      GitHub →
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      Live →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="callout-panel section-header">
            <div>
              <p className="overline">Collaboration</p>
              <h2 className="section-heading mt-4">Application problems worth solving carefully.</h2>
              <p className="section-copy mt-4">
                I am interested in APIs, distributed systems, open source, and practical tools that make engineering work more reliable.
              </p>
            </div>
            <Link href="mailto:tiwariragini1054@gmail.com" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <ThemeToggle floating />
    </div>
  );
}
