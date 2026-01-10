import { Button } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { contact } from '@/constants';

/**
 * Hero section with main headline, CTA buttons, and decorative shapes
 */
export function Hero() {
    const { t } = useI18n();
    return (
        <section id="home" className="lg:pt-[200px] pt-[120px]">
            <div className="container">
                <div className="md:w-[70%] mx-auto text-center relative">
                    <h3
                        className="border border-[#bebebe] py-2.5 px-5 rounded-3xl md:text-base md:leading-5 text-sm inline-block font-normal mb-[5px] fadeInUp"
                        data-delay="0.1"
                    >
                        <i className="ri-refresh-line"></i> {t('hero.badge')}
                    </h3>
                    <h2
                        className="lg:py-2.5 py-5 font-semibold xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] fadeInUp"
                        data-delay="0.2"
                    >
                        {t('hero.title')}
                    </h2>
                    <p
                        className="text-xl leading-7 mb-[5px] px-15 text-black-100 fadeInUp"
                        data-delay="0.3"
                    >
                        {t('hero.subtitle')}
                    </p>
                    <div className="mt-7.5 fadeInUp" data-delay="0.4">
                        <Button href="#services" variant="primary">
                            {t('hero.ctaPricing')}
                        </Button>
                        <Button
                            href={`https://wa.me/${contact.waNumber}?text=${encodeURIComponent('mau booking sekarang')}`}
                            variant="secondary"
                            className="ml-2"
                        >
                            {t('hero.ctaCall')}
                        </Button>
                    </div>

                    {/* Decorative shapes */}
                    <div className="hidden md:block absolute lg:right-[-25%] top-1/2 right-0 fadeInUp" data-delay="0.6">
                        <img
                            src="/images/shapes/shape11.png"
                            alt="Shape"
                            className="lg:max-w-[250px] max-w-[50px]"
                        />
                    </div>
                    <div className="hidden md:block absolute lg:-left-[30%] top-[10%] left-0 fadeInUp" data-delay="0.7">
                        <img
                            src="/images/shapes/shape.png"
                            alt="Shape"
                            className="lg:max-w-[200px] max-w-15"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
