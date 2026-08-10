import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import VisitorTracker from "@/components/VisitorTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ragini | Software Developer",
  description: "Software developer working with Go & TypeScript, distributed systems, and developer tools. Building interpreters, data stores, and rate limiters from scratch.",
  keywords: ["Software Developer", "Java", "TypeScript", "ReactJS", "NodeJS", "Backend", "Distributed Systems", "Developer Tools", "Cloud"],
  authors: [{ name: "Ragini" }],
  openGraph: {
    title: "Ragini Tiwari - Software Developer",
    description: "Passionate Software developer with experience building scalable & secured web applications",
    url: "https://about-ragini.vercel.app/",
    type: "website",
    siteName: "Ragini Tiwari Portfolio",
    images: [
      {
        url: "https://www.raginitiwari.site/overview.png",
        width: 1200,
        height: 630,
        alt: "Ragini Tiwari - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragini Tiwari - Software Developer",
    description: "Passionate software developer with experience building scalable & secured web applications",
    creator: "@Ragini_Tiwari_",
    images: [
      {
        url: "https://www.raginitiwari.site/overview.png",
        alt: "Ragini Tiwari - Software Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const key = "ragini-portfolio-theme";
                  const saved = localStorage.getItem(key);
                  const theme = saved === "light" ? "light" : "dark";
                  document.documentElement.classList.toggle("theme-dark", theme === "dark");
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.style.colorScheme = theme;
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
