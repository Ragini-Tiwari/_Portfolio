import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ragini | Software Developer",
  description: "Software developer working with Node Js & TypeScript, distributed systems, and developer tools.Turning ideas into performant, production-ready web applications.",
  keywords: [ "NodeJS", "Backend", "Distributed Systems", "Developer Tools", "Cloud"],
  authors: [{ name: "Ragini" }],
  openGraph: {
    title: "Ragini Tiwari - Software Developer",
    description: "Passionate Software developer with experience building scalable & secured web applications",
    url: "https://about-govind.vercel.app/",
    type: "website",
    siteName: "Ragini Tiwari Portfolio",
    images: [
      {
        url: "https://www.govindtiwari.site/overview.png",
        width: 1200,
        height: 630,
        alt: "Ragini Tiwari - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragini Tiwari - Software Developer",
    description: "Passionate Software developer with experience building scalable & secured web applications",
    creator: "@Gunnu_tiwari_",
    images: [
      {
        url: "https://www.govindtiwari.site/overview.png",
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
      <body className={`${jetbrainsMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
