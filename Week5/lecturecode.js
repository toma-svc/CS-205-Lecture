// Variables
let title = "Refactored";
let author = "Sean Rogers";
let yearPublished = 2021;
let isRead = true;
console.log(title); // console.log will print to the default console.
console.log(author);
console.log(yearPublished);
console.log(isRead);

let score = 80;
console.log(score);
// update the variable
score = 95;
console.log(score);
console.log("Did I get here?");

// Data types
let course = "Web Development CS-205";
console.log(course);
let credits = 3;
let gpa = 4.00;
console.log("credits " + credits + " gpa= " + gpa);
let passed = true;
let enrolled = false;
console.log("Did you pass? " + passed);
console.log("Are you enrolled? " + enrolled);
let grade;
console.log(grade);
let middleName = null;
console.log(middleName);

// How do we tell?
console.log(typeof course);
console.log(typeof gpa);
console.log(typeof grade);
console.log(typeof middleName);
console.log(course / credits);
console.log(typeof (course / credits)); // NaN is type number

// Arithmetic Operators
let a = 10;
let b = "5";
console.log(a + b);
console.log(a - b);
console.log( a * b);
console.log(a / b);

// Modulus
console.log(10%2);
console.log(7%2);
console.log(credits%gpa);

// Functions
function greet() {
    let greeting = "Hello World!";
    console.log(greeting);
}

greet();
// console.log(greeting); Gives error because greeting is out of scope
// Parameters
function greet(name = "you"){ // the = "you" sets up a default
    console.log("Hello " + name);
}
greet("Henry");

function add(a,b){
    return a + b;
}
let result = add(4,6);
console.log(result);

// If statements
let age = 19;
if(age >= 18){
    console.log("Adult");
}
// if-else
age=16;
if(age >= 18){
    console.log("Adult");
} else {
    console.log("Minor");
}
// if-else-if
age = 11;
if(age >= 18){
    console.log("Adult");
}else if(age >=13){
    console.log("Teenager");
}else {
    console.log("Child");
}
// Do some decisions
function maxValue(a,b){
    if(a > b){
        return a;
    }
    return b;
}
console.log(maxValue(15,5));
console.log(maxValue(1,5));

// Objects
const book = {
    title: "Zen Golf",
    author: "Dr. Joseph Parent",
    lastRead: 2020,
    isRead: true
};

console.log(book);
console.table(book);
// Individual properties are done with dot notation
///      object .  property
console.log(book.title);
console.log(book.author);
// update property
book.lastRead = 2026; // this is ok
console.log(book.lastRead);
// book = "New book"; this is not ok with const

// Arrays
const colors = ["Red","Blue","Green"];
console.table(colors);
console.log(colors[1]); // accesses the value at index 1

// Loops
for(let i = 0; i < colors.length; i++){  // memorize me!!
    console.log(i + ") " + colors[i] );
}

// Count all the even numbers
const numbers = [1,3,2,8,7,98,42];
let count = 0; // holding variable to hold our answer
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        count++;
    }
}
console.log(count);

// Array of objects
const students = [
    {
        name: "Alice",
        age: 20,
        grade: 65
    },
    {
        name: "Bill",
        age: 19,
        grade: 75
    },
    {
        name: "Henry",
        age: 22,
        grade: 87
    }
];
console.log(students);
console.table(students);
// Process this array of objects
for(let i = 0; i < students.length; i++){
    // console.log(students[i]); // prints whole object
    console.log(students[i].name);
}

// Who has the highest grade?
let topStudent = students[0];
for(let i = 1; i < students.length; i++){
    if(students[i].grade > topStudent.grade){
        topStudent = students[i];
    }
}
console.table(topStudent);