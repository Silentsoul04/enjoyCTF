'use strict';

const fs = require('fs');

const encrypted = fs.readFileSync('./encrypted').toString();

console.log(encrypted.length);
