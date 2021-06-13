import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'Oliver'
    }
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@modules': path.resolve(__dirname, 'src/modules'),
      '@src': path.resolve(__dirname, 'src')
    }
  }
})
