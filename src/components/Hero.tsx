import Link from "next/link";

const tags = ["Go", "TypeScript", "PostgreSQL", "Redis", "Docker"];
const socials = [
  ["GitHub", "https://github.com/Ragini-Tiwari"],
  ["LinkedIn", "https://www.linkedin.com/in/ragini-tiwari/"],
  ["X", "https://x.com/Gunnu_tiwari_"],
  ["Medium.to", "https://the-nullnarrator.medium.com/"],
];

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <p className="overline hero__label">Software Developer</p>
        <h1 className="hero__title">
          Ragini
          <br />
          <em>Tiwari</em>
        </h1>
        <p className="hero__subtitle">
          I’m a Software & Full-Stack Developer focused on building scalable applications, secure APIs, and reliable backend systems with Java and modern web technologies.

        </p>

        <div className="hero__tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="hero__actions">
          <Link href="/projects" className="btn-primary">
            View projects
          </Link>
          <Link href="/about" className="btn-ghost">
            See experience
          </Link>
        </div>

        <div className="hero__socials">
          {socials.map(([label, href], index) => (
            <Link key={href} href={href} target="_blank">
              {label}
              {index < socials.length - 1 ? "  ·" : ""}
            </Link>
          ))}
        </div>
      </div>

      <aside className="hero__snapshot">
        <p className="snapshot__title">Recruiter Snapshot</p>
        <div className="snapshot__list">
          <div className="snapshot__row">
            <span className="snapshot__key">Role</span>
            <span className="snapshot__value">Application / Full Stack</span>
          </div>
          <div className="snapshot__row">
            <span className="snapshot__key">Best at</span>
            <span className="snapshot__value">Secure APIs, data flow</span>
          </div>
          <div className="snapshot__row">
            <span className="snapshot__key">Current lane</span>
            <span className="snapshot__value"> distributed systems</span>
          </div>
          <div className="snapshot__row">
            <span className="snapshot__key">Status</span>
            <span className="snapshot__value status-line">
              <span className="status-dot" aria-hidden="true" />
              Open to work
            </span>
          </div>
        </div>
        <p className="snapshot__note">
         Strong fit for teams looking for a versatile Software & Full-Stack Developer with experience in backend development, API integration, database design, and building reliable applications across the stack.

        </p>
      </aside>
    </section>
  );
}
