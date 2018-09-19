'use strict';

const shuffle = require('./weave');

let n = 100;
let times = shuffle(n);
console.log(`when there are ${n} cards we need to shuffle ${times} times`);