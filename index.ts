#!/usr/bin/env node
import child_process from "child_process";
import clc from "cli-color";

// Inform what will be insalled
const color1G = clc.xterm(201).bgXterm(20);
const color1S = clc.xterm(202).bgXterm(236);
console.log(color1G(`Installing ${color1S("@svelte-chat/gui")}, ${color1S("@svelte-chat/plugin")}`))

// Install dep.. and inform when done
child_process.execSync("npm i @svelte-chat/gui");
console.log(color1G(`${color1S("@svelte-chat/gui")} installed`));
child_process.execSync("npm i @svelte-chat/plugin");
console.log(color1G(`${color1S("@svelte-chat/plugin")} installed`));
