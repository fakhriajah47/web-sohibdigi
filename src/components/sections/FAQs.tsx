import { useState } from 'react';
import { SectionHeader, Button } from '@/components/ui';
import { faqIds } from '@/data/faqs';
import { contact, brand } from '@/constants';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * FAQs section with accordion functionality
 */
export function FAQs() {
    const [openId, setOpenId] = useState<number | null>(null);
    const { t } = useI18n();

    const toggleAccordion = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faqs" className="lg:pt-25 pt-15">
            <div className="container">
                <SectionHeader
                    badge={t('faqs.header.badge')}
                    title={t('faqs.header.title')}
                    subtitle={t('faqs.header.subtitle')}
                />

                <div className="grid lg:grid-cols-[33.33%_auto] md:grid-cols-2 grid-cols-1 gap-6">
                    {/* CTA Card */}
                    <div className="p-12.5 rounded-[15px] bg-black-200 text-center">
                        <img
                            src={brand.founderImage}
                            alt="founder"
                            title="founder"
                            className="max-w-[140px] max-h-[140px] mx-auto"
                        />
                        <h2 className="text-white lg:text-[40px] text-3xl lg:leading-[1.2] py-3">
                            {t('faqs.ctaTitle')}
                        </h2>
                        <Button
                            href={`https://wa.me/${contact.waNumber}?text=${encodeURIComponent('mau jadwalkan call')}`}
                        >
                            {t('faqs.ctaButton')} <i className="ri-whatsapp-line ml-2"></i>
                        </Button>
                        <p className="text-white mt-4">
                            {t('faqs.ctaEmailPrefix')}{' '}
                            <a href={`mailto:${contact.email}`} className="text-primary">
                                {contact.email}
                            </a>
                        </p>
                    </div>

                    {/* Accordion */}
                    <div className="flex flex-col gap-[15px] lg:pl-7.5">
                        {faqIds.map((id) => (
                            <div key={id} className="accordion-item">
                                <h2
                                    onClick={() => toggleAccordion(id)}
                                    className="accordion-header flex justify-between items-center lg:text-[22px] text-lg rounded-[10px] border border-[#ccc] py-4 px-5 font-medium cursor-pointer"
                                >
                                    {t(`faqs.items.${id}.question`)}
                                    <span
                                        className={`inline-block w-[11px] h-[11px] rounded-full shrink-0 transition-colors duration-300 ${openId === id ? 'bg-primary' : 'bg-secondary'
                                            }`}
                                    ></span>
                                </h2>
                                <div
                                    className={`accordion-body px-5 transition-all duration-500 ${openId === id
                                            ? 'max-h-25 overflow-auto py-4 opacity-100 visible'
                                            : 'max-h-0 overflow-hidden py-0 opacity-0 invisible'
                                        }`}
                                >
                                    <p className="mb-4">{t(`faqs.items.${id}.answer`)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
