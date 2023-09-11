import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: 'src/stories/index.ts',
      name: 'react-boat-comps',
      fileName: (format) => `react-components.${format}.js`
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variable names to use when importing the library
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
