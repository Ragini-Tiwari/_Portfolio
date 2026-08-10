"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <nav aria-label="Primary navigation">
        <div className="site-nav__inner">
          <Link href="/" className="site-brand" aria-label="Ragini Tiwari home">
            <span className="site-brand__stamp">RT</span>
            <span className="site-brand__name">Ragini Tiwari</span>
          </Link>

          <div className="nav-links" aria-label="Portfolio sections">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="site-nav__actions">
            <Link href="mailto:tiwariragini1054@gmail.com" className="nav-hire">
              Hire me
            </Link>
            <ThemeToggle />
            <button
              type="button"
              className="nav-menu"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? "×" : "≡"}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="nav-drawer">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
