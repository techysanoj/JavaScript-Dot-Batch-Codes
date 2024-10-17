console.log("Namaste Sabhi ko kya haal hai");

let a = 10;
console.log("value is: " + a);

const num = 10;
// num = 13; it will show the error assignment to constant variable

let Name = "Babbar";
console.log(Name); // prints Babbar

Name = 10;
console.log(Name); // prints Babbar

console.log(3 + 5); // 8
console.log(5 - 10); // -5
console.log(5 ** 2); // 25

console.log(2 > 3); // false
console.log(3 > 2); // true
console.log(3 ===3); // true
console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log(Name++); // 10
console.log(++Name); // 12

let age = 17;
let sta = (age >= 18) ? 'Yes' : 'No';
console.log(sta); // No

console.log(true || false); // true
console.log(false || 'sanoj'); // sanoj
console.log(true && 'sanoj'); // sanoj;


// IF - ELSE
let marks = 98;
if(marks > 90) {
    console.log('A');
}
else if(marks >= 80) {
    console.log('B');
}
else if(marks >= 70) {
    console.log('C');
}
else {
    console.log('D');
}
// Output = A


// Switch Case
let check = 2;
switch(check) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('Enter a valid number');
}
// B


// Loops

// For Loop
for(let i = 0; i<5; i++) {
    console.log(i);
}
// 0, 1, 2, 3, 4



// While Loop
let i = 0;
while(i < 5) {
    console.log(i);
    i++;
}
//0, 1, 2, 3, 4



// do while loop
let c = 0;
do {
    confirm.log(c);
}while(c <=4);
// 0, 1, 2, 3, 4
