let x = 11

let bool = Boolean(x)
// console.log(typeof bool);
// console.log(bool)

let y = "33"

let val = Number(y)
// console.log(typeof val);
// console.log(val)


let z = "33abc"

let sval = Number(z)
// console.log(typeof sval);
// console.log(sval)

let a = true

let str = String(a)
// console.log(typeof str);
// console.log(str)

//**********************operations****************************** */

// console.log(2/3);

// console.log(1+2+"2");

// console.log(+false);

let k = 5;
console.log(k++); // Outputs 5, because the value of x is used first, then incremented
console.log(k);   // Outputs 6, as the increment happened after the previous line

let f = 5;
console.log(++f); // Outputs 6, because the value is incremented first, then used
console.log(f);   // Outputs 6, as the value was already incremented
