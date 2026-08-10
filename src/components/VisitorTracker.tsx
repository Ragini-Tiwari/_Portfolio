"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitorTracker() {
    const pathname = usePathname();

    useEffect(() => {
        const trackVisitor = async () => {
            try {
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const deviceType = getDeviceType();

                // Check if already tracked in this session
                const hasTracked = sessionStorage.getItem("visitor_tracked");

                let totalCount: number | undefined;

                if (!hasTracked) {
                    // First visit in this session - track the visitor
                    const response = await fetch("/api/visitors", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            screenWidth,
                            screenHeight,
                            device: deviceType,
                        }),
                    });

                    if (response.ok) {
                        const data = await response.json();
                        totalCount = data.totalCount;
                        sessionStorage.setItem("visitor_tracked", "true");
                    }
                } else {
                    // Already tracked - just fetch the current count
                    const response = await fetch("/api/visitors");
                    if (response.ok) {
                        const data = await response.json();
                        totalCount = data.count;
                    }
                }

                // Always dispatch the current count from the API
                if (totalCount !== undefined) {
                    window.dispatchEvent(
                        new CustomEvent("visitorCountUpdated", {
                            detail: { count: totalCount },
                        })
                    );
                }
            } catch (error) {
                console.error("Failed to track visitor:", error);
            }
        };

        trackVisitor();
    }, [pathname]); // Re-run when pathname changes

    return null;
}

function getDeviceType(): string {
    const ua = navigator.userAgent;
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
        return "tablet";
    }
    if (
        /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
            ua
        )
    ) {
        return "mobile";
    }
    return "desktop";
}
