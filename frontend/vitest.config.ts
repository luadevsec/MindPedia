import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Garante que o Vitest use o jsdom
  },
});
