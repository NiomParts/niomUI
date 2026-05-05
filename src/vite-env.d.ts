/// <reference types="vite/client" />

import '@testing-library/jest-dom/vitest';

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
