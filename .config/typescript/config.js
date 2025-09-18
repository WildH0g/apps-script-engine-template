export const npmScripts = [
  { name: 'build:gas', cmd: 'vite build --config vite.config.gas.ts' },
  { name: 'build:cp', cmd: 'vite build --config vite.config.copy-paste.ts' },
  { name: 'build:node', cmd: 'vite build --config vite.config.node.ts' },
];

export const deps = 'npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin';
