import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/api': {
                target: 'https://quilll-api.vercel.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react'],
                    'react-dom': ['react-dom'],
                    'react-router-dom': ['react-router-dom'],
                    axios: ['axios']
                }
            }
        }
    }
});
