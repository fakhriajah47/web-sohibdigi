import { SectionHeader } from '@/components/ui';
import { features } from '@/data/features';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Features/membership benefits section with card grid
 */
export function Features() {
    const { t } = useI18n();

    return (
        <section id="features" className="lg:pt-25 pt-15">
            <div className="container">
                <SectionHeader
                    badge={t('features.header.badge')}
                    title={t('features.header.title')}
                    subtitle={t('features.header.subtitle')}
                />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-7.5">
                    {features.map((feature, index) => {
                        const delay = (0.1 + index * 0.1).toFixed(1);

                        return (
                            <div
                                key={feature.id}
                                className="text-center py-15 px-7.5 rounded-[15px] border border-[#bebebe] hover:border-primary transition-all duration-500 fadeInUp"
                                data-delay={delay}
                            >
                                <div>
                                    <i className={`${feature.icon} text-[50px] text-primary`}></i>
                                    <h4 className="lg:text-3xl lg:leading-[49px] text-[26px] font-medium my-3">
                                        {t(`features.items.${feature.id}.title`)}
                                    </h4>
                                    <p className="lg:text-lg text-base font-medium">
                                        {t(`features.items.${feature.id}.description`)}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
