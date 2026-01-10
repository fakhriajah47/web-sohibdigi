import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Registers GSAP plugins once when the app mounts.
 * Using useLayoutEffect to ensure plugins are ready before any animations start.
 */
export function useGSAPRegistry() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP ScrollTrigger Registered');
    }, []);
}
