"use strict"


let str = "Welcome to Orange";
console.log(str.toUpperCase()); // "WELCOME TO ORANGE"

console.log(str.substring(8, 10).toUpperCase()); // "TO"

console.log(str.replace("Welcome to", "Hello from")); // "Hello from Orange"

console.log(str.toLowerCase()); // "welcome to orange"

console.log(str.length); // 17

console.log('Welcome to "Orange"'); // 'Welcome to "Orange"'

console.log(str.concat(" Jordan")); // "Welcome to Orange Jordan"

// 2-2

 str = "cactus";
let firstLetter = str[0]; 
let result = str.replace(new RegExp(firstLetter, 'g'), '*').replace('*', firstLetter); //regular expression يعني بدور عتكرارات الحرف الاول 

// g بستبدل كل التكرارات 

console.log(result); 

