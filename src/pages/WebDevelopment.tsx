import { SectionHeader } from '@/components/ui';
import { pricingTiers } from '@/data/pricing';
import { useState, useEffect } from 'react';
import { INITIAL_TLD_PRICES, TldPrice } from '@/data/domains';
import { useI18n } from '@/i18n/I18nProvider';
import { getTldPrices } from '@/services/domainPrices';
import { PricingGrid } from '@/components/ui';

export function WebDevelopment() {
    const { t } = useI18n();
    const [tldPrices, setTldPrices] = useState<TldPrice[]>(INITIAL_TLD_PRICES);

    useEffect(() => {
        const load = async () => {
            try {
                const prices = await getTldPrices();
                setTldPrices(prices);
            } catch (error) {
                console.error('Failed to load dynamic prices', error);
            }
        };
        load();
    }, []);

    return (
        <section className="pt-32 pb-20 min-h-screen bg-gray-50">

            {/* Pricing Section */}
            <div className="container mt-5">
                <div className=" w-full mx-auto">
                    <SectionHeader
                        badge={t('webdev.badgePricing')}
                        title={t('webdev.title')}
                        subtitle={t('webdev.subtitle')}
                    />

                    <PricingGrid
                        items={pricingTiers.slice(0, 5)}
                        translationPrefix="pricing.tiers"
                        ctaIconClass="ri-whatsapp-line"
                    />
                </div>
            </div>




            {/* Domain Pricing Section */}
            <div className="container mt-20">
                <div className="w-full mx-auto">
                    <SectionHeader
                        badge="Domains"
                        title={t('webdev.domainPricingTitle')}
                        subtitle={t('webdev.domainPricingSubtitle')}
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {tldPrices.map((tld, index) => {
                            return (
                                <div
                                    key={tld.ext}
                                    className="bg-white py-3 px-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group relative overflow-visible"
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="text-xl font-bold transition-colors flex items-center gap-2 break-all pr-2 text-black-200 group-hover:text-primary">
                                            {tld.ext}

                                            <div className="group/info relative inline-flex">
                                                <i className="ri-information-fill text-gray-300 hover:text-primary text-base cursor-help transition-colors"></i>
                                                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 bg-gray-900/95 backdrop-blur-sm text-white text-xs leading-relaxed p-4 rounded-xl opacity-0 invisible group-hover/info:opacity-100 group-hover/info:visible transition-all duration-300 z-50 shadow-xl after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-900/95 text-left border border-gray-700/50">
                                                    <div className="mb-2">
                                                        <span className="text-primary font-bold block mb-0.5 text-[10px] uppercase tracking-wider">Keterangan</span>
                                                        {tld.description}
                                                    </div>
                                                    <div>
                                                        <span className="text-red-400 font-bold block mb-0.5 text-[10px] uppercase tracking-wider">Persyaratan</span>
                                                        {tld.requirements}
                                                    </div>
                                                </div>
                                            </div>
                                        </h4>

                                        {tld.discount ? (
                                            <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">{t('common.save')} {tld.discount}%</span>
                                        ) : (
                                            index < 3 && <span className="bg-cyan-100 text-cyan-600 text-xs font-bold px-2 py-1 rounded-md">{t('common.hot')}</span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-xl font-bold text-black-200">
                                                {tld.price}
                                            </span>
                                            <span className="text-sm text-gray-400 line-through">{tld.original}</span>
                                        </div>

                                        <div className="flex items-center gap-1.5 group/tooltip relative w-fit">
                                            <span className="text-xs text-gray-500 font-medium">{t('common.perFirstYear')}</span>
                                            <i className="ri-question-line text-gray-400 hover:text-primary cursor-help text-xs"></i>

                                            {/* Link Tooltip */}
                                            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-primary text-white text-[10px] leading-tight p-3 rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-50 text-center shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-primary">
                                                {t('domainChecker.firstYearNote')}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </section>
    );
}
