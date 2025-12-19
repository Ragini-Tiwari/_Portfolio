"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
<<<<<<< HEAD
    //{ href: "/blog", label: "blog" },
=======
    { href: "/blog", label: "blog" },
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
    { href: "/projects", label: "projects" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-center gap-6 sm:gap-8 py-6 sm:py-8 text-sm">
            {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`transition-colors ${isActive
                                ? "text-white underline underline-offset-4"
                                : "hover:text-white"
                            }`}
                    >
                        {link.label}
                    </Link>
                );
            })}
        </nav>
    );
}
