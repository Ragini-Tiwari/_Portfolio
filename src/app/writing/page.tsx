import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import blogsData from "@/data/blogs.json";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Writing | Ragini Tiwari",
  description: "Technical writing by Ragini Tiwari on Java, backend development, databases, APIs, and practical software engineering.",
};

interface Post {
  title: string;
  date: string;
  description: string;
  url: string;
  readTime: string;
  tags: string[];
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function Writing() {
  const posts = blogsData.posts as Post[];

  return (
    <div className="page-shell">
      <Navbar />
      <main className="page-main">
        <section className="section">
          <p className="overline">Writing</p>
          <h1 className="page-title mt-4">How I Build and Solve Problems.</h1>
          <p className="section-copy mt-6">
            Practical notes on Java, backend development, databases, APIs, and the lessons I’m learning while turning ideas into working software.

          </p>
        </section>

        <section className="section">
          <div className="writing-grid">
            {posts.map((post) => (
              <article key={post.url} className="writing-card">
                <p className="writing-meta">
                  {formatDate(post.date)} · {post.readTime}
                </p>
                <h2 className="writing-title">{post.title}</h2>
                <p className="writing-copy">{post.description}</p>
                <div className="writing-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={post.url} target="_blank" className="mono-link writing-link">
                  Read on {post.url.includes("medium.to") ? "Medium.to" : "X"} →
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
