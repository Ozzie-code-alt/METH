#!/usr/bin/env node

const { exec } = require('child_process');

console.log('METH is Installing MongoDB, Express, TypeScript, and HTMX...');

exec('npm install mongodb && npm install express && npm install typescript && npm install htmx.org && npm install @types/node && npm install @types/express --save-dev', (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});
