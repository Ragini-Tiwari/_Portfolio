import Link from "next/link";

interface FooterProps {
  visitorCount?: number;
}

export default function Footer({ visitorCount }: FooterProps) {
  return (
        // <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-6 py-4 md:bg-transparent md:backdrop-blur-none bg-black/80 backdrop-blur-md">
    <footer className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-6 py-4">
      <div className="text-xs text-gray-500">
        <Link
          href="https://x.com/Gunnu_Tiwari_"
          className="highlight underline"
        >
          find me here
        </Link>
      </div>

      {/* Visitor Count */}
      {visitorCount !== undefined && (
        <div className="text-xs text-gray-500">
          {visitorCount.toLocaleString()} visitors
        </div>
      )}
    </footer>
  );
}
