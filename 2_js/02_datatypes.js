console.log(typeof "uzair")

let a = typeof "John";          // Returns "string"
let b = typeof ("John" + "Doe"); // Returns "string"
let c = typeof 3.14;            // Returns "number"
let d = typeof 33;              // Returns "number"
let e = typeof (33 + 66);       // Returns "number"
let f = typeof true;            // Returns "boolean"
let g = typeof false;           // Returns "boolean"
let h = typeof 1234n;           // Returns "bigint"
let i = typeof Symbol();        // Returns "symbol"
let j = typeof x;               // Returns "undefined"

console.table([a, b, c, d, e, f, g, h, i, j]);
