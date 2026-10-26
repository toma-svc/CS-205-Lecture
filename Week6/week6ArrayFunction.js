const students = [
    {name: 'Alice', grade: 92},
    {name: 'Bob', grade: 76},
    {name: 'Charlie', grade: 88},
    {name: 'Dana', grade: 65},
    {name: 'Ethan', grade: 98}
];

console.log("Original Array:")
console.log(students);

// Add an element to the end of the array
const newStudent = {name: 'Barney', grade: 87}; // creates a new object
students.push(newStudent); // push adds the item to the end of the array.

console.log(students);
// remove the last element
const removedStudent = students.pop();
console.log(removedStudent);
console.log(students);

// add element to start of array
students.unshift(newStudent);
console.log(students);

// remove the first element
const firstStudent = students.shift();
console.log(firstStudent);
console.log(students);

// array functions: forEach
// print out the name of each student
students.forEach((person) => {
    console.log(person.name);
})
students.forEach(student => {
    console.log(`${student.name} has a grade of ${student.grade}`);
})

// let's use map to create an array of student names
const names = students.map(student => {return student.name});
console.table(names);
console.log(names);
const namesIndex = students.map((student,i) => {
    return student.name + ' is at index ' + i;
})
console.log(namesIndex);

const curvedGrades = students.map(student => {return student.grade * 5});
console.log(curvedGrades);

// let's see who is passing
const passingStudents = students.filter(student => {return student.grade >= 70});
console.log(passingStudents);
const aStudents = students.filter(student => {return student.grade >= 90});
console.log(aStudents);
const aStudentsAdjusted = students.filter(student => {
    let currentGrade = student.grade;
    currentGrade += 5;
    // if grade exceeds 100, set it back to 100
    if(currentGrade > 100){
        currentGrade = 100;
    }
    return currentGrade >= 90;
})
console.log(aStudentsAdjusted);

// find me a student that needs help (less than 70)
// let's add another
const belowStudent = {name: 'Tom', grade: 55};
students.push(belowStudent);
const firstBelow = students.find(student => {
    return student.grade < 70;
});
console.log(firstBelow);
console.log(students);

// are they all passing?
const allPassing = students.every(student => {
    return student.grade >= 70;
});
console.log(allPassing);
const allBetterThanHalf = students.every(student => {
    return student.grade >= 50;
})
console.log(allBetterThanHalf);
// anyone acing this class?
const isAcing = students.some(student => {
    return student.grade == 100;
})
console.log(isAcing);
// anyone failing this course (less 60)
const areFailing = students.some(student => {
    return student.grade < 60;
})
console.log(areFailing);
// what is the average grade for all students?
const averageGrade = students.reduce((sum,student) => {
    return sum += student.grade;
},0) / students.length;
console.log(averageGrade);
// let's do bosco
const nameParts = ['bosco','p.','soultrain'];
const fullName = nameParts.reduce((reducer,part) => {
    return reducer + ' ' + part.substring(0,1).toLocaleUpperCase() + part.substring(1);
},'');
console.log(fullName.trim());

// let's create an array of student names that are passing (above 70)
const studentsPassing = students
    .filter(student => {return student.grade >= 70})
    .map(student => {return student.name});
// ^^^^ this is called method chaining
console.log(studentsPassing);

