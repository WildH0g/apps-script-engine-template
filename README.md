# Welcome to the boilerplate for Wurkspaces.dev's Google Apps Script projects 👋

![Version](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000)

> Boilerplate set up for Google Apps Script projects with Wurkspaces.dev stack

## Install

```sh
npm i && npm run install:husky && npm run build
```

## Running the local dev server with Vite

Run the Vite server and the Tailwind server in parallel in different terminal windows:

```sh
# Vite server
npm run dev
```

```sh
# Tailwind server
npm run build:css:watch
```

## Formatting

The `npm run format` will run linting and pretty-printing with the `--fix` and `--write` options.

## Managing Environments

This project is set up to be deployable to separate Google Apps Script projects acting as different environments. It works by copying relevant environmental files like `.clasp.json` from `env-mgt/<environment_name>` to the specified path (the root by default). Any number of files can be added to each environment. Configure the environment in the `env-mgt/ENV.js` file.

## Bulding and deploying

To build the app for production, run:

```sh
npm run build:ui # to build the client-side
npm run build:gas # to build Google Apps Script library code
```

Or, if you want to build then push, run:

```sh
npm run build:push
```

The Apps Script code will be stored in a variable that executes an IIFE `lib` by default. Hence, to call an exported function from the bundled Apps Script code use `lib.<functionName>(args)` syntax.

## Run tests

```sh
npm t
```

## Git hooks

If you ran `npm run install:husky`, you will have configured a `pre-commit` git hook. Every time you commit your code, it will run formatting and testing by executing `npm run format && npm t`.

## Author

👤 **Dmitry Kostyuk**

- Website: https://www.wurkspaces.dev
- Twitter: [@wildhogsm](https://twitter.com/wildhogsm)
- Github: [@WildH0g](https://github.com/WildH0g)
- LinkedIn: [@dmitrykostyuk](https://linkedin.com/in/dmitrykostyuk)
- StackOverflow: [Dmitry Kostyuk](https://stackoverflow.com/users/13229211/dmitry-kostyuk)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
