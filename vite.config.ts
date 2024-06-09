import { defineConfig } from 'vite'
import globAccept from 'vite-plugin-glob-accept'

export default defineConfig({
  plugins: [
    globAccept()
  ]
})
