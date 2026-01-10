import { companyLogos } from '@/data/workProcess';
import { useMemo } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}


/**
 * Partner logos with infinite scroll animation
 */
export function Partners() {
    // Randomize logos once on mount
    const shuffledLogos = useMemo(() => shuffleArray(companyLogos), []);
    const { t } = useI18n();

    return (
        <div className="lg:pt-25 pt-15">
            <div className="container">
                <h2 className="uppercase text-base text-center tracking-[5px] mb-7.5 font-medium">
                   {t('partners.title')}
                </h2>
                <div className="company-list">
                    <div className="logo-slider overflow-hidden">
                        <div className="logos-slide">
                            {shuffledLogos.map((logo, index) => (
                                <img key={index} src={logo} alt={`company logo ${index + 1}`} />
                            ))}
                        </div>
                        {/* Duplicate for infinite scroll effect */}
                        <div className="logos-slide">
                            {shuffledLogos.map((logo, index) => (
                                <img
                                    key={`dup-${index}`}
                                    src={logo}
                                    alt={`company logo ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
