import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { imagetools } from 'vite-imagetools'
import { compression } from 'vite-plugin-compression2'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    tailwindcss(),
    // `?w=400;800;1200&format=avif;webp;jpg&as=picture` style imports; rendered by components/Picture.jsx.
    imagetools(),
    // Pre-compressed brotli + gzip copies of every JS/CSS/JSON/SVG asset (client build only). HTML is compressed by
    // scripts/prerender.mjs instead, because the pages only reach their final form after pre-rendering.
    !isSsrBuild && compression({ algorithms: ['brotliCompress', 'gzip'], exclude: [/\.(br|gz)$/, /\.html$/], threshold: 1024 }),
  ].filter(Boolean),
  build: {
    chunkSizeWarningLimit: 700,
    rolldownOptions: {
      output: {
        // React + router in one long-cached vendor chunk, kept out of the app code.
        ...(isSsrBuild
          ? {}
          : {
              advancedChunks: {
                groups: [{ name: 'vendor', test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler|react-helmet-async)[\\/]/ }],
              },
            }),
      },
    },
  },
  ssr: {
    // Bundle everything so the prerender script needs no module resolution of its own.
    noExternal: true,
  },
}))
