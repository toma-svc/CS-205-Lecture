// make an array that we can mess with
const colors = ['red','green','blue'];
// each color in it's own variable
const [first,second, third] = colors;
console.log(colors);
console.log(first);
console.log(second);
console.log(third);

// what if we don't want them all?
const numbers = [10,20,30,40,50,60];
const [firstNumber,,thirdNumber, ,fifthNumber] = numbers;
console.log(firstNumber);
console.log(thirdNumber);
console.log(fifthNumber);
const [,,,,justFifth] = numbers;
console.log(justFifth);

// what if there aren't that many?
// set defaults if that particular position doesn't exist
const [one = -1,two = -1,three = -1] = [1,2];
console.log(one);
console.log(two);
console.log(three);

// my personal favorite us of destructuring arrays: swapping values
let x = 12;
let y = 8;
console.log(`x == ${x} and y == ${y}`);
[x,y] = [y,x];
console.log(`x == ${x} and y == ${y}`);

// objects
const student = {
    id: 108,
    name: "Henry",
    major: "Education"
};

const {id,name,major} = student;
console.log(id);
console.log(name);
console.log(major);

// what if I wanted studentId instead of id?
const {id: studentId,major: major2} = student;
console.log(studentId);
console.log(major2);

const {id: studentID, gpa = 2.5} = student;
console.log(studentID);
console.log(gpa);

// spread syntax
const originalArray = [2,4,6,8,10,12];
console.log(originalArray);
// let's copy that array
const copiedArray = [...originalArray];
console.log(copiedArray);
const firstItem = copiedArray.shift();
console.log(originalArray);
console.log(copiedArray);

// merge arrays
const words = ['One','Two','Three'];
const merged = [...words,...originalArray];
console.log(merged);

// let's add to an existing array
const addedValues = [1,...originalArray,13];
console.log(addedValues);

// now with objects
const copyStudent = {...student};
console.log(student);
console.log(copyStudent);
const studentWithGPA = {...student, gpa: 3.57};
console.log(student);
console.log(studentWithGPA);

// merging objects
const instructor = {
    id: 8,
    firstName: 'Bill',
    exp: 15
};
const mashUp = {...student,...instructor};
console.log(mashUp);

// combining desctructuring and spread
const students = ['Henry','Bill','Mimi','Malone','Reeves'];
const [president,assistant,...rabble] = students;
console.log(president);
console.log(assistant);
console.log(rabble);