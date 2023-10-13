### Install Vitest:

npm install --save-dev vitest

### Add a test script to your package.json:

"scripts": {
  "test": "vitest"
}

### Install solid's testing library:

npm install --save-dev @solidjs/testing-library

### Install JSDOM

npm install --save-dev jsdom

##### then add jsdom to vite.config.ts:

import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid({ ssr: false })],
  test: {environment: 'jsdom'}
});
