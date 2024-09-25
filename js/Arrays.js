"use strict"


// ["Coding", "Academy", "By", "Orange", "Jordan"]
let arr = ["Coding", "Academy", "By", "Orange"];
arr.push("Jordan");
console.log(arr); 


// ["Coding", "Academy"]
 result = arr.slice(0, 2);
console.log(result); 


// ["Welcome", "To", "Coding", "Academy", "By", "Orange"]
arr = ["Coding", "Academy", "By", "Orange"];
arr.unshift("Welcome", "To");
console.log(arr); 


// ["Academy", "By", "Orange"]
arr = ["Coding", "Academy", "By", "Orange"];
 result = arr.slice(1);
console.log(result); 

// "Coding Academy By Orange"
 arr = ["Coding", "Academy", "By", "Orange"];
 result = arr.join(" ");
console.log(result); 

// ["Coding", "Academy", "By", "Orange"]
 arr = ["Coding", "Academy", "By", "Orange"];
console.log(arr); 

// ["Coding", "Orange"]
 arr = ["Coding", "Academy", "By", "Orange"];
 result = [arr[0], arr[arr.length - 1]];
console.log(result); 




// 3-2

//  Remove the last item from the vegetable array.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log(vegetables,"*************Remove the last item from the vegetable array."); 

//  Remove the first item from the fruit array.

fruit.shift();
console.log(fruit,"*********** Remove the first item from the fruit array."); 


// Find the index of "orange."
var fruit1 = ["banana", "apple", "orange", "watermelon"];
var orangeIndex = fruit1.indexOf("orange");
console.log(orangeIndex,"***********Find the index of orange."); 


//  Add that number to the end of the fruit array.

fruit.push(orangeIndex);
console.log(fruit,"***********Add that number to the end of the fruit array."); 

//  Find the length of the vegetable array.

var vegetableLength = vegetables.length;
console.log(vegetableLength,"***********Find the length of the vegetable array.");

//  Add that number to the end of the vegetable array.

vegetables.push(vegetableLength);
console.log(vegetables,"***************Add that number to the end of the vegetable array."); 

// Put the two arrays together into one array. Fruit first. Call the new array "food".

var food = fruit.concat(vegetables);
console.log(food,"*********Put the two arrays together into one array. Fruit first. Call the new array food."); 

//  Remove 2 elements from your new array starting at index 4.

food.splice(4, 2);
console.log(food ,"*******Remove 2 elements from your new array starting at index 4."); 

//  Reverse your array.

food.reverse();
console.log(food,"******Reverse your array."); 

//  Turn the array into a string.

var foodString = food.join(", ");
console.log(foodString ,"********Turn the array into a string."); 



