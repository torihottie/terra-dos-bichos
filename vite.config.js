import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        cadastro: fileURLToPath(new URL('./cadastro.html', import.meta.url)),
        projetos: fileURLToPath(new URL('./projetos.html', import.meta.url)),
      }
    }
  }
})