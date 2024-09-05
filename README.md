# Welcome to the Apps Script Engine Template! 👋

![Version](https://img.shields.io/badge/version-1.3.1-blue.svg?cacheSeconds=2592000)

>  Kickstart your Google Apps Script projects with this robust, highly configurable template that includes essential development tools right out of the box.

## Table of Contents

1. [Welcome to the Apps Script Engine Template! 👋](#welcome-to-the-apps-script-engine-template-)
2. [About](#about)
   - [The Problems it Solves](#the-problems-it-solves)
3. [Prerequisites](#prerequisites)
4. [Install](#install)
5. [Global Settings](#global-settings)
   - [Template Structure](#template-structure)
   - [NPM Modules](#npm-modules)
   - [Dependencies](#dependencies)
     - [External](#external)
     - [Custom](#custom)
   - [Formatting](#formatting)
   - [Run Tests](#run-tests)
   - [Git Hooks](#git-hooks)
6. [Managing Environments](#managing-environments)
   - [Environment Configuration](#environment-configuration)
7. [Client-Side `HtmlService` Code](#client-side-htmlservice-code)
   - [The Philosophy](#the-philosophy)
   - [The Solution](#the-solution)
   - [The Stack](#the-stack)
   - [Running the Local Development Server with Vite](#running-the-local-development-server-with-vite)
   - [`google.script.run` Promisified](#googlescriptrun-promisified)
   - [Mocking Server-Side Apps Script Functions](#mocking-server-side-apps-script-functions)
   - [Building and Deploying](#building-and-deploying)
8. [Server-Side Google Apps Script Code](#server-side-google-apps-script-code)
   - [The Philosophy](#the-philosophy-1)
   - [Building and Deploying](#building-and-deploying-1)
   - [NPM Modules](#npm-modules-1)
   - [Server-Side Code Configuration](#server-side-code-configuration)
9. [NPM Library Code](#npm-library-code)
10. [Copy-and-Paste Code](#copy-and-paste-code)
11. [Other Resources](#other-resources)
12. [Author](#author)
13. [Show Your Support](#show-your-support)

## About

This is a Node-powered, highly opinionated yet easily configurable template designed for creating outstanding Google Apps Script projects. It includes top-tier software engineering tools, pre-setup dev tools like Husky, Prettier, ESLint, and Jest, and offers seamless support for CI/CD workflows, such as GitHub Actions. With this template, you can easily include NPM modules in your projects and support multiple environments (development, staging, production, and more). It also enables the use of ES6 modules in your source code.

The template is set up to bundle front-ends built with `HtmlService`, back-end Apps Script code, and Apps Script libraries (both native and deployable on NPM).

### The Problems it Solves

- **ES6 Modules in Apps Script:** Work seamlessly with modern JavaScript.
- **Fast Local Development:** Develop both client-side and server-side code locally with mock functions and promisified calls to `google.script.run`.
- **Support for Front-End Frameworks:** Comes with Alpine.js and Tailwind CSS (with the Daisy UI plugin) by default. TypeScript support is also easy to add.
- **NPM Modules Support:** Integrate NPM modules for both front-end and back-end code.
- **Unit Testing:** Set up with Jest to ensure your code works as expected.
- **CI/CD Workflows:** Integrate with GitHub Actions or Cloud Build for robust, automated deployments.
- **Optimized Deployments:** Streamline the deployment process for server-side code, library code, and copy-and-paste code.
- **Environment Management:** Built-in support for different environments (DEV, UAT, PROD) with specific configurations and environment files for each.

## Prerequisites

Ensure that you have `npm`, `git`, and `clasp` installed by running:

```shell
npm --version
git --version
clasp --version
```

Yes, we know clasp is no longer maintained; when it breaks, we'll have our own solution ready.

## Installation

To install the template, run the following command with an optional directory name:

```shell
npx apps-script-engine [directory-name]
```

If no directory name is provided, it will default to `./apps-script-project`.

To create a new Apps Script project in the current directory:

```shell
npx apps-script-engine .
```

Or in a specific directory:

```shell
npx apps-script-engine my-project-directory
```

The script will generate the necessary boilerplate files in the specified directory.

## Global Settings

The Apps Script Engine has global settings as well as front-end and back-end-specific ones.

### Template Structure

Below is the full template structure. The main components include the `src` folder, which contains the client-side and server-side code boilerplate, an environment management tool, a unit tests folder, a custom Vite plugin, and several configuration files. Everything is discussed in detail below:

```text
.
├── dist
│   ├── copy-paste
│   │   └── app.iife.js
│   ├── gas
│   │   ├── server
│   │   │   └── server.iife.js
│   │   ├── ui
│   │   │   └── index.html
│   │   ├── appsscript.json
│   │   └── exports.js
│   └── node
│       ├── app.js
│       └── app.umd.cjs
├── env-mgt
│   ├── dev
│   │   └── .clasp.json
│   ├── prod
│   │   └── .clasp.json
│   ├── uat
│   │   └── .clasp.json
│   ├── ENV.js
│   └── set-env.js
├── .husky
│   ├── _
│   │   ├── .gitignore
│   │   └── husky.sh
│   └── pre-commit
├── src
│   ├── client
│   │   ├── assets
│   │   │   └── favicon.ico
│   │   ├── app.js
│   │   ├── styles.css
│   │   ├── credits.js
│   │   ├── getMocks.js
│   │   ├── isJest.js
│   │   └── runGas.js
│   ├── server
│   │   ├── helpers.js
│   │   └── server.js
│   └── app.js
├── __tests__
│   └── generateRandomHexColor.test.js
├── types
│   └── colors.js
├── vite-plugin
│   ├── traverse
│   │   ├── collect-function-declarations.js
│   │   ├── extract-export-details.js
│   │   ├── extract-exports.js
│   │   ├── extract-params.js
│   │   └── find-exports-identifier.js
│   └── vite-plugin-appsscript.js
├── appsscript.json
├── .clasp.json
├── .eslintrc.cjs
├── .gitignore
├── HISTORY.md
├── index.html
├── jsconfig.json
├── package.json
├── package-lock.json
├── prettier.config.cjs
├── postcss.config.cjs
├── .prettierignore
├── INSTRUCTIONS.md
├── tailwind.config.cjs
├── vite.config.copy-paste.js
├── vite.config.gas.js
├── vite.config.js
└── vite.config.node.js
```

### NPM Modules

The template supports installing and bundling NPM modules in both client-side and server-side code. Simply install, import, and build your code as you normally would. The template handles the rest.

### Dependencies

The Apps Script Engine Template uses the following external and custom dependencies:

#### External

- `@types/google-apps-script`: Type definitions for Apps Script.
- `clasp`: For pushing the code to your Apps Script project.
- `vite-plugin-singlefile`: Compiles HTML/CSS/JavaScript into a single file.

#### Custom

- **Environment Manager:** Located in `./env-mgt`, this tool updates the `.clasp.json` file with the correct script ID and any other environment-specific files.
- **Custom Vite Plugin:** Facilitates the unique needs of Apps Script projects.

### Formatting

To run linting (ESLint) and pretty-printing (Prettier) with the `--fix` and `--write` options respectively, use:

```sh
npm run format
```

### Run Tests

To run the tests:

```sh
npm t
```

### Git Hooks

The template comes with a pre-configured `pre-commit` Git hook using Husky. Every time you commit your code, it will automatically run formatting and testing by executing `npm run format && npm t`.

## Managing Environments

The template is designed to be deployable to different Google Apps Script projects, each acting as a different environment. It works by copying relevant environmental files (like `.clasp.json`) from `env-mgt/<environment_name>` to the specified path (the root directory by default). You can add any number of files to each environment. Configurations are handled in the `env-mgt/ENV.js` file.

### Configuring Environments

The `env-mgt/ENV.js` file defines the path for each environment-specific file to be copied. The default configuration looks like this:

```js
// /env-mgt/ENV.js
export default {
  dev: [
    {
      fileName: '.clasp.json',
      filePath: 'env-mgt/dev',
      copyTo: './'
    }
  ],
  uat: [
    {
      fileName: '.clasp.json',
      filePath: 'env-mgt/uat',
      copyTo: './'
    }
  ],
  prod: [
    {
      fileName: '.clasp.json',
      filePath: 'env-mgt/prod',
      copyTo: './'
    }
  ],
}
```

Each environment is represented by an object key and contains an array of objects specifying the file paths and their destinations. The `.clasp.json` files are typically copied to the root directory, where all other configuration files reside.

The `package.json` file contains scripts that allow you to switch environments:

```json
{
  "scripts": {
    "env:dev": "node ./env-mgt/set-env.js dev",
    "env:uat": "node ./env-mgt/set-env.js uat",
    "env:prod": "node ./env-mgt/set-env.js prod"
  }
}
```

You can follow this format to add or remove environments as needed.

## Client-Side `HtmlService` Code

For web apps, sidebars, or modal dialogs built with `HtmlService`, the source code is located in `src/client`.

### The Philosophy

There are two primary ways to build front-ends with Apps Script:

1. **Server-Side Rendering (SSR):** You can directly create an `HTMLOutput` or `HTMLTemplate` that allows you to pass data to the front-end using template properties and the `<% %>` tags.
2. **Ajax Calls with `google.script.run`:** Alternatively, you can call an Apps Script function directly from the front-end using `google.script.run`, and handle return values and errors with callbacks.

However, these approaches have limitations:

1. **Local Development Constraints:** You can't run Apps Script locally on your machine. Each time you update, you must wait for clasp to push your code, switch environments, run the code, determine if it works, and repeat. This process is slow and inefficient.
2. **`google.script.run` Limitations:** You can't execute `google.script.run` locally by default, as the library isn't included. Even if it were, you can't call Apps Script functions from your local environment.
3. **File Organization Limitations:** Apps Script doesn't support using multiple JavaScript files with imports and exports, or references like `<script src="app.js">` or `<link rel="stylesheet" href="style.css">` (unless they are external, which can be messy unless using CDNs).
4. **Local Preview Challenges:** You can't easily preview your front-end locally because Apps Script-specific environment calls will prevent it from functioning correctly.

### The Solution

This template addresses these limitations by allowing front-end development to happen locally, with instant loading and auto-reloading. This eliminates the need to deploy your code and switch environments each time you make a change. However, it will still work seamlessly when deployed to the Apps Script project. All development, except for server-side code, occurs on your local machine.

### The Stack

- **Vite:** Bundles HTML/CSS/JS into a single file using the [`vite-plugin-singlefile`](https://www.npmjs.com/package/vite-plugin-singlefile) plugin, making it compatible with Apps Script.
- **Local Execution:** Mocks and Vite's dev server enable you to run and test your front-ends locally, saving valuable time.
- **JavaScript Framework:** [Alpine.js](https://alpinejs.dev/) is used for building the front-end.
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com/) with the [Daisy UI](https://daisyui.com/) plugin is included by default.

### Running the Local Development Server with Vite

To run the Vite server, run the `npm run dev` command. This will start the Vite server. The server will run on port 5173 by default.

### `google.script.run` Promisified

Instead of using `google.script.run.withSuccessHandler(onSuccess).withFailureHandler(onFailure).myFunction()`, which can lead to callback hell and hard-to-maintain code, this template provides a promisified version. You can use the asynchronous `runGas(fnName: string, args: any[])` function. For example:

```js
await runGas('getDataFromSheet', ['Statistics']);
```

### Mocking Server-Side Apps Script Functions

The mocks for server-side Apps Script functions are defined in the `src/client/getMocks.js` file within the `getMocks()` function. The return value of this function is an object containing mocked functions. Use the `resolve()` callback to resolve the mocked value. Ensure that the mocked functions are named the same as their real counterparts. Use the `sleep` function to emulate delays. The boilerplate function includes this code:

```js
export default function getMocks(resolve) {
  return {
    async randomizeCellColors() {
      await sleep(1000);
      resolve(true);
    },
  };
}
```

### Building and Deploying

To build the app for production, run:

```sh
npm run build:ui # to build the client-side
```

The bundled code is saved in the `dist/gas/ui` folder.

To push the code to your Apps Script project:

```sh
npm run push
```

The Apps Script code is stored in a variable that executes an IIFE (`lib` by default). To call an exported function from the bundled Apps Script code, use the `lib.<functionName>(args)` syntax.

## Server-Side Google Apps Script Code

The server-side code resides in the `src/server` folder.

### The Philosophy

The Apps Script runtime environment has several drawbacks and limitations compared to other environments like Node.js. Some of the most notable limitations include:

1. **No Support for ES6 Modules:** If you use `import` and `export` statements, Apps Script will throw an error. This prevents you from organizing and testing your functions locally, and you can't import them into your unit tests.
2. **Limited NPM Module Support:** While some NPM modules that use vanilla JavaScript and don't rely on incompatible runtime environments (such as the DOM or the `fs` module) can work in Apps Script, there was no easy way to include them—until now.
3. **Limited Library Deployment:** Previously, you couldn't easily deploy your libraries to NPM. Now, because we work in a Node environment locally, publishing to NPM is a breeze.

This template mitigates these limitations by providing a Node-based development environment that allows you to organize, test, and deploy your code more effectively.

### Building and Deploying

The `package.json` file contains several scripts you can run, including:

```json
{
  "scripts": {
    "build:gas": "vite build --config vite.config.gas.js",
    "build:node": "vite build --config vite.config.node.js",
    "build:cp": "vite build --config vite.config.copy-paste.js",
  }
}
```

These scripts make use of different Vite configuration files. Let's explore what they do, starting with NPM modules.

### NPM Modules

Google Apps Script is a runtime environment for JavaScript, similar to how the Chrome browser and Node.js are runtime environments. While vanilla JavaScript can run seamlessly across these different environments, environment-specific code cannot.

For example, code that references the DOM, the `window` object, or the `fs` module won't work in Apps Script. Similarly, any code that calls `SpreadsheetApp` is exclusive to Apps Script and won't function outside of it.

Because of these limitations, only a subset of libraries on NPM are compatible with Apps Script. When selecting NPM modules for your Apps Script project, ensure that the modules don't rely on environment-specific features that are unavailable in Apps Script.

Some of the modules I like to use with my Apps Script code are [Lodash](https://www.npmjs.com/package/lodash), [Day.js](https://www.npmjs.com/package/dayjs), [Nano ID](https://www.npmjs.com/package/nanoid), [faker.js@5.5.3](https://www.npmjs.com/package/faker/v/5.5.3), and my own [ConsolAS](https://www.npmjs.com/package/@wildhog/consolas).

Installing the libraries with `npm install <package-name>` as usual, the Vite configuration files will handle all the magic. Let's look at the actual configurations and how they work.

### Server-Side Code Configuration

- The server-side code is built with the `build:gas` script.
- The configuration is in the `vite.config.gas.js` file.

Here's the `vite.config.gas.js` configuration file:

```js
// vite.config.gas.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { GoogleAppsScriptExportsPlugin } from './vite-plugin/vite-plugin-appsscript.js';

export default defineConfig({
  plugins: [GoogleAppsScriptExportsPlugin()],
  build: {
    minify: false,
    outDir: resolve(process.cwd(), 'dist/gas/server'),
    lib: {
      entry: resolve(process.cwd(), 'src/server/server.js'),
      name: 'lib_',
      fileName: 'server',
      formats: ['iife'],
    },
  },
});
```

Important points to understand:

- The code is bundled as an IIFE from the `/src/server/server.js` file to `dist/gas/server/server.iife.js`.
- The return value of the IIFE is stored in the `lib_` variable (note the underscore to make it private).
- We use a custom `GoogleAppsScriptExportsPlugin` that uses Babel's AST to extract exported objects from `/src/server/server.js` into `/dist/gas/exports.js`. Unlike the `lib_`, these objects are public.
- The code is not minified by default, as minification would rename function parameters, potentially making it incompatible with AppSheet.
- The boilerplate comes with examples, and the exported functions are compiled from:

```js
// /src/server/server.js
// /src/server/server.js
import { generateRandomHexColor, getContext } from './helpers.js';

/**
 * Randomizes the background color of cells in the range A1:E20
 * @returns {void}
 */
export function randomizeCellColors() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const range = sheet.getRange('A1:E20');

  const colors = generateRandomHexColor(
    range.getNumRows(),
    range.getNumColumns()
  );

  range.setBackgrounds(colors);
}

/**
 * Runs when the Google Apps Script app is opened.
 */
export function onOpen() {
  const ui = getContext().ui;
  ui.createMenu('👨‍🏭 Wurkspaces.dev')
    .addItem('☕🍽️ Boilerplate', 'showSidebar')
    .addToUi();
}

/**
 * Shows the sidebar in the Google Apps Script app.
 */
export function showSidebar() {
  SpreadsheetApp.getUi().showSidebar(
    HtmlService.createHtmlOutputFromFile('ui/index')
  );
}
```

to:

```js
// /dist/gas/exports.js
/* eslint-disable no-undef */
function onOpen() {
  return lib_.onOpen();
}
function randomizeCellColors() {
  return lib_.randomizeCellColors();
}
function showSidebar() {
  return lib_.showSidebar();
}
```

 The `exports.js` file essentially exposes the functions stored in the `lib_` variable.  This code can be used as a backend for a web app, an add-on, or deployed as a native Apps Script library.  There is also a configuration to deploy your libraries to NPM.

### NPM Library Code

We've covered how to use NPM libraries in your Apps Script code. Here's how to deploy to NPM:

- The library code is built with the `build:node` script.
- The configuration is in the `vite.config.node.js` file.

Here's the `vite.config.node.js` configuration file:

```js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: true,
    outDir: resolve(process.cwd(), 'dist/node'),
    lib: {
      entry: resolve(process.cwd(), 'src/app.js'),
      name: 'init',
      fileName: 'app',
    },
    rollupOptions: {
      output: {
        extend: false,
      },
    },
  },
});
```

Important points to understand:

- The source code is taken from `src/app.js`.
- It is bundled into two different versions in `dist/node`:
  - `/dist/node/app.js`: The ES6 module version.
  - `/dist/app.umd.cjs`: The CJS module version.
- Additionally, `package.json` contains the following configuration:

```json
{
  "main": "./dist/node/app.umd.cjs",
  "module": "./dist/node/app.js",
  "exports": {
    ".": {
      "import": "./dist/node/app.js",
      "require": "./dist/node/app.umd.cjs"
    }
  },
}
```

- This setup makes the library deployable with the `npm deploy` command.
- You can also create your own CI/CD configuration; for instance, for GitHub Actions, you can create your YAML config in the `.github/workflows` folder.

### Copy-and-Paste Code

Sometimes the easiest way to import your code into a project is simply to copy and paste it. This is where the `build:cp` script comes in. Let's look at the `vite.config.copy-paste.js` configuration file.

Here's the `vite.config.copy-paste.js` configuration file:

```js
// vite.config.copy-paste.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { GoogleAppsScriptExportsPlugin } from './vite-plugin/vite-plugin-appsscript.js';

export default defineConfig({
  plugins: [
    GoogleAppsScriptExportsPlugin(
      'dist/copy-paste/app.iife.js',
      'dist/copy-paste/exports.js',
      '__lib__',
      {
        exportsFile: false,
      }
    ),
  ],
  build: {
    minify: true,
    outDir: resolve(process.cwd(), 'dist/copy-paste'),
    lib: {
      entry: resolve(process.cwd(), 'src/app.js'),
      name: '__lib__',
      fileName: 'app',
      formats: ['iife'],
    },
    rollupOptions: {
      output: {
        extend: false,
      },
    },
  },
});
```

Important points to understand:

- The entire code is bundled into a single file, `dist/copy-paste/app.iife.js`, from the `src/app.js` file. This makes it easy to grab, for example, on GitHub by simply clicking the copy button.
- Unlike the server-side code, no separate exports file is created. Instead, the exported functions are appended to the end of the file.
- The code is also minified by default.

## Other Resources

- The `npx` [`app-script-engine`](https://www.npmjs.com/package/apps-script-engine) script is the main tool for installing the Apps Script Engine Template.

For a better understanding of the architecture of the Apps Script Engine template, refer to the following blog post series:

- [Apps Script UI blog post series](https://medium.com/javascript-in-plain-english/the-ultimate-google-apps-script-front-end-development-guide-542694b29496?sk=111f27bcc57a2013393d2eee575d2ee2)
- [Apps Script libraries blog post series](https://medium.com/javascript-in-plain-english/ever-felt-like-youre-bringing-a-knife-to-a-gunfight-a39042d9793d?sk=b52418bb40b2c387802480458326f113)

## Author

👤 **Dmitry Kostyuk**

- Website: [Wurkspaces.dev](https://www.wurkspaces.dev)
- Twitter: [@wildhogsm](https://twitter.com/wildhogsm)
- GitHub: [@WildH0g](https://github.com/WildH0g)
- LinkedIn: [Dmitry Kostyuk](https://linkedin.com/in/dmitrykostyuk)
- StackOverflow: [Dmitry Kostyuk](https://stackoverflow.com/users/13229211/dmitry-kostyuk)

## Show Your Support

If this project helped you, please give it a ⭐️!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
