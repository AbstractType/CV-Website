import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// `base` is only applied to production builds. The dev server stays at '/'
// so localhost preview tools don't have to know about the GH Pages subpath.
// If the repo is renamed or a custom domain is added, update the build base.
export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'build' ? '/CV-Website/' : '/',
}));
