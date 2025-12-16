"use client";

import { useEffect } from "react";

export default function VisitorTracker() {
    useEffect(() => {
        const trackVisitor = async () => {
            try {
                const screenWidth = window.screen.width;
                const screenHeight = window.screen.height;
                const deviceType = getDeviceType();

                await fetch("/api/visitors", {
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
            } catch (error) {
                console.error("Failed to track visitor:", error);
            }
        };

        // Check if already tracked in this session
        const hasTracked = sessionStorage.getItem("visitor_tracked");
        if (!hasTracked) {
            trackVisitor();
            sessionStorage.setItem("visitor_tracked", "true");
        }
    }, []);

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
