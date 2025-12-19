import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VisitorTracker from "@/components/VisitorTracker";
import { prisma } from "@/lib/prisma";
import SocialIcons from "@/components/SocialIcons";

export const revalidate = 60; // Revalidate every 60 seconds for visitor count

async function getVisitorCount() {
  try {
    const count = await prisma.visitor.count();
    return count;
  } catch {
    return 0;
  }
}

export default async function Home() {
  const visitorCount = await getVisitorCount();

  return (
    <div className="min-h-screen flex flex-col">
      <VisitorTracker />

      {/* Navigation */}
      <Navbar />

      {/* Divider line */}
      <div className="w-full h-px bg-gray-800" />

      {/* Main content */}
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Hero />
        <SocialIcons />
      </main>

      {/* Footer */}
      <Footer visitorCount={visitorCount} />
    </div>
  );
}
