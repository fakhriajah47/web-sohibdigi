import { SectionHeader, PricingGrid } from '@/components/ui';
import { useI18n } from '@/i18n/I18nProvider';
import { pricingMembers } from '@/data/pricing';

/**
 * Pricing section with membership tier cards
 */
export function Pricing() {
    const { t } = useI18n();

    return (
        <section id="pricing" className="lg:pt-25 pt-15">
            <div className="container">
                <div className="w-full mx-auto">
                    <SectionHeader
                        badge={t('pricing.badge')}
                        title={t('pricing.titleMembership')}
                    />

                    <div className="flex flex-col items-center justify-center -mt-10 mb-12 gap-6">
                        <div className="bg-primary/5 border border-primary/20 rounded-full px-6 py-2 flex items-center gap-2 animate-bounce-slow">
                            <i className="ri-error-warning-fill text-primary text-xl"></i>
                            <span className="text-gray-700 font-medium md:text-lg text-sm">
                                {t('pricing.campaign')}
                            </span>
                        </div>
                        
                        <p className="md:text-xl md:leading-7 text-base text-center max-w-2xl mx-auto text-gray-600">
                            {t('pricing.subtitleMembers')}
                        </p>
                    </div>

                    <PricingGrid
                        items={pricingMembers}
                        ctaIconClass="ri-whatsapp-line"
                    />
                </div>
            </div>
        </section>
    );
}
