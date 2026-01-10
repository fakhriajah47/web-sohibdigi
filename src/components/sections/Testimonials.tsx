import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback } from 'react';
import { testimonials } from '@/data/testimonials';

/**
 * Testimonials carousel section using Embla Carousel
 */
export function Testimonials() {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start' },
        [Autoplay({ delay: 2000, stopOnInteraction: false })]
    );

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className="lg:pt-25 pt-15">
            <div className="container">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] px-[15px]"
                            >
                                <div className="lg:px-10 lg:py-12.5 px-7.5 py-10 border border-primary rounded-2xl text-center h-full fadeInUp">
                                    <div className="text mb-7.5 lg:text-3xl lg:leading-10 text-2xl italic font-bricolage">
                                        {testimonial.quote}
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                            className="rounded-full w-15 h-15 mb-[5px]"
                                        />
                                        <h5 className="lg:text-2xl text-xl font-medium">
                                            {testimonial.author}
                                        </h5>
                                        <span className="lg:text-lg lg:leading-[22px] text-sm text-[rgb(119,119,125)]">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-center gap-1.5 fadeInUp text-center pt-10">
                    <button
                        onClick={scrollPrev}
                        className="w-10 h-10 bg-primary inline-flex justify-center items-center rounded-full text-white border border-primary hover:bg-transparent hover:text-black-100 transition-all duration-500"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                    <button
                        onClick={scrollNext}
                        className="w-10 h-10 bg-primary inline-flex justify-center items-center rounded-full text-white border border-primary hover:bg-transparent hover:text-black-100 transition-all duration-500"
                    >
                        <i className="ri-arrow-right-s-line"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
