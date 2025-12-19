import Link from "next/link";

const socials = [
    {
        name: "GitHub",
<<<<<<< HEAD
        href: "https://github.com/govindti/",
=======
        href: "https://github.com/Ragini-Tiwari/",
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "X (Twitter)",
<<<<<<< HEAD
        href: "https://x.com/Govind_tiwari_",
=======
        href: "https://x.com/Gunnu_tiwari_/",
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
<<<<<<< HEAD
        href: "https://www.linkedin.com/in/govindtiwri/",
=======
        href: "www.linkedin.com/in/ragini-tiwari/",
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        ),
    },
    {
        name: "Devto",
        href: "https://dev.to/govind_tiwari/",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6v4.36h.58c.37 0 .65-.08.84-.23.18-.15.27-.44.27-.87v-2.16c0-.43-.09-.72-.27-.87zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-1.98.77H4v-8h2.58c.92 0 1.54.19 1.98.77.44.58.66 1.36.66 2.35v1.75c0 1-.22 1.77-.66 2.36zm3.88-2.75h-1.22v2.12H9.78v-8h1.44v2.67h1.22v-2.67h1.44v8h-1.44v-2.12zm9.56-5.47v8h-2.98v-8h1.44v6.56h1.1v-6.56h.44z" />
            </svg>
        ),
    },
    {
        name: "Email",
<<<<<<< HEAD
        href: "mailto:108tiwari.g@gmail.com",
=======
        href: "mailto:gunnutiwari5s@gmail.com",
>>>>>>> 2859fe1f6a2d621751812153f088c79222fa3c50
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
];

export default function SocialIcons() {
    return (
        <div className="flex gap-2 mt-10">
            {socials.map((social) => (
                <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={social.name}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
}
