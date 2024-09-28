
let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];

console.log(arr1+arr2+arr3);


 arr1 = ["Cecilie", "Lone"];
 arr2 = ["Emil", "Tobias", "Linus"];
 arr3 = ["Robin", "Morgan"];
let arr4=arr1.concat(arr2,arr3);
console.log(arr4);


    let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
fruits8.splice(2,3);
fruits=fruits8
console.log(fruits,"splice");



function std(name1,age,major){
    this.name=name1;
    this.age1=age;
    this.major=major;
}
let omar= new std("omar",22,"SW")

std.prototype.std_number = null;
std.prototype.std_email = null;
omar.std_email="bnm,@jnkm,l";
console.log(omar);



// Create an object represents you
// have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
function me(fName,lName,age,DOB,favoriteFood,favoritMovie){
    this.fName=fName;
    this.lName=lName;
    this.age=age;
    this.DOB=DOB;
    this.favoriteFood=favoriteFood;
    this.favoritMovie=favoritMovie;
   
}
 me= new me("mays","alkhakik",22,"15/8/2002","beryani","locy")

console.log(me);


// let me = {
//     firstName: "Sultan",
//     lastName: "Bassam",
//     age: "26",
//     dob: "11-aug-1999", 
//     favoriteFoods: ["Pizza", "Sushi", "Pasta"], 
//     favoriteMovies: ["Inception", "The Matrix", "Interstellar", "The Dark Knight"] 
//   };

//   console.log(me);


const persons = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Alex', lastName: 'Smith' },
    { firstName: 'Alice', lastName: 'Johnson' },
    { firstName: 'Thor', lastName: 'Odinson' },
    { firstName: 'Soso', lastName: 'Maness' }
  ];
  
  function firstName(persons) {
    return persons.map(person => person.firstName);
  }
  
  console.log(firstName(persons)); // Output: ['John', 'Alex', 'Alice', 'Thor', 'Soso']
  