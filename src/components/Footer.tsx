"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  ["GitHub", "https://github.com/Ragini-Tiwari"],
  ["LinkedIn", "https://www.linkedin.com/in/ragini-tiwari/"],
  ["Email", "mailto:tiwariragini1054@gmail.com"],
  ["X", "https://x.com/Gunnu_tiwari_"],
];

export default function Footer() {
  const [currentCount, setCurrentCount] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleCountUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ count: number }>;
      setCurrentCount(customEvent.detail.count);
    };

    window.addEventListener("visitorCountUpdated", handleCountUpdate);
    return () => window.removeEventListener("visitorCountUpdated", handleCountUpdate);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <h2 className="footer__name">Ragini Tiwari</h2>
            <p className="footer__copy">
              Software developer focused on secure APIs, production systems, and practical learning in public.
            </p>
          </div>
          <div>
            <div className="footer__links">
              {links.map(([label, href]) => (
                <Link key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined}>
                  {label}
                </Link>
              ))}
            </div>
            <Link href="mailto:tiwariragini1054@gmail.com" className="btn-primary mt-6">
              Get in touch
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Built with Next.js and systems curiosity.</span>
          <span>{currentCount ? `${currentCount.toLocaleString()} visitors` : "©2026"}</span>
        </div>
      </div>
    </footer>
  );
}
