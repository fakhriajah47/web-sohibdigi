import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Global hook to automatically animate elements with 'fadeInUp' class
 * when they scroll into view.
 * 
 * Usage: Add className="fadeInUp" to any element.
 * Optional: data-delay="0.2" for custom delay.
 */
export function useScrollAnimations() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Select all elements with fadeInUp class
        const elements = document.querySelectorAll('.fadeInUp');

        // Batch animations for better performance
        ScrollTrigger.batch(elements, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    autoAlpha: 1,
                    y: 0,
                    stagger: 0.10,
                    duration: 0.3,
                    ease: 'power3.out',
                    overwrite: true
                });
            },
            once: true, // Only animate once
            start: 'top 85%', // Trigger when top of element hits 85% of viewport height
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [pathname]);
}
