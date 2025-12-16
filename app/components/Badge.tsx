interface BadgeProps {
    children: React.ReactNode;
    variant?: 'default' | 'outline';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
    const baseStyles = 'px-3 py-1 text-xs font-mono rounded-sm transition-colors';

    const variants = {
        default: 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700',
        outline: 'border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-300',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]}`}>
            {children}
        </span>
    );
}
