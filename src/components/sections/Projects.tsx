import { useState } from 'react';
import { SectionHeader, Button } from '@/components/ui';
import { projects } from '@/data/projects';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Projects gallery section with lightbox functionality
 */
export function Projects() {
    const { t } = useI18n();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slides = projects.map((project) => ({
        src: project.image,
        alt: project.title,
    }));

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    return (
        <div className="lg:pt-25 pt-15" id="projects">
            <div className="container">
                <SectionHeader
                    badge={t('projects.header.badge')}
                    title={t('projects.header.title')}
                    subtitle={t('projects.header.subtitle')}
                />

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div key={project.id}>
                            <button
                                className="work-popup w-full text-left"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="rounded-lg overflow-hidden relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[linear-gradient(0deg,_rgba(0,0,0,.3),_transparent)] after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-500 group">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="group-hover:blur-[1.5px] group-hover:scale-[1.04] transition-all duration-500 w-full"
                                    />
                                    <span className="absolute top-4 right-4 inline-block rounded-[32px] bg-[rgba(255,79,1,.5)] py-[7px] px-[14px] text-white text-sm uppercase tracking-wider leading-[30px] font-medium">
                                        {project.category}
                                    </span>
                                    <div className="z-20 absolute left-7.5 -bottom-0 opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all duration-500">
                                        <h1 className="lg:text-3xl text-[26px] font-semibold text-white">
                                            {project.title}
                                        </h1>
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-7.5 text-center">
                    <Button href="#">{t('common.viewAllWorks')}</Button>
                </div>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={slides}
            />
        </div>
    );
}
