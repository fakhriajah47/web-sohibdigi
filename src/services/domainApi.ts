export interface DomainCheckResult {
    name: string;
    isAvailable: boolean;
    price?: string;
    original?: string;
    discount?: number;
    error?: string;
}

const WHOIS_API_KEY = 'c6bf67ea72154a91bc3cb34f53f8ab48';
const WHOIS_API_URL = '/api/whois';

/**
 * Checks domain availability using WhoisFreaks API
 * @param domains - The list of domain names to check
 * @returns Promise<DomainCheckResult[]>
 */
export async function checkDomainAvailability(domains: string[]): Promise<DomainCheckResult[]> {
    try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "domainNames": domains
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow' as RequestRedirect
        };

        const response = await fetch(`${WHOIS_API_URL}?apiKey=${WHOIS_API_KEY}`, requestOptions);
        const data = await response.json();

        // Check if we got a valid response list
        if (data.bulk_whois_response && Array.isArray(data.bulk_whois_response)) {
            // Create a map for quick lookup of API results
            const apiResults = new Map(data.bulk_whois_response.map((info: any) => [info.domain_name.toLowerCase(), info]));

            // Map original requested domains to results (preserving order and handling missing data)
            return domains.map(domain => {
                const info: any = apiResults.get(domain.toLowerCase());

                // If we have info, check registration status. If not found in API response, assume available (or error, but for checker we often assume available if not found)
                const isTaken = info ? info.domain_registered === "yes" : false;

                return {
                    name: domain,
                    isAvailable: !isTaken,
                    price: !isTaken ? 'Rp 165.000' : undefined // This price will be overridden by the frontend matching logic
                };
            });
        } else {
            // Fallback if structure is unexpected, return all as available (or handle error)
            return domains.map(domain => ({
                name: domain,
                isAvailable: true,
                price: 'Rp 165.000'
            }));
        }
    } catch (error) {
        console.error('Error checking domain:', error);
        throw error;
    }
}
