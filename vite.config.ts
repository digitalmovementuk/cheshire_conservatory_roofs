import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE = '/cheshire_conservatory_roofs/'

// https://vite.dev/config/
export default defineConfig({
  base: BASE,
  plugins: [
    react(),
    {
      name: 'react-refresh-preamble-fallback',
      apply: 'serve',
      transformIndexHtml() {
        return [
          {
            tag: 'script',
            attrs: { type: 'module' },
            children: `
import RefreshRuntime from "${BASE}@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
            `.trim(),
            injectTo: 'head-prepend',
          },
        ]
      },
    },
  ],
})
