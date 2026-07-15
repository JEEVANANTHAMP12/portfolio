import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    middlewareMode: false,
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      }
    },
        rollupOptions: {
            output: {
                manualChunks: {
                  'vendor-react': ['react', 'react-dom'],
                  'vendor-framer': ['framer-motion'],
                },
              },
    },
    sourcemap: false,
    target: 'es2020',
    minifyInternalizedModules: true,
    modulePreload: false,
    chunkSizeWarningLimit: 700,
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: [],
  },
  esbuild: {
    legalComments: 'none',
  },
});
