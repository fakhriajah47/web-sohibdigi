import { useState, useEffect } from 'react';

/**
 * Scroll to top button with circular SVG progress indicator
 */
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [strokeDashoffset, setStrokeDashoffset] = useState(307.919);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const scrollPercentage = (scrollPosition / scrollableHeight) * 100;

            // Update progress circle
            setStrokeDashoffset(307.919 - (scrollPercentage * 307.919) / 100);

            // Show/hide button
            setIsVisible(scrollPosition > 350);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            id="scroll-to-top"
            className="z-40 fixed right-2.5 bottom-5 w-10 h-10 items-center justify-center cursor-pointer"
            style={{ display: isVisible ? 'flex' : 'none' }}
            onClick={scrollToTop}
        >
            <i className="ri-arrow-up-s-line absolute text-primary"></i>
            <svg
                width="100%"
                height="100%"
                viewBox="-1 -1 102 102"
                stroke="#06b6d4"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        strokeDashoffset,
                        strokeDasharray: '307.919, 307.919',
                    }}
                />
            </svg>
        </div>
    );
}
