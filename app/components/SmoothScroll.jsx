"use client";
// import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.07, smoothTouch: true, wheelMultiplier: 1, touchMultiplier: 1.5 }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;