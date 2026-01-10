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
} from '@/components/sections';

export function Home() {
    return (
        <main>
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
