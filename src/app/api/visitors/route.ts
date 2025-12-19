import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// IP Geolocation API (free, no key required)
async function getGeoInfo(ip: string) {
    try {
        // Skip for localhost/private IPs
        if (ip === "127.0.0.1" || ip === "::1" || ip.startsWith("192.168.") || ip.startsWith("10.")) {
            return { country: "Local", city: "Localhost" };
        }

        const response = await fetch(`http://ip-api.com/json/${ip}?fields=country,city`);
        if (response.ok) {
            const data = await response.json();
            return { country: data.country || null, city: data.city || null };
        }
    } catch (error) {
        console.error("Geo lookup failed:", error);
    }
    return { country: null, city: null };
}

// POST - Record new visitor
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { screenWidth, screenHeight, device } = body;

        // Get client IP
        const forwardedFor = request.headers.get("x-forwarded-for");
        const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

        // Get user agent
        const userAgent = request.headers.get("user-agent") || null;

        // Get geo information
        const { country, city } = await getGeoInfo(ip);

        // Create visitor record
        const visitor = await prisma.visitor.create({
            data: {
                ip,
                country,
                city,
                device,
                screenWidth,
                screenHeight,
                userAgent,
            },
        });

        return NextResponse.json({ success: true, id: visitor.id });
    } catch (error) {
        console.error("Failed to record visitor:", error);
        return NextResponse.json(
            { success: false, error: "Failed to record visitor" },
            { status: 500 }
        );
    }
}

// GET - Get total visitor count
export async function GET() {
    try {
        const count = await prisma.visitor.count();
        return NextResponse.json({ count });
    } catch (error) {
        console.error("Failed to get visitor count:", error);
        return NextResponse.json({ count: 0 });
    }
}