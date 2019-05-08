#!/usr/bin/env node

const yargs = require('yargs')
  .option('replacement', {
    alias: 'r',
    describe: 'string used to replace redacted text',
  })
  .help('help')
  .argv;

const stdin = process.openStdin();
let data = '';

stdin.on('data', chunk => data += chunk);
stdin.on('end', () => {
  const { SyncRedactor } = require('redact-pii');
  const options = {};
  if (yargs.replacement) {
    options.globalReplaceWith = yargs.replacement;
  }
  const redactor = new SyncRedactor(options);
  process.stdout.write(redactor.redact(data));
});
