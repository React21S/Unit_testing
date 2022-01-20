'use strict';
console.log(2/0); // infinity
console.log(0/0); // NaN
console.log(-4/0); // -infinity
console.log((-4/0)===Number.NEGATIVE_INFINITY); // true
console.log((4/0)===Number.NEGATIVE_INFINITY); // false

console.log(Number.NEGATIVE_INFINITY/Number.NEGATIVE_INFINITY); // NaN
console.log(Number.POSITIVE_INFINITY/Number.POSITIVE_INFINITY); // NaN

