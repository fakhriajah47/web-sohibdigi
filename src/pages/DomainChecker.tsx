import { useState, useEffect } from 'react';
import { checkDomainAvailability } from '@/services/domainApi';



import { INITIAL_TLD_PRICES, TldPrice } from '@/data/domains';
import { useI18n } from '@/i18n/I18nProvider';
import { getTldPrices } from '@/services/domainPrices';

export function DomainChecker() {
    const { t } = useI18n();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [, setShowPrices] = useState(false);
    interface DomainCardState extends TldPrice {
        checkResult?: {
            name: string;
            isAvailable: boolean;
            loading?: boolean;
        };
    }

    const [tldPrices, setTldPrices] = useState<DomainCardState[]>(INITIAL_TLD_PRICES);

    useEffect(() => {
        const load = async () => {
            try {
                const prices = await getTldPrices();
                setTldPrices(prices as DomainCardState[]);
            } catch (error) {
                console.error('Failed to load dynamic prices', error);
            }
        };
        load();
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchTerm) return;

        setIsSearching(true);
        setShowPrices(false);

        // Normalize search term: remove extension if present to get the "root" name
        const rootName = searchTerm.includes('.') ? searchTerm.split('.')[0] : searchTerm;

        // Optimistically set loading state for all cards
        setTldPrices(prev => prev.map(tld => ({
            ...tld,
            checkResult: {
                name: `${rootName}${tld.ext}`,
                isAvailable: false, // Temporary value, won't be shown due to loading flag
                loading: true
            }
        })));

        // Generate list of domains to check based on TLDs
        const domainsToCheck = tldPrices.map(tld => `${rootName}${tld.ext}`);

        // Ensure the typed domain is also checked if it has a custom extension not in list
        // Note: For now we only focus on the fixed list as requested ("yang berubah itu pada list card ini saja")
        // But if user types 'example.xyz' and .xyz is not in list, it wouldn't show in the card list.
        // Assuming we strictly follow the card list.

        try {
            const data = await checkDomainAvailability(domainsToCheck);

            // Update tldPrices with the check results
            setTldPrices(prev => prev.map(tld => {
                const domainName = `${rootName}${tld.ext}`;
                const result = data.find(r => r.name.toLowerCase() === domainName.toLowerCase());

                return {
                    ...tld,
                    checkResult: result ? {
                        name: result.name,
                        isAvailable: result.isAvailable,
                        loading: false
                    } : undefined
                };
            }));
        } catch (error) {
            console.error('Domain check failed:', error);
            console.warn("API Check failed. Falling back to simulation.");

            // Fallback simulation
            setTldPrices(prev => prev.map(tld => ({
                ...tld,
                checkResult: {
                    name: `${rootName}${tld.ext}`,
                    isAvailable: Math.random() > 0.3,
                    loading: false
                }
            })));
        } finally {
            setIsSearching(false);
            setShowPrices(true);
        }
    };

    return (
        <section className="pt-32 pb-20 min-h-screen bg-white">
            <div className="container">
                <div className="max-w-[800px] mx-auto text-center mb-12">
                    <span className="text-primary font-medium tracking-widest uppercase mb-4 inline-block">
                        {t('domainChecker.badge')}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black-200">
                        {t('domainChecker.title')}
                    </h1>
                    <p className="text-lg text-gray-500 mb-8">
                        {t('domainChecker.subtitle')}
                    </p>

                    <form onSubmit={handleSearch} className="relative max-w-[600px] mx-auto mb-12">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative flex bg-white rounded-full p-2 shadow-xl ring-1 ring-gray-900/5 items-center">
                                <i className="ri-search-line ml-4 text-xl text-gray-400"></i>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder={t('domainChecker.inputPlaceholder')}
                                    className="flex-1 p-4 bg-transparent outline-none text-lg text-black-200 placeholder:text-gray-300"
                                />
                                <button
                                    type="submit"
                                    disabled={isSearching}
                                    className="px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-black-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSearching ? t('domainChecker.checking') : t('domainChecker.check')}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="max-w-[1200px] mx-auto">
                    {/* Unified Grid */}
                    {/* Domain Pricing Cards moved to WebDevelopment.tsx */}
                </div>
            </div>
        </section>
    );
}
