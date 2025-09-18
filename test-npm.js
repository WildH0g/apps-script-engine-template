import { npmScripts } from "./.config/javascript/config.js";
import { execSync } from 'child_process';

const buildCmd = (name, cmd) => `npm pkg set "scripts.${name}"="${cmd}"`;

const commands = npmScripts.map(script => buildCmd(script.name, script.cmd));
console.log(commands);
commands.forEach(execSync);


/*
    "build:gas": "vite build --config vite.config.gas.js",
    "build:cp": "vite build --config vite.config.copy-paste.js",
    "build:node": "vite build --config vite.config.node.js",
 */
