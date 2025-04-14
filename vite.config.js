import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // GitHub 레포지토리 이름으로 설정
  plugins: [react()],
})
