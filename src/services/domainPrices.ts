import { fetchCatalog, HostingerCatalogItem } from '@/services/hostingerApi';
import { INITIAL_TLD_PRICES, TldPrice } from '@/data/domains';

export async function getTldPrices(): Promise<TldPrice[]> {
    const data = await fetchCatalog('DOMAIN');
    const updatedPrices = INITIAL_TLD_PRICES.map(tld => {
        const match = data.find((item: HostingerCatalogItem) =>
            item.name.toLowerCase() === `${tld.ext.toLowerCase()} domain` ||
            item.name.toLowerCase() === tld.ext.toLowerCase()
        );

        if (match && match.prices && match.prices.length > 0) {
            const oneYearPrice = match.prices.find((p: any) => p.period === 1 && p.period_unit === 'year');
            if (oneYearPrice) {
                const finalPrice = (oneYearPrice.first_period_price || oneYearPrice.price) / 100;
                const originalPrice = oneYearPrice.price / 100;
                const discount = Math.round(((originalPrice - finalPrice) / originalPrice) * 100);

                return {
                    ...tld,
                    price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(finalPrice),
                    original: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(originalPrice),
                    discount: discount > 0 ? discount : undefined
                };
            }
        }
        return tld;
    });
    return updatedPrices;
}
