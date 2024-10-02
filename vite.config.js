import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [cssInjectedByJsPlugin()],
    css: {
        transformer: 'lightningcss',
    },
    build: {
        outDir: './dist/distance',
        minify: false,
        sourcemap: false,
        emptyOutDir: true,   

        lib: {
            entry: './modules/distance/index.js',
            name:'get_distance',
            formats: ['iife'],
            fileName: (format) => `[name].js`
        }
    }
})