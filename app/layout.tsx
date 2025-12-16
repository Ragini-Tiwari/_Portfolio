import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisitorTracker from "./components/VisitorTracker";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ragini Tiwari | Full Stack Developer",
  description: "Full Stack Developer specializing in Next.js, Node.js, and Distributed Systems",
  keywords: ["developer", "full stack", "next.js", "node.js", "distributed systems", "portfolio"],
  authors: [{ name: "Ragini Tiwari" }],
  openGraph: {
    title: "Ragini Tiwari | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, Node.js, and Distributed Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragini Tiwari | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, Node.js, and Distributed Systems",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#1a2a2a] text-zinc-200`}
      >
        <VisitorTracker />
        <Header />
        <main className="min-h-screen pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
