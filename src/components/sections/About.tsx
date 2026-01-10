/**
 * About section with founder testimonial quote
 */
import { useI18n } from '@/i18n/I18nProvider';
export function About() {
    const { t } = useI18n();
    return (
        <section className="lg:pt-25 pt-15">
            <div className="container">
                <div
                    className="lg:w-[80%] w-full text-center mx-auto bg-black-200 lg:py-[70px] lg:px-20 py-10 px-10 lg:rounded-[40px] rounded-[30px] fadeInUp"
                    data-delay="0.2"
                >
                    <h3 className="md:text-3xl md:leading-[48px] text-2xl leading-9 text-white">
                        {t('about.quote')}
                    </h3>
                    <div className="pt-12.5 flex flex-col items-center">
                        <img
                            src="/images/about/founder.png" // Ganti sesuai image-mu
                            alt="Happy Client"
                            title="Happy Client"
                            className="w-20 h-20 rounded-full"
                        />
                        <h2 className="pt-2.5 lg:text-3xl text-2xl text-white">
                            {t('about.author')}
                        </h2>
                        <p className="text-white">{t('about.role')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
