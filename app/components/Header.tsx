'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/blog', label: 'blog' },
    { href: '/projects', label: 'projects' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="w-full bg-[#1a2a2a]">
            <nav className="max-w-3xl mx-auto px-6 py-4">
                <ul className="flex items-center justify-center gap-8 text-sm font-mono">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`transition-colors hover:text-white ${pathname === item.href
                                        ? 'text-white'
                                        : 'text-zinc-400'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
