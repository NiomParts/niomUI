import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
      '@components': path.resolve(dirname, './src/components'),
      '@atoms': path.resolve(dirname, './src/components/atoms'),
      '@molecules': path.resolve(dirname, './src/components/molecules'),
      '@organisms': path.resolve(dirname, './src/components/organisms'),
      '@hooks': path.resolve(dirname, './src/hooks'),
      '@utils': path.resolve(dirname, './src/utils'),
      '@media': path.resolve(dirname, './src/media'),
      '@type': path.resolve(dirname, './src/type'),
    },
  },
  test: {
    setupFiles: ['./src/setupTests.ts'],
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['src/**/*.test.{ts,tsx}'],
          environment: 'jsdom',
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          deps: {
            optimizer: {
              client: {
                include: ['@testing-library/react'],
              },
            },
          },
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
