import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    base: '/antool/',
    publicPath: process.env.NODE_ENV === 'production' ? '/antool/' : '/',
    plugins: [vue({})],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
