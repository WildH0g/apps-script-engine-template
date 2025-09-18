# Project Overview

This project is a Node-powered template designed for developing Google Apps Script (GAS) projects. It provides a robust development environment that addresses common challenges in GAS development, such as ES6 module support, TypeScript integration, local development for client-side and server-side code, NPM module integration, comprehensive mocking for `google.script.run` (including success and failure scenarios), unit testing, and CI/CD workflows.

**Key Technologies:**

*   **Build Tool:** Vite
*   **Client-Side Framework:** Alpine.js
*   **Styling:** Tailwind CSS with Daisy UI
*   **Linting:** ESLint
*   **Formatting:** Prettier
*   **Testing:** Vitest
*   **Git Hooks:** Husky
*   **GAS CLI:** `@google/clasp`

The template supports building client-side `HtmlService` code, server-side Google Apps Script code, and NPM library code, with distinct build processes for each. It also includes a custom Vite plugin to facilitate GAS-specific bundling requirements.

# Building and Running

## Installation

To install the template, use `npx apps-script-engine [directory-name] [--ts]`. For example, to create a new project in the current directory:

```bash
npx apps-script-engine . --ts
```

After installation, ensure `npm`, `git`, and `clasp` are installed globally.

## Development

*   **Local Development Server (Client-Side):**
    ```bash
    npm run dev
    ```
    This starts a Vite development server, typically on port 5173, for local client-side development with instant loading and auto-reloading.

## Building

*   **Build Client-Side (`HtmlService`) Code:**
    ```bash
    npm run build:ui
    ```
    Bundles client-side code into `dist/gas/ui`.

*   **Build Server-Side Google Apps Script Code:**
    ```bash
    npm run build:gas
    ```
    Bundles server-side code into `dist/gas/server` and extracts public exports into `dist/gas/exports.js`.

*   **Build NPM Library Code:**
    ```bash
    npm run build:node
    ```
    Bundles library code into `dist/node` for ES6 and CommonJS module formats.

*   **Build Copy-and-Paste Code:**
    ```bash
    npm run build:cp
    ```
    Bundles `src/app.js` into a single, minified IIFE file in `dist/copy-paste/app.iife.js`.

*   **Comprehensive Build (UI and GAS):**
    ```bash
    npm run build
    ```

*   **Build All Libraries (Copy-Paste, Node, GAS):**
    ```bash
    npm run build:lib
    ```

## Deployment

*   **Push Code to Google Apps Script Project:**
    ```bash
    npm run push
    ```
    This command uses `clasp` to push the built code to the configured Apps Script project.

## Environment Management

The template supports multiple environments (dev, uat, prod) by copying environment-specific `.clasp.json` and other configuration files.

*   **Switch to Development Environment:**
    ```bash
    npm run env:dev
    ```

*   **Switch to UAT Environment:**
    ```bash
    npm run env:uat
    ```

*   **Switch to Production Environment:**
    ```bash
    npm run env:prod
    ```

# Development Conventions

## Formatting and Linting

*   **Run Prettier and ESLint with auto-fix:**
    ```bash
    npm run format
    ```
    This command runs `prettier --write` and `eslint --fix` on all JavaScript files in the `src` directory.

*   **Check Prettier Formatting:**
    ```bash
    npm run prettier
    ```

*   **Fix Prettier Formatting:**
    ```bash
    npm run prettier:fix
    ```

*   **Run ESLint Check:**
    ```bash
    npm run lint
    ```

*   **Fix ESLint Issues:**
    ```bash
    npm run lint:fix
    ```

## Testing

*   **Run Unit Tests:**
    ```bash
    npm t
    ```
    This command executes tests using Vitest.

## Git Hooks

The project uses Husky to configure a `pre-commit` Git hook. This hook automatically runs `npm run format && npm t` before each commit, ensuring code quality and test coverage.
