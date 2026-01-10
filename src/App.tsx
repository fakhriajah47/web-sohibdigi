import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header, Footer, Preloader, ScrollToTop } from '@/components/layout';
import { I18nProvider } from '@/i18n/I18nProvider';
import { useGSAPRegistry } from '@/hooks/useGSAPRegistry';
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import { Home } from '@/pages/Home';
import { WebDevelopment } from '@/pages/WebDevelopment';
import { DomainChecker } from '@/pages/DomainChecker';

/**
 * ScrollToTop component that triggers on route change
 */
function ScrollToTopRoute() {
    const { pathname } = useLocation();

    // Scroll to top when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

/**
 * Main App component with Routing
 */
/**
 * Inner App component that has access to Router context
 */
function AppContent() {
    // Check if user has visited in this session
    const [isLoading, setIsLoading] = useState(() => {
        if (typeof window !== 'undefined') {
            return !sessionStorage.getItem('hasVisited');
        }
        return true;
    });

    // Initialize GSAP
    useGSAPRegistry();
    useScrollAnimations();

    const handlePreloaderComplete = () => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('hasVisited', 'true');
        }
        setIsLoading(false);
    };

    return (
        <>
            {/* Preloader - Only run once on initial load */}
            {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

            {/* Main Content - visible after preloader completes */}
            <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
                <ScrollToTopRoute />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/web-development" element={<WebDevelopment />} />
                    <Route path="/domain-check" element={<DomainChecker />} />
                </Routes>
                <Footer />
                <ScrollToTop />
            </div>
        </>
    );
}

/**
 * Main App component with Routing Provider
 */
function App() {
    return (
        <Router>
            <I18nProvider>
                <AppContent />
            </I18nProvider>
        </Router>
    );
}

export default App;
