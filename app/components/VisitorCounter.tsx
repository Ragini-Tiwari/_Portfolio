'use client';

import { useEffect, useState } from 'react';

export default function VisitorCounter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        async function fetchCount() {
            try {
                const res = await fetch('/api/visitors/count');
                if (res.ok) {
                    const data = await res.json();
                    setCount(data.count);
                }
            } catch (error) {
                console.error('Failed to fetch visitor count:', error);
            }
        }

        fetchCount();
    }, []);

    if (count === null) {
        return (
            <span className="text-zinc-500 text-sm font-mono">
                loading...
            </span>
        );
    }

    return (
        <span className="text-zinc-500 text-sm font-mono">
            {count.toLocaleString()} visitors
        </span>
    );
}
