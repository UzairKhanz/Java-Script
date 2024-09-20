const score = 200

const mynum = new Number(100)

console.log(score);
console.log(mynum);

console.log(score.toString());
console.log(score.__proto__);



console.log(Math.abs(-4))

console.log(Math.random()) //give value between >=0 - <1
console.log(Math.random()+1) //now dont give 0
console.log((Math.random()*10) + 1) //now give value between >=1 - <11
console.log(Math.floor((Math.random()*10)) + 1) //now give value between 1-10 with round-off


const min = 10
const max = 20
console.log(Math.floor((Math.random() * max-min + 1)) + min)