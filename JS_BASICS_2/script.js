console.log('JS Basics - 2');

const rectangle = {
    length: 1,
    breadth: 2,
    draw: function() {
        console.log('Area is : ' + this.length * this.breadth);
    }
};

console.log(rectangle); 
console.log(rectangle.draw); // it will print the brackets and all
console.log(rectangle.draw()); // now it will print Area is : 2


// Factory Function

// function createRectange() {
//     let rectangle = {
//         length: 1,
//         breadth: 2,
//         // draw: function() {
//         //     console.log('Area is : ' + this.length * this.breadth);
//         // }
//         draw() {
//             console.log('Area is : ' + this.length * this.breadth);
//         }
//     };
//     return rectangle;
// }
function createRectange(length, breadth) {
    let rectangle = {
        length: length,
        breadth: breadth,
        // draw: function() {
        //     console.log('Area is : ' + this.length * this.breadth);
        // }
        draw() {
            console.log('Area is : ' + this.length * this.breadth);
        }
    };
    return rectangle;
}
// now we will call this funciton and change the values
let rectangle1 = createRectange(3, 5);
console.log(rectangle1.draw());

// to check if any property is present in it or not
if ('color' in rectangle1) {
    console.log('Yes present');
}
else {
    console.log('Not present');
}
// it will print Not Present



// Constructor Function

function Rectangle(len, brea) {
    this.length = len;
    this.breadth = brea;
    this.draw = function() {
        console.log('Area is : ' + this.length * this.breadth);
    }
}
// here only initiallization of the variable are done no necessary to return it
let rec1 = new Rectangle(5, 5);
console.log(rec1.draw());

rec1.height = 10;
console.log(rec1);
rec1.collor = 'Black';
console.log(rec1);

delete rec1.height;
console.log(rec1);

console.log(rec1.constructor); // it will print Rectangle Function
console.log(rec1.constructor.constructor); // it will print inbuilt Constructor Function


let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function() {
        console.log('Area is : ' + this.length * this.breadth);
    }`);

let rect = new Rectangle1(4, 3);
console.log(rect.draw());

console.log(Rectangle1.length);


let check1 = {
    a: 10
};

let check2 = check1;
++check2.a;
console.log(check1.a + " " + check2.a); // it will print 11 11

let a1 = 10;
let a2 = a1;
++a1;
console.log(a1 + " " + a2); // it will print 11 10

let a3 = 10;
function inc(a) {
    a++;
}
inc(a3);
console.log(a3); // it will print 10 not 11 
//because copy is passed not the reference

let a4 = {
    value: 10
};

function inc(a) {
    ++a.value;
}
inc(a4);
console.log(a4.value); // here value is 11 because address is same



// For in Loop
for(let key in rectangle1) {
    console.log(key);
}
// it is used to iterate to all keys present in that object


// For of loop
let arr = [1, 2, 3, 4, 5];
for(let el of arr) {
    console.log(el);
}

// we have converted rectangle1 object into arrays of its keys
for(let key of Object.keys(rectangle1)) {
    console.log(key);
}

// we have converted rectangle1 object into arrays of its entries
for(let key of Object.entries(rectangle1)) {
    console.log(key);
}



// Object Cloning 

// Iteration
let src = {
    value: 10,
    firstName: 'Src1'
};
let dest = {};
for(let key in src) {
    dest[key] = src[key];
}
console.log(dest); // it will print same as src but not same address

//Assign
let dest2 = Object.assign({}, src);
console.log(dest2);

// Spread
let dest3 = {...src};