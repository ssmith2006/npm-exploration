"use strict";

const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversed = _.reverse([...array]);

console.log("Original:", array);
console.log("Reversed:", reversed);