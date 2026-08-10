import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import experiencesData from "@/data/experience.json";
import blogsData from "@/data/blogs.json";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Ragini Tiwari | Software Developer",
  description: "Software developer specialising in ReactJS, Node.js, distributed systems, and secure APIs.",
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

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
}

interface Post {
  title: string;
  date: string;
  description: string;
  url: string;
  readTime: string;
  tags: string[];
}

function SectionHeader({
  eyebrow,
  title,
  href,
  action,
}: {
  eyebrow: string;
  title: string;
  href?: string;
  action?: string;
}) {
  return (
    <div className="section-header">
      <div>
        <p className="overline">{eyebrow}</p>
        <h2 className="section-heading mt-4">{title}</h2>
      </div>
      {href && action && (
        <Link href={href} className="mono-link">
          {action} →
        </Link>
      )}
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Home() {
  const projects = projectsData.projects as Project[];
  const featuredNames = ["MailFlow", "nodekickstart", "GoShorty"];
  const featuredProjects = featuredNames
    .map((name) => projects.find((project) => project.name === name))
    .filter((project): project is Project => Boolean(project));
  const experiences = experiencesData.experiences as Experience[];
  const posts = blogsData.posts as Post[];

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <Hero />

        <section className="section">
          <SectionHeader eyebrow="Featured proof" title="Three builds worth opening first" href="/projects" action="View all projects" />
          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.name} className="project-cell">
                <p className="project-status">
                  <span className={`status-dot ${project.status === "in-progress" ? "status-dot--amber" : ""}`} aria-hidden="true" />
                  {project.status.replace("-", " ")}
                </p>
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tech.slice(0, 3).map((tech) => (
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
          <div className="experience-layout">
            <h2 className="experience-kicker">
              Where I&apos;ve been
              <br />
              building
            </h2>
            <div>
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.role}`} className="timeline-item">
                  <p className="timeline-date">{experience.period}</p>
                  <h3 className="timeline-role">{experience.role}</h3>
                  <p className="timeline-company">{experience.company}</p>
                  <p className="timeline-copy">{experience.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="working-grid">
            {[
              ["Security", "API hardening, validation, injection prevention"],
              ["Performance", "Memory leaks, concurrency, scalable service flow"],
              ["Delivery", "Production websites, CLIs, backend integrations"],
            ].map(([label, value]) => (
              <div key={label} className="working-item">
                <p className="working-label">{label}</p>
                <p className="working-copy">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <SectionHeader eyebrow="Writing" title="How I think and communicate" href="/writing" action="View all writing" />
          <div className="writing-grid">
            {posts.slice(0, 2).map((post) => (
              <article key={post.url} className="writing-card">
                <p className="writing-meta">
                  {formatDate(post.date)} · {post.readTime}
                </p>
                <h3 className="writing-title">{post.title}</h3>
                <p className="writing-copy">{post.description}</p>
                <div className="writing-tags">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={post.url} target="_blank" className="mono-link writing-link">
                  Read on {post.url.includes("dev.to") ? "Dev.to" : "X"} →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ThemeToggle floating />
    </div>
  );
}
