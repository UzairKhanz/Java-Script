let name = "uzair"
const num = 12

console.log(name+num+"khan")

console.log(`my name is ${name} & my age is ${num}`);

console.log(name[0])
console.log(name.__proto__);
console.log(name.length);

let myname = new String("Uzair")

console.log(myname[2]); //access using index
console.log(myname)
console.log(name.__proto__);

console.log(name.substring(0,4));

console.log(name.slice(-4,2))  //slice can take negative index

let str = "    hello    uzair   "
console.log(str.trim())   //trim spaces in start and end
console.log(str.trim().replace(/\s+/g, ' '));  //trim start and end spaces also remove extra sapces from middle

const url = "htpps://google.com/home%20services"
console.log(url.replace("%20" , ""))  //replace %20 with nothing

let mystr = "hello uzair khan"
console.log(mystr.split(' '))
