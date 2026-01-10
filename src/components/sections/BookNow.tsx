import { Button } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Book now CTA section
 */
export function BookNow() {
    const { t } = useI18n();
    return (
        <section id="book" className="lg:pt-25 pt-15">
            <div className="container">
                <div
                    className="lg:w-[75%] mx-auto text-center lg:px-12.5 py-7.5 px-8 border border-[rgba(0,0,0,0.05)] rounded-[20px] fadeInUp"
                    data-delay="0.2"
                >
                    <h2 className="xl:leading-[90px] xl:text-[80px] md:leading-[60px] md:text-[50px] leading-[50px] text-[40px] text-black-100 font-normal">
                        {t('bookNow.title')}
                    </h2>
                    <p className="md:text-xl md:leading-7 text-base mt-2">
                        {t('bookNow.subtitle')}
                    </p>
                    <div className="mt-7.5 mb-7.5">
                        <Button href="#">{t('bookNow.button')}</Button>
                    </div>
                    <a href="#" className="inline-block mt-4">
                        <img
                            src="/images/logos/logo.png"
                            alt="Logo"
                            title="Logo"
                            className="max-w-[200px] mx-auto"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
