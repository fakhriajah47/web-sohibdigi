import { Link } from 'react-router-dom';
import { SectionHeader } from '@/components/ui';
import { services } from '@/data/services';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Services section with service cards grid
 */
export function Services() {
    const { t } = useI18n();

    return (
        <section id="services" className="lg:pt-25 pt-15">
            <div className="container">
                <SectionHeader
                    badge={t('services.header.badge')}
                    title={t('services.header.title')}
                    subtitle={t('services.header.subtitle')}
                />

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                    {services.map((service, index) => {
                        const delay = (0.2 + index * 0.2).toFixed(1);

                        const CardContent = (
                            <div
                                className="info-item border border-[#bebebe] pt-7.5 pl-7.5 rounded-[15px] fadeInUp h-full transition-all duration-300 hover:shadow-lg hover:border-black-200 cursor-pointer"
                                data-delay={delay}
                            >
                                <div className="mb-10 pr-7.5">
                                    <h4 className="lg:text-3xl text-[26px] lg:leading-[49px] font-medium mb-2">
                                        {t(`services.items.${service.id}.title`)}
                                    </h4>
                                    <p className="lg:text-lg text-base font-medium lg:leading-7">
                                        {t(`services.items.${service.id}.description`)}
                                    </p>
                                </div>
                                <img
                                    src={service.image}
                                    alt={t(`services.items.${service.id}.title`)}
                                    className="rounded-br-[15px]"
                                />
                            </div>
                        );

                        return (
                            <div key={service.id} className="col-lg-4 col-md-6">
                                {service.link ? (
                                    <Link to={service.link} className="block h-full">
                                        {CardContent}
                                    </Link>
                                ) : (
                                    CardContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
