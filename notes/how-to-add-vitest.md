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

### Why JSDOM?

JSDOM is a pure-JavaScript implementation of many web standards, notably the WHATWG DOM and HTML Standards, for use with Node.js [npmjs.com](https://www.npmjs.com/package/jsdom). It's essentially a simulated browser environment in Node.js. It provides a way to create a virtual DOM (Document Object Model) that you can interact with, similar to how you would in a real browser.

In the context of testing, JSDOM is used to create a virtual browser environment where you can run your tests. This is particularly useful for testing libraries or code that rely on browser APIs, as it allows these APIs to be available in a Node.js environment where they wouldn't normally be. In our case, the SolidJS testing library was trying to access the `document` object, which is a browser API. Without the JSDOM environment, this would cause an error because the `document` object is not available in a Node.js environment.

**Vitest Configuration:**

In our Vitest configuration, by specifying `jsdom` as the testing environment. This tells Vitest to use JSDOM to create a virtual browser environment for our tests. As a result, when we run our tests, Vitest creates a JSDOM environment, and our tests are able to access the `document` object and other browser APIs through this environment.

**Why Vitest Couldn't Find the DOM:**

By default, Vitest runs tests in a Node.js environment. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, and it doesn't include browser APIs like `document` or `window`. This is why we can see the error `ReferenceError: document is not defined` when trying to run tests without a JSDOM environment.

By specifying `jsdom` as the testing environment in Vitest configuration, you're telling Vitest to create a JSDOM environment for your tests. This environment includes a simulated browser environment with browser APIs, which allows your tests to access the `document` object and other browser APIs.
