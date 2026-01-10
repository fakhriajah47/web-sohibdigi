/**
 * Membership pricing data - only ID and highlight status
 * All text content (name, price, description, features) comes from i18n translations
 */
export const pricingMembers = [
    { id: 1, priceIdr: 250000, highlighted: false },
    { id: 2, priceIdr: 500000, highlighted: true },  // Best seller - highlighted
    { id: 3, priceIdr: 2000000, highlighted: false },
];

/**
 * One-time project pricing data - only ID and highlight status
 * All text content comes from i18n translations
 */
export const pricingTiers = [
    { id: 1, priceIdr: 100000, highlighted: false }, // KERE
    { id: 2, priceIdr: 1600000, highlighted: true }, // Recommended - BPJS
    { id: 3, priceIdr: 2500000, highlighted: false }, // PDKT
    { id: 4, priceIdr: 15000000, highlighted: false }, // STRESS
    { id: 5, priceIdr: 0, highlighted: false }, // Custom
];
