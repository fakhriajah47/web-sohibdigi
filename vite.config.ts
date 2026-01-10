import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api/whois': {
                target: 'https://api.whoisfreaks.com/v1.0/bulkwhois',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/whois/, ''),
            },
            '/api/hostinger': {
                target: 'https://developers.hostinger.com/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/hostinger/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
            '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
    },
})

