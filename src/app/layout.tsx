import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ragini | Full Stack Developer",
  description:
    "Full Stack developer working with Next JS & TypeScript, distributed systems, and developer tools. Building interpreters, data stores, and rate limiters from scratch.",
  keywords: ["NodeJS", "Full Stack", "Distributed Systems", "Developer Tools", "Cloud"],
  authors: [{ name: "Ragini" }],
  openGraph: {
    title: "Ragini Tiwari - Full Stack Developer",
    description:
      "Passionate software developer with experience building scalable & secured web applications",
    url: "https://about-ragini.vercel.app/",
    type: "website",
    siteName: "Ragini Tiwari Portfolio",
    images: [
      {
        url: "https://www.raginiiwari.site/overview.png",
        width: 1200,
        height: 630,
        alt: "Ragini Tiwari - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragini Tiwari - Full Stack Developer",
    description:
      "Passionate developer with experience building scalable & secured web applications",
    creator: "@Gunnu_tiwari_",
    images: [
      {
        url: "https://www.raginitiwari.site/overview.png",
        alt: "Ragini Tiwari - Full Stack Developer",
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
      <body className={`${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
