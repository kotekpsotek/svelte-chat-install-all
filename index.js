#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
const cli_color_1 = __importDefault(require("cli-color"));
// Inform what will be insalled
const color1G = cli_color_1.default.xterm(201).bgXterm(20);
const color1S = cli_color_1.default.xterm(202).bgXterm(236);
console.log(color1G(`Installing ${color1S("@svelte-chat/gui")}, ${color1S("@svelte-chat/plugin")}`));
// Install dep.. and inform when done
child_process_1.default.execSync("npm i @svelte-chat/gui");
console.log(color1G(`${color1S("@svelte-chat/gui")} installed`));
child_process_1.default.execSync("npm i @svelte-chat/plugin");
console.log(color1G(`${color1S("@svelte-chat/plugin")} installed`));
