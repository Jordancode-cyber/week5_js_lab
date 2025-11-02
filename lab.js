console.log("Week 5 Lab is running ");
const fruits =["mango", "banana", "guavas", "apples", "apple"];

console.log(fruits[0]); //first
console.log(fruits[fruits.length-1]); //last

fruits.push("apple");
console.log("after push:", fruits);

fruits.pop();
console.log("after pop:", fruits);

fruits.unshift("lemon");
console.log("after unshift:", fruits);

fruits.shift();
console.log("after shift:", fruits);

//Copy vs Cut
const top3 = fruits.slice(0,3);
console.log("top3 (slice):", top3, "original:", fruits);

const removed = fruits.splice(2,1);
console.log("removed (splice):", removed, "now:", fruits);

//Challenge: Normalize
const messy = ["Tea ", "COFFEE", "Milo ", "Juice "];

const clean = messy.map(drink => drink.trim().toLowerCase());
console.log("cleaned:", clean);

//Loops
//B1
for (let i = 0; i < fruits.length; i++) {
console.log(`#${i+1} ${fruits[i]}`);
}

//B2
for (const f of fruits) {
    console.log("fruit:", f);
}

//B3
let n = 10;
while (n>0) {console.log(n); n--; }
console.log("Lift Off!");

//B4-Sum with a loop
const num = [2, 7, 3, 9, 4];
let total = 0;
for (const x of num) total += x;
console.log("total =", total);


//B5 - Counting Evens
let count = 0;
for (const x of num) {
    if (x % 2 === 0) count++;
}
console.log("Even numbers =", count);

//Part C
//C1 map(transform)
const scores = [50, 70, 90];
const percent = scores.map(s => `${s}%`);
console.log(percent);

//C2 filter - selection
const passed = scores.filter(s => s >= 60);
console.log("Passed:", passed);

//C3 reduce -accumulate
//Finding average score using reduce
const sumScores = scores.reduce((acc, curr) => acc + curr, 0);
const avgScore = sumScores / scores.length;
console.log("Average Score:", avgScore);

//C4 Pipeline --challenge
const temp = ["30", " 27 ", "31c", "29 "];
const cel = temp
    .map(temp => Number(temp.trim().replace("c", '')))
    .filter(temp => temp >= 29)
    .map(temp => `${temp}°C`); //Back_sticks for proper string formatting
console.log("Temperatures >= 29°C:", cel);

//Part D - Objects
//D1 Create and Access
const student = {
    id: "stu-1001",
    name: "Asha",
    program: "DIT",
    year: 2,
    contact: { email: "asha@example.com", phone: "+256700000" },
    courses: ["WMD101", "DBS102", "PROG201"],
    gpa: 3.48
};
console.log(student.name);
console.log(student.contact.email);
console.log(student.courses[1]);

//D2 Mutate
student.year = 3;
active: true;
student.courses.push("PMS215");
console.log("New course added:", student.courses);

//D3 Loop through properties
for (const key in student) {
    if (Object.hasOwn(student, key)) {
    console.log(key, ":", student[key]);
    }
}
//via Object.keys:
Object.keys(student).forEach(k => console.log(k, student[k]));

//D4 Array of objects
const inventory = [
    { sku: "A1", name: "USB Cable", price: 7000, qty: 12 },
    { sku: "B2", name: "HDMI Cable", price: 18000, qty: 6 },
    { sku: "C3", name: "Flash Disk", price: 35000, qty: 20 }
];
//Calculating total inventory value
let totalInventoryValue = 0;
for (const item of inventory) {
    totalInventoryValue += item.price * item.qty;
}
console.log("Total Inventory Value:", totalInventoryValue);
//a new array with name UpperCased
const upper_casedNames = inventory.map(item => item.name.toUpperCase());
console.log("UpperCased Names:", upper_casedNames);
//Filtering items with qty <10
const low_stock = inventory.filter(item => item.qty < 10);
console.log("Low Stock Items include:", low_stock);


//D5. Challenge: Index by SKU
//Transforming inventory into an object keyed by sku:
const inventoryBySku = inventory.reduce((acc, item) => {
    acc[item.sku] =item;
    return acc;
}, {});
console.log("Inventory by SKU:", inventoryBySku);

//MiniProject — Student Grades Report
//Given an array of student objects, produce a summary
const students = [
    { id: 1, name: "Asha", scores: { web: 78, db: 66, prog: 82 } },
    { id: 2, name: "Brian", scores: { web: 55, db: 49, prog: 61 } },
    { id: 3, name: "Cathy", scores: { web: 92, db: 88, prog: 95 } },
    { id: 4, name: "Derrick", scores: { web: 40, db: 51, prog: 47 } }
];
//Computing average for each student and overall class average
let classTotal = 0;
students.forEach(student => {
    const total = Object.values(student.scores).reduce((acc, curr) => acc + curr, 0);
    const avg = total / Object.values(student.scores).length;
    classTotal += avg;
    console.log(`${student.name}'s Average Score: ${avg.toFixed(2)}`);
const classAvg = classTotal / students.length;
console.log(`Class Average Score: ${classAvg.toFixed(2)}`);
});

//Adding grade letters using a scale
students.forEach(student => {
    const total = Object.values(student.scores).reduce((acc, curr) => acc + curr, 0);
    const avg = total / Object.values(student.scores).length;
    let grade;
    if (avg >= 80) {
        grade = 'A';
    } else if (avg >= 70) {
        grade = 'B';
    } else if (avg >= 60) {
        grade = 'C';
    } else if (avg >= 50) {
        grade ='D';
    } else {
        grade = 'F';
    }
    student.average = avg;
    student.grade = grade;
});
console.log("Students with corresponding grades:", students);

//Students passed with an average of >=60
const studentsWhoPassed = students.filter(student => {
    const total = Object.values(student.scores).reduce((acc, curr) => acc + curr, 0);
    const avg = total / Object.values(student.scores).length;
    return avg >= 60;
});
console.log("Students who passed:", studentsWhoPassed.map(s => s.name));

//Printing a formatted report
console.log("Students final report:");
students.forEach(student => {
    console.log(`Name: ${student.name} -- avg: ${student.average.toFixed(2)} (${student.grade})`);
});

//Stretch Goals (Optional)
//A function groupBy(arr, key) that groups an array of objects by a property
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const keyValue = obj[key];
        if (!acc[keyValue]) {
            acc[keyValue] = [];
        }
        acc[keyValue].push(obj);
        return acc;
    }, {});
}
const groupedByGrade = groupBy(students, 'grade');
console.log("Students grouped by grade:", groupedByGrade);

//Deep clone an object without reference sharing using structuredClone
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);
clone.b.c = 42;
console.log("Original after modifying clone:", original);
//JSON.parse(JSON.stringify(obj)) (with caveats)
const jsonClone = JSON.parse(JSON.stringify(original));
jsonClone.b.c = 99;
console.log("Original after modifying JSON clone:", original);

//Array.from({length: 10}, (_, i) => i+1) to generate data for loops
const oneToTen = Array.from({ length: 10 }, (_, i) => i + 1); //used to calculate the actual value for that position
//specified length creates array items for only 10 slots
console.log("Array from 1 to 10:", oneToTen);

//Some values may not be displayed in the console due to environment limitations
//Some of the meanings may be 
//[ { ... } ] (Low Stock Items)
//[ ] -- This indicates an empty array
//{ ... } -- Elements inside an array are objects

//This lab covers some basic principles of javaScript from beginner concepts to intermediate concepts.
//It's a well balanced well as it tackles one or more new concepts that challenge one to think.