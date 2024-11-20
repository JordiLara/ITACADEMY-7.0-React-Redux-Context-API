import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: { // Configuración específica para Vitest
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
  },
});
