import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
    onComplete?: () => void;
}

/**
 * Animated preloader using GSAP for smooth SVG path transitions
 */
export function Preloader({ onComplete }: PreloaderProps) {
    const svgRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const container = containerRef.current;

        if (!svg || !container) return;

        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        const tl = gsap.timeline({
            onComplete: () => {
                onComplete?.();
            },
        });

        // Animate logo
        tl.to('.preloader-heading img', {
            delay: 0.1,
            y: -100,
            opacity: 0,
        });

        // Animate SVG path
        tl.to(svg, {
            duration: 0.1,
            attr: { d: curve },
            ease: 'power2.easeIn',
        }).to(svg, {
            duration: 0.1,
            attr: { d: flat },
            ease: 'power2.easeOut',
        });

        // Zoom in and hide
        tl.to(container, {
            duration: 0.1,
            scale: 1.2,
            opacity: 0,
            ease: 'power2.inOut',
        });
        tl.to(container, {
            zIndex: -1,
            display: 'none',
        });

        return () => {
            tl.kill();
        };
    }, [onComplete]);

    return (
        <div
            ref={containerRef}
            className="preloader z-[999] fixed w-full h-screen left-0 top-0 overflow-hidden"
        >
            <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
            </svg>
            <div className="preloader-heading absolute top-0 left-0 flex justify-center items-center w-full h-full">
                <img
                    src="/images/logos/logo.png"
                    alt="SohibDigi Logo"
                    className="w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-112"
                />
            </div>
        </div>
    );
}
