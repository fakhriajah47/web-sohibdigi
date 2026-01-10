import { useState, useEffect } from 'react';

const CACHE_KEY = 'currency_rate_idr_usd';
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

export function useCurrency() {
    const [rate, setRate] = useState<number>(0.000065); // Default fallback roughly 1/15400
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRate = async () => {
            // Check cache
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                const { value, timestamp } = JSON.parse(cached);
                if (Date.now() - timestamp < CACHE_DURATION) {
                    setRate(value);
                    setLoading(false);
                    return;
                }
            }

            try {
                const res = await fetch('https://api.frankfurter.app/latest?from=IDR&to=USD');
                const data = await res.json();
                if (data.rates.USD) {
                    setRate(data.rates.USD);
                    localStorage.setItem(CACHE_KEY, JSON.stringify({
                        value: data.rates.USD,
                        timestamp: Date.now()
                    }));
                }
            } catch (error) {
                console.error('Failed to fetch currency rate:', error);
                // Keep default or fallback
            } finally {
                setLoading(false);
            }
        };

        fetchRate();
    }, []);

    const convert = (idr: number) => {
        return idr * rate;
    };

    const formatUsd = (idr: number) => {
        const usd = convert(idr);
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(usd);
    };

    return { rate, loading, convert, formatUsd };
}
