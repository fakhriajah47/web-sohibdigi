/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            screens: {
                '2xl': '1320px',
                lg: '1024px',
                md: "768px",
                sm: "640px"
            },
            padding: "12px"
        },
        extend: {
            fontFamily: {
                "bricolage": "var(--bricolage)"
            },
            colors: {
                "black-100": "var(--black-100)",
                "black-200": "var(--black-200)",
                "black-300": "var(--black-300)",
                primary: "var(--primary-color)",
                secondary: "var(--secondary-color)",
                background: "var(--background)",
            },
            spacing: {
                '7.5': "30px",
                '12.5': "50px",
                '15': "60px",
                '25': "100px",
            }
        },
    },
    plugins: [],
}
