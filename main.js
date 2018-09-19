'use strict';

const shuffle = require('./weave');

// let n = 100;
const test = parseInt(process.argv[2]);
console.log('value of test', test);
let times = shuffle(test);
console.log(`when there are ${test} cards we need to shuffle ${times} times`);