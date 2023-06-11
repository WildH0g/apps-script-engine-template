# Welcome to the boilerplate for Wurkspaces.dev's Google Apps Script projects 👋

![Version](https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000)
[![Twitter: wildhogsm](https://img.shields.io/twitter/follow/wildhogsm.svg?style=social)](https://twitter.com/wildhogsm)

> Boilerplate set up for Google Apps Script projects with Wurkspaces.dev stack

## Install

```sh
npm i && npm install:husky
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

The `npm run format` will run linting and pretty-printing with the `--fix` option.

## Bulding and deploying

To build the app for production, run:

```sh
npm run build
```

Or, if you want to build then push, run:

```sh
npm run build:push
```

## Run tests

```sh
npm t
```

## Git hooks

If you ran `npm run install:husky`, you will have configured a `pre-commit` git hook. Every time you commit your code, it will run formatting and testing by executing `npm run format && npm t`.

## Author

👤 **Dmitry Kostyuk**

* Website: https://www.wurkspaces.dev
* Twitter: [@wildhogsm](https://twitter.com/wildhogsm)
* Github: [@WildH0g](https://github.com/WildH0g)
* LinkedIn: [@dmitrykostyuk](https://linkedin.com/in/dmitrykostyuk)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_