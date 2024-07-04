"use client";
// import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScrolling({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 0.1, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;