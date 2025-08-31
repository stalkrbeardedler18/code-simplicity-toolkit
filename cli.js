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
    try {
        toolkit.analyze(filePath);
        console.log('Analysis complete on:', filePath);
    } catch (error) {
        console.log('Error during analysis:', error.message);
        process.exit(1);
    }
} else if (args[0] === 'help') {
    console.log('Usage: cli.js analyze <file-path>\n       cli.js help');
} else {
    console.log('Command not recognized.');
}