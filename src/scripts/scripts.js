/*
* Array = []
* Dictionary = {k: v, k: v}
*/

let user = new Object(); // Constructor syntax
user = {}; // "literal" syntax
user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30,        // by key "age" store value 30
    "likes birds": true,
    isAdmin: true
}; 

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // brackets allow you to concatenate strings with a string from a defined variable
};

let obj = {
    0: "test"
};

let key = "name";

for(let k in user) {
    console.log(k + ":" + user[k]);
}

console.log(key in user);
console.log(user.name, user.age, user["name"], user["age"]);
console.log(user["likes birds"]);
console.log(user);
console.log(bag.appleComputers);
console.log(obj[0], obj["0"]);