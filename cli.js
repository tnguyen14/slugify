#!/usr/bin/env node

const slugify = require('./index');

const input = process.argv.slice(2).join(' ');

if (!input) {
  console.error('Usage: slugify <string>');
  process.exit(1);
}

console.log(slugify(input));