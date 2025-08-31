#!/usr/bin/env node

const CodeSimplicityToolkit = require('./index');
const toolkit = new CodeSimplicityToolkit();

const args = process.argv.slice(2);
if (args[0] === 'analyze') {
    const filePath = args[1];
    if (!filePath) {
        console.log('Error: No file path provided for analysis.');
        process.exit(1);
    }
    toolkit.analyze(filePath);
} else {
    console.log('Command not recognized.');
}