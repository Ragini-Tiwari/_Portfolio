import SocialIcons from './SocialIcons';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1a2a2a] border-t border-zinc-800/50">
            <div className="max-w-3xl mx-auto px-6 py-4">
                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-6 mb-4">
                    <SocialIcons />
                </div>

                {/* Bottom Row - find me here & visitor count */}
                <div className="flex items-center justify-between text-sm font-mono">
                    <span className="text-zinc-500">find me here</span>
                    <VisitorCounter />
                </div>
            </div>
        </footer>
    );
}
