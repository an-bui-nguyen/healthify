import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    proxy: {
                '/api': { // This is the path prefix in your frontend requests (e.g., fetch('/api/data'))
            target: 'https://odphp.health.gov/myhealthfinder/api/v4/', // The URL of the third-party API
            changeOrigin: true, // Recommended for cross-origin requests
            rewrite: (path) => path.replace(/^\/api/, ''), // Optional: remove the path prefix when forwarding
            secure: true, // Set to true if your target API uses HTTPS with a valid certificate
          },
      },
    },
  },
)

