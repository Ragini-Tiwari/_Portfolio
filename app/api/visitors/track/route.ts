import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

interface VisitorPayload {
    userAgent?: string;
    browser?: string;
    browserVersion?: string;
    device?: string;
    deviceModel?: string;
    deviceVendor?: string;
    os?: string;
    osVersion?: string;
    screenWidth?: number;
    screenHeight?: number;
    viewportWidth?: number;
    viewportHeight?: number;
    colorDepth?: number;
    pixelRatio?: number;
    pageVisited?: string;
    referrer?: string;
    language?: string;
    languages?: string;
    platform?: string;
    cookiesEnabled?: boolean;
    doNotTrack?: boolean;
    online?: boolean;
    touchPoints?: number;
    connection?: string;
    timezone?: string;
}

interface GeoData {
    city?: string;
    region?: string;
    country?: string;
    countryCode?: string;
    isp?: string;
    lat?: number;
    lon?: number;
}

async function getGeoData(ip: string): Promise<GeoData> {
    try {
        // Skip geolocation for localhost/private IPs
        if (ip === '127.0.0.1' || ip === '::1' || ip.startsWith('192.168.') || ip.startsWith('10.')) {
            return {
                city: 'Local',
                region: 'Local',
                country: 'Local',
                countryCode: 'LO',
                isp: 'Local Network',
            };
        }

        // Using ip-api.com (free, no API key required, 45 requests/minute limit)
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=city,regionName,country,countryCode,isp,lat,lon`);

        if (response.ok) {
            const data = await response.json();
            return {
                city: data.city,
                region: data.regionName,
                country: data.country,
                countryCode: data.countryCode,
                isp: data.isp,
                lat: data.lat,
                lon: data.lon,
            };
        }
    } catch (error) {
        console.error('Failed to get geo data:', error);
    }

    return {};
}

function getClientIP(request: NextRequest): string {
    // Check various headers for the real IP
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0].trim();
    }

    const realIP = request.headers.get('x-real-ip');
    if (realIP) {
        return realIP;
    }

    // Fallback
    return '127.0.0.1';
}

export async function POST(request: NextRequest) {
    try {
        const data: VisitorPayload = await request.json();
        const ipAddress = getClientIP(request);
        const geoData = await getGeoData(ipAddress);

        const visitor = await prisma.visitor.create({
            data: {
                // Device Information
                userAgent: data.userAgent,
                browser: data.browser,
                browserVersion: data.browserVersion,
                device: data.device,
                deviceModel: data.deviceModel,
                deviceVendor: data.deviceVendor,

                // Operating System
                os: data.os,
                osVersion: data.osVersion,

                // Screen Information
                screenWidth: data.screenWidth,
                screenHeight: data.screenHeight,
                viewportWidth: data.viewportWidth,
                viewportHeight: data.viewportHeight,
                colorDepth: data.colorDepth,
                pixelRatio: data.pixelRatio,

                // Network & Location
                ipAddress,
                city: geoData.city,
                region: geoData.region,
                country: geoData.country,
                countryCode: geoData.countryCode,
                timezone: data.timezone,
                isp: geoData.isp,
                latitude: geoData.lat,
                longitude: geoData.lon,

                // Page & Session
                pageVisited: data.pageVisited,
                referrer: data.referrer,
                language: data.language,
                languages: data.languages,

                // Additional Details
                platform: data.platform,
                cookiesEnabled: data.cookiesEnabled,
                doNotTrack: data.doNotTrack,
                online: data.online,
                touchPoints: data.touchPoints,
                connection: data.connection,
            },
        });

        return NextResponse.json({ success: true, id: visitor.id }, { status: 201 });
    } catch (error) {
        console.error('Failed to track visitor:', error);
        return NextResponse.json(
            { error: 'Failed to track visitor' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({ message: 'Use POST to track visitors' }, { status: 405 });
}
