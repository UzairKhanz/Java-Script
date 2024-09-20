let a = 5;
let b = '5';
let c = 10;
let d = 3;
let e = 5;

// Equal (==)
console.log("a == b:", a == b); // true (values are equal, type conversion happens)

// Strict Equal (===)
console.log("a === b:", a === b); // false (values are equal but types are different)

// Not Equal (!=)
console.log("a != c:", a != c); // true (5 is not equal to 10)

// Strict Not Equal (!==)
console.log("a !== b:", a !== b); // true (values are equal, but types are different)

// Greater Than (>)
console.log("c > a:", c > a); // true (10 is greater than 5)

// Greater Than or Equal (>=)
console.log("a >= e:", a >= e); // true (5 is equal to 5)

// Less Than (<)
console.log("d < a:", d < a); // true (3 is less than 5)

// Less Than or Equal (<=)
console.log("e <= c:", e <= c); // true (5 is less than 10)
