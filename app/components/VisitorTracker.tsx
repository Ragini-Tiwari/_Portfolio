'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

interface VisitorData {
    // Device Information
    userAgent: string;
    browser: string;
    browserVersion: string;
    device: string;
    deviceModel: string;
    deviceVendor: string;

    // Operating System
    os: string;
    osVersion: string;

    // Screen Information
    screenWidth: number;
    screenHeight: number;
    viewportWidth: number;
    viewportHeight: number;
    colorDepth: number;
    pixelRatio: number;

    // Page & Session
    pageVisited: string;
    referrer: string;
    language: string;
    languages: string;

    // Additional Details
    platform: string;
    cookiesEnabled: boolean;
    doNotTrack: boolean;
    online: boolean;
    touchPoints: number;
    connection: string;
    timezone: string;
}

function parseUserAgent(ua: string): {
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    device: string;
    deviceModel: string;
    deviceVendor: string;
} {
    let browser = 'Unknown';
    let browserVersion = '';
    let os = 'Unknown';
    let osVersion = '';
    let device = 'desktop';
    let deviceModel = '';
    let deviceVendor = '';

    // Browser detection
    if (ua.includes('Firefox/')) {
        browser = 'Firefox';
        browserVersion = ua.match(/Firefox\/([\d.]+)/)?.[1] || '';
    } else if (ua.includes('Edg/')) {
        browser = 'Edge';
        browserVersion = ua.match(/Edg\/([\d.]+)/)?.[1] || '';
    } else if (ua.includes('Chrome/')) {
        browser = 'Chrome';
        browserVersion = ua.match(/Chrome\/([\d.]+)/)?.[1] || '';
    } else if (ua.includes('Safari/') && !ua.includes('Chrome')) {
        browser = 'Safari';
        browserVersion = ua.match(/Version\/([\d.]+)/)?.[1] || '';
    } else if (ua.includes('Opera/') || ua.includes('OPR/')) {
        browser = 'Opera';
        browserVersion = ua.match(/(?:Opera|OPR)\/([\d.]+)/)?.[1] || '';
    }

    // OS detection
    if (ua.includes('Windows NT')) {
        os = 'Windows';
        const ntVersion = ua.match(/Windows NT ([\d.]+)/)?.[1];
        const versionMap: Record<string, string> = {
            '10.0': '10/11',
            '6.3': '8.1',
            '6.2': '8',
            '6.1': '7',
        };
        osVersion = versionMap[ntVersion || ''] || ntVersion || '';
    } else if (ua.includes('Mac OS X')) {
        os = 'macOS';
        osVersion = ua.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, '.') || '';
    } else if (ua.includes('Linux')) {
        os = 'Linux';
        if (ua.includes('Android')) {
            os = 'Android';
            osVersion = ua.match(/Android ([\d.]+)/)?.[1] || '';
        }
    } else if (ua.includes('iPhone') || ua.includes('iPad')) {
        os = 'iOS';
        osVersion = ua.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, '.') || '';
    }

    // Device detection
    if (ua.includes('Mobile') || ua.includes('Android') || ua.includes('iPhone')) {
        device = 'mobile';
    } else if (ua.includes('iPad') || ua.includes('Tablet')) {
        device = 'tablet';
    }

    // Vendor detection
    if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('Mac')) {
        deviceVendor = 'Apple';
        if (ua.includes('iPhone')) deviceModel = 'iPhone';
        else if (ua.includes('iPad')) deviceModel = 'iPad';
        else if (ua.includes('Mac')) deviceModel = 'Mac';
    } else if (ua.includes('Samsung')) {
        deviceVendor = 'Samsung';
    } else if (ua.includes('Pixel')) {
        deviceVendor = 'Google';
        deviceModel = 'Pixel';
    }

    return { browser, browserVersion, os, osVersion, device, deviceModel, deviceVendor };
}

function getConnectionType(): string {
    if (typeof navigator !== 'undefined' && 'connection' in navigator) {
        const conn = (navigator as Navigator & { connection?: { effectiveType?: string } }).connection;
        return conn?.effectiveType || 'unknown';
    }
    return 'unknown';
}

export default function VisitorTracker() {
    const pathname = usePathname();
    const hasTracked = useRef(false);

    useEffect(() => {
        // Only track once per session
        if (hasTracked.current) return;
        hasTracked.current = true;

        async function trackVisitor() {
            try {
                const ua = navigator.userAgent;
                const parsed = parseUserAgent(ua);

                const visitorData: VisitorData = {
                    userAgent: ua,
                    browser: parsed.browser,
                    browserVersion: parsed.browserVersion,
                    device: parsed.device,
                    deviceModel: parsed.deviceModel,
                    deviceVendor: parsed.deviceVendor,
                    os: parsed.os,
                    osVersion: parsed.osVersion,
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    viewportWidth: window.innerWidth,
                    viewportHeight: window.innerHeight,
                    colorDepth: window.screen.colorDepth,
                    pixelRatio: window.devicePixelRatio,
                    pageVisited: pathname,
                    referrer: document.referrer,
                    language: navigator.language,
                    languages: navigator.languages?.join(', ') || navigator.language,
                    platform: navigator.platform,
                    cookiesEnabled: navigator.cookieEnabled,
                    doNotTrack: navigator.doNotTrack === '1',
                    online: navigator.onLine,
                    touchPoints: navigator.maxTouchPoints || 0,
                    connection: getConnectionType(),
                    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                };

                await fetch('/api/visitors/track', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(visitorData),
                });
            } catch (error) {
                console.error('Failed to track visitor:', error);
            }
        }

        trackVisitor();
    }, [pathname]);

    return null; // This component doesn't render anything
}
