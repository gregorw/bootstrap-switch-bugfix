import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/bootstrap-switch/",
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        bugfix_square: resolve(__dirname, 'bugfix-square.html'),
        default: resolve(__dirname, 'default.html'),
        index: resolve(__dirname, 'index.html'),
        not_round: resolve(__dirname, 'not-round.html'),
        rectangular: resolve(__dirname, 'rectangular.html'),
        round: resolve(__dirname, 'round.html'),
      },
    },
  },
})
