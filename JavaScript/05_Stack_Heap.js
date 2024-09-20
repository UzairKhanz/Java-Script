//stack and heap
//premitive stack (when stack memory is used copy of variable)
//nonpremitive heap (memory in heap refrence of original value if change then change in original value )

let name = "uzair"
let fullname = name //it use stack bacuse its premitive datatype and name variable there is the copy of the name variable above
fullname = "khan"  //so it cant change the the name variable value it change the copy of name variable value

console.log(name);
console.log(fullname);


let user = {                 //it uses heap and when it built it go into heap
    email: "uzair.com",
    id: 123
}
let user2 = user             //there it uses user varuable from heap and its original reference so if change is done then chnage is done in original also 
user2.email = "khan.com"    //here chnage is done then original user variable value of emailis also change

console.log(user);
console.log(user2);