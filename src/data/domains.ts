export interface TldPrice {
    ext: string;
    price: string;
    original: string;
    discount?: number;
    category: string;
    description: string;
    requirements: string;
}

export const INITIAL_TLD_PRICES: TldPrice[] = [
    // Global Utama (gTLD)
    {
        ext: '.com',
        price: 'Rp 149.900',
        original: 'Rp 209.900',
        discount: 29,
        category: "Global Utama (gTLD)",
        description: "Domain paling populer di dunia. Untuk tujuan Komersial/Umum.",
        requirements: "Tidak ada"
    },
    {
        ext: '.net',
        price: 'Rp 248.900',
        original: 'Rp 297.900',
        discount: 16,
        category: "Global Utama (gTLD)",
        description: "Pilihan kedua setelah .COM, sering untuk jaringan/teknologi.",
        requirements: "Tidak ada"
    },
    {
        ext: '.org',
        price: 'Rp 132.900',
        original: 'Rp 264.900',
        discount: 50,
        category: "Global Utama (gTLD)",
        description: "Untuk Organisasi, terutama nirlaba.",
        requirements: "Tidak ada"
    },
    // Global Lainnya
    {
        ext: '.info',
        price: 'Rp 49.900',
        original: 'Rp 480.900',
        discount: 90,
        category: "Global Lainnya",
        description: "Untuk situs berbasis Informasi.",
        requirements: "Tidak ada"
    },
    // ccTLD Indonesia
    {
        ext: '.id',
        price: 'Rp 210.900',
        original: 'Rp 252.900',
        discount: 17,
        category: "ccTLD Indonesia",
        description: "Domain resmi dan umum untuk Indonesia.",
        requirements: "Tidak ada"
    },
    {
        ext: '.my.id',
        price: 'Rp 16.900',
        original: 'Rp 27.900',
        discount: 39,
        category: "ccTLD Indonesia",
        description: "Untuk Penggunaan Pribadi (personal) atau Keluarga.",
        requirements: "Tidak ada"
    },
    {
        ext: '.co.id',
        price: 'Rp 299.900',
        original: 'Rp 299.900',
        category: "ccTLD Indonesia",
        description: "Untuk Perusahaan/Bisnis yang memiliki legalitas hukum di Indonesia.",
        requirements: "Memerlukan Dokumen Legalitas."
    },
    {
        ext: '.online',
        price: 'Rp 16.900',
        original: 'Rp 579.900',
        discount: 97,
        category: "New gTLD (Populer)",
        description: "Kehadiran digital tanpa batas; fleksibel untuk berbagai tujuan.",
        requirements: "Tidak ada"
    },
    {
        ext: '.tech',
        price: 'Rp 115.900',
        original: 'Rp 993.900',
        discount: 88,
        category: "New gTLD (Populer)",
        description: "Untuk situs yang berfokus pada Teknologi.",
        requirements: "Tidak ada"
    },
    {
        ext: '.store',
        price: 'Rp 16.900',
        original: 'Rp 861.900',
        discount: 98,
        category: "New gTLD (Populer)",
        description: "Jelas untuk Toko Online / E-Commerce.",
        requirements: "Tidak ada"
    },
    {
        ext: '.site',
        price: 'Rp 16.900',
        original: 'Rp 546.900',
        discount: 97,
        category: "New gTLD (Populer)",
        description: "Untuk situs yang berfokus pada Situs Web.",
        requirements: "Tidak ada"
    },
    {
        ext: '.blog',
        price: 'Rp 32.900',
        original: 'Rp 496.900',
        discount: 93,
        category: "New gTLD (Populer)",
        description: "Untuk situs yang berfokus pada Blog atau konten jurnal.",
        requirements: "Tidak ada"
    },
    {
        ext: '.xyz',
        price: 'Rp 32.900',
        original: 'Rp 231.900',
        discount: 86,
        category: "New gTLD (Populer)",
        description: "Domain untuk tujuan umum dan pribadi.",
        requirements: "Tidak ada"
    },
    {
        ext: '.pro',
        price: 'Rp 49.900',
        original: 'Rp 480.900',
        discount: 90,
        category: "New gTLD",
        description: "Untuk situs yang berfokus pada Profesional / Bisnis.",
        requirements: "Tidak ada"
    },
    {
        ext: '.cloud',
        price: 'Rp 32.900',
        original: 'Rp 430.900',
        discount: 92,
        category: "New gTLD",
        description: "Untuk situs yang berfokus pada Cloud Computing / Teknologi.",
        requirements: "Tidak ada"
    },
];
