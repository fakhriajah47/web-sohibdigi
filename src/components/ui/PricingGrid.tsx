import { useState } from 'react';
import { Button } from './Button';
import { useI18n } from '@/i18n/I18nProvider';
import { contact } from '@/constants';
import { useCurrency } from '@/hooks/useCurrency';

interface PricingItem {
    id: number;
    highlighted: boolean;
    priceIdr?: number;
}

interface PricingGridProps {
    items: PricingItem[];
    /** Translation key prefix: 'pricing.members' or 'pricing.tiers' */
    translationPrefix?: string;
    ctaIconClass?: string;
    ctaHref?: string;
    className?: string;
}

interface PricingCardProps {
    tier: PricingItem;
    index: number;
    translationPrefix: string;
    ctaIconClass?: string;
    ctaHref?: string;
}

function PricingCard({
    tier,
    index,
    translationPrefix,
    ctaIconClass,
    ctaHref,
}: PricingCardProps) {
    const { t, tArray, lang } = useI18n();
    const { formatUsd } = useCurrency();
    const [isOpen, setIsOpen] = useState(false);
    const features = tArray(`${translationPrefix}.${tier.id}.features`);
    const planName = t(`${translationPrefix}.${tier.id}.name`);
    const waMessage = encodeURIComponent(`mau pesan paket ${planName}`);
    const waLink = `https://wa.me/${contact.waNumber}?text=${waMessage}`;
    const finalHref = ctaHref && ctaHref !== '#' ? ctaHref : waLink;
    const iconClass = ctaIconClass ?? 'ri-whatsapp-line';

    const getPrice = () => {
        // If English and we have a valid IDR price, convert to USD
        if (lang === 'en' && tier.priceIdr !== undefined && tier.priceIdr > 0) {
            const price = formatUsd(tier.priceIdr);
            // Append /mo only for membership tiers
            if (translationPrefix.includes('members')) {
                return `${price} /mo`;
            }
            return price;
        }
        // Fallback to translation (which contains unit if applicable)
        return t(`${translationPrefix}.${tier.id}.price`);
    };

    return (
        <div
            className={`pricing-item relative p-4 rounded-xl flex flex-col h-full transition-all duration-300 ${tier.highlighted 
                ? 'border-2 border-primary shadow-2xl scale-105 z-10 bg-white' 
                : 'border border-primary/20 hover:border-primary/60 shadow-sm hover:shadow-md bg-white/50'
            }`}
            data-delay={index === 0 ? '0.2' : index === 1 ? '0.4' : '0.6'}
        >
            {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 whitespace-nowrap z-20">
                    <i className="ri-star-fill text-yellow-300"></i>
                    BEST SELLER
                </div>
            )}
            
            <div 
                className="pricing-header p-6 border-b border-b-primary/10 cursor-pointer group hover:bg-gray-50 dark:hover:bg-gray-800/5 transition-colors rounded-t-lg"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex justify-between items-start mb-4">
                    <h4
                        className={`title px-5 py-2.5 rounded-[20px] font-medium leading-[19px] inline-block ${tier.highlighted ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'
                            }`}
                    >
                        {t(`${translationPrefix}.${tier.id}.name`)}
                    </h4>
                </div>
                
                <p className="price text-[30px] font-medium font-bricolage text-primary mt-2">
                    {getPrice()}
                </p>
                <p className="save-percent text-lg leading-7 mb-5 mt-1 text-gray-600">
                    {t(`${translationPrefix}.${tier.id}.description`)}
                </p>
                <p className="text-sm leading-6 text-gray-500 italic">
                    <i className="ri-double-quotes-l text-primary mr-1"></i>
                    {t(`${translationPrefix}.${tier.id}.suitable`)}
                </p>
                
                <div className="flex items-center justify-center mt-4 text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium mr-2">{isOpen ? 'Sembunyikan Fitur' : 'Lihat Fitur'}</span>
                    <i className={`ri-arrow-${isOpen ? 'up' : 'down'}-s-line text-xl transition-transform duration-300`} />
                </div>
            </div>

            <div className="pricing-details p-6 flex-grow flex flex-col">
                <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[1000px] opacity-100 mb-6' : 'max-h-0 opacity-0 mb-0'
                    }`}
                >
                    <ul className="flex flex-col gap-3">
                        {features.map((feature: string, featureIndex: number) => (
                            <li key={featureIndex} className="text-[rgb(119,119,125)] text-lg">
                                <i className="ri-arrow-right-line mr-2.5" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div className="mt-auto">
                    <Button href={finalHref} variant={tier.highlighted ? 'primary' : 'secondary'} className="w-full flex items-center justify-center text-center gap-2">
                        {t('pricing.button')}
                        <i className={`${iconClass} ml-2`} />
                    </Button>
                </div>
            </div>
        </div>
    );
}

/**
 * Reusable pricing grid component that gets text from i18n translations
 */
export function PricingGrid({
    items,
    translationPrefix = 'pricing.members',
    ctaIconClass,
    ctaHref,
    className = '',
}: PricingGridProps) {
    return (
        <div className={`grid md:grid-cols-3 justify-center gap-8 max-w8-xl mx-auto ${className}`}>
            {items.map((tier, index) => (
                <PricingCard
                    key={tier.id}
                    tier={tier}
                    index={index}
                    translationPrefix={translationPrefix}
                    ctaIconClass={ctaIconClass}
                    ctaHref={ctaHref}
                />
            ))}
        </div>
    );
}
