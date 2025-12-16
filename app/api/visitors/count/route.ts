import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
    try {
        const count = await prisma.visitor.count();
        return NextResponse.json({ count }, { status: 200 });
    } catch (error) {
        console.error('Failed to get visitor count:', error);
        // Return 0 if database is not connected or table doesn't exist
        return NextResponse.json({ count: 0 }, { status: 200 });
    }
}
