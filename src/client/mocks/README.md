# Mocks for Google Apps Script Functions

This directory contains mock implementations for Google Apps Script server-side functions. These mocks are used during local development to simulate the behavior of Apps Script functions without needing to deploy code to a GAS project.

## Structure

*   `default-mocks.js`: This file contains the default set of mock functions. Each function in this file should mimic the signature and behavior of its corresponding server-side Apps Script function.

## How to Add New Mocks

1.  **Create a new mock file (optional):** For a new set of mocks, you can create a new file in this directory (e.g., `error-mocks.js`).
2.  **Define mock functions:** Inside your mock file, export functions that match the names of your server-side Apps Script functions. These functions will receive `resolve`, `reject`, and `sleep` as arguments.
    ```javascript
    export default function getMyNewMocks(resolve, reject, sleep) {
      return {
        async myAppsScriptFunction(arg1, arg2) {
          await sleep(500);
          // Simulate success
          resolve('Mocked result');
          // Or simulate an error
          // reject(new Error('Mocked error'));
        },
      };
    }
    ```
3.  **Register the mock strategy:** If you created a new mock file, import it into `src/client/lib/mocking/mock-strategies.js` and add it to the `mockStrategies` object.

## How to Use Mocks

The `polyfillScriptRun` function (located in `src/client/lib/mocking/polyfill-script-run.js`) is responsible for injecting these mocks into the `google.script.run` object during local development. You can specify which mock strategy to use when calling `polyfillScriptRun`.

For example, to use the default mocks:

```javascript
import { polyfillScriptRun } from './lib/mocking/index.js';
polyfillScriptRun('default');
```
