export interface HostingerPrice {
    id: string;
    name: string;
    currency: string;
    price: number;
    first_period_price: number;
    period: number;
    period_unit: string;
}

export interface HostingerCatalogItem {
    id: string;
    name: string;
    category: string;
    metadata: any;
    prices: HostingerPrice[];
}

const HOSTINGER_API_KEY = 'RJZqLD3zEzpr0sCvDx2hxVKNH4MvdYNJ0ntyb2D59e1b4e78';
const HOSTINGER_API_URL = '/api/hostinger'; // Uses Vite proxy

/**
 * Fetches catalog data from Hostinger API
 * @param category - The category to filter by (e.g., 'VPS')
 * @param namePattern - Optional pattern to filter by name (e.g., '.COM*')
 * @returns Promise<any>
 */
export async function fetchCatalog(category: string, namePattern?: string): Promise<HostingerCatalogItem[]> {
    try {
        const queryParams = new URLSearchParams({
            category: category,
        });

        if (namePattern) {
            queryParams.append('name', namePattern);
        }

        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${HOSTINGER_API_KEY}`,
                'Content-Type': 'application/json'
            }
        };

        const response = await fetch(`${HOSTINGER_API_URL}/billing/v1/catalog?${queryParams.toString()}`, requestOptions);

        if (!response.ok) {
            throw new Error(`Hostinger API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Hostinger catalog:', error);
        throw error;
    }
}


// fetch('https://developers.hostinger.com/api/domains/v1/whois/564651/usage', {
//   headers: {
//     Authorization: 'Bearer RJZqLD3zEzpr0sCvDx2hxVKNH4MvdYNJ0ntyb2D59e1b4e78'
//   }
// })