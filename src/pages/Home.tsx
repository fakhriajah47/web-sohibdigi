import {
    Hero,
    RecentWork,
    Partners,
    About,
    WorkProcess,
    Services,
    Projects,
    Features,
    Pricing,
    FAQs,
    BookNow,
    // Testimonials,
} from '@/components/sections';
import { SEO } from '@/components/common/SEO';

export function Home() {
    return (
        <main>
            <SEO 
                title="Home" 
                description="SohibDigi is your trusted digital partner for web design, branding, and app development. Unlimited requests, one flat fee." 
                keywords="web design, branding, app development, subscription design agency"
            />
            <Hero />
            <RecentWork />
            <Partners />
            <About />
            <WorkProcess />
            <Services />
            <Projects />
            {/* <Testimonials /> */}
            <Features />
            <Pricing />
            <FAQs />
            <BookNow />
        </main>
    );
}
