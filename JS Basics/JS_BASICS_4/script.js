console.log('JS_BASICS_4');

function run() {
    console.log('running....');
}
// function need to be called or invoked to make it run
run();

// if we use run() before declaration of it. It will not give me any error.
// because JS Engine makes all function or declaration to go up.
// Process is known as Hoisting
// Hoisting is the process of moving function declaration to the top of files.


// Function assignment
let stand = function walk() {
    console.log('Walking..');
} 
// here stand is a function which has been assigned walk
stand();
// Here hoisting is not used in this
// it is known as named function assingmend

// anonymous function assingment
let walking = function() {
    console.log('Walking...');
};
walking();


// Dynamic Typing in function
function sum(a, b) {
    console.log(arguments);
    // here extra parameters are stored in arguments
    // and it is available in form of objects.
    let total = 0;
    for(let val of arguments) {
        total += val;
    }
    return total;
}
console.log(sum(3, 4)); // 7
console.log(sum(1)); // undefined
console.log(sum()); // NaN
console.log(sum(1, 3, 10, 11, 12)); // 37
// means here we do not need to write any parameters seperately because
// it will be managed at the time of runtime, stored in arguments.
// This object is known as special object - arguments.


// Rest Operator (...)
function sum1(...args) {
    console.log(args);
}
sum1(1, 2, 3, 4, 5); // it will print the arrays

function sum2(num, ...args) {
    console.log(args);
}
sum2(1, 2, 3, 4, 5, 6); // args will stored from 2 - 6. 1 will be stored at num;
// and we can not use extra parameter after ...args .


// Default Parameters
function interest(p, r, y) {
    return p*r*y/100;
}
console.log(interest(1000, 10, 5));
// here like lets say default value of r = 5
// then we can write it as
function interest1(p, r = 5, y=5) {
    return p * r * y / 100;
}
console.log(interest1(1000));


// Getter - to access properties
// Setter - to change or mutate properties
let person = {
    fName : 'Sanoj',
    lName : 'Kumar',
    get fullName() {
        return `${person.fName} ${person.lName}`;
    },
    
    set fullName(value) {
        if(typeof value != 'string') {
            // this line will throw the error and will be catched using catch code
            throw new Error ('You have entered wrong value');
        }
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }

};
// function fullName() {
//     return `${person.fName} ${person.lName}`;
// }
// console.log(fullName()); 
// here fullName function will be used as getter function
person.fullName = 'Kumar Sanoj';
console.log(person.fullName);

try {
    person.fullName = 'Techy Sanoj';
}
catch(e) {
    // console.log(e);
    alert(e);
    alert('You have entered wrong full name');
}
console.log(person.fullName);


// Scope
{
    let a = 5;
    console.log(a);
}
// console.log(a); // it will show error

function talk() {
    var ab = 5;
    // this var variable is only scoped in this function
}
// console.log(ab);// it will throw error 

if(true) {
    var summation = 0;
    let check = 0;
}
console.log(summation); 
// it will not show error because sum is not defined in any function

// console.log(check); // it will show error

// for(let i = 0; i<10; i++) {

// }
// console.log(i);// it will show error

for(var i = 0; i<10; i++) {

}
console.log(i); // it will not show any error because var is used

const b = 1000000;
function c() {
    const b = 10;
    // it will not give error becausse this b is scoped inside this funcitons
}
console.log(b); // it will not give error
