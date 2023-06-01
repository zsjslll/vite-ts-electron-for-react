import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, //vite运行端口号
    cors: true, // 允许跨域
    hmr: true, // 开启热更新
  },
})
