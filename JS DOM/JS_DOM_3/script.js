// adding 100 para

const t1 = performance.now();
for(let i = 1; i<=100; i++) {
    let newEl = document.createElement('p');
    newEl.textContent = 'This is para : ' + i;
    // document.body.appendChild(newEl);
}

const t2 = performance.now();
console.log('This took : ' + (t2 - t1) + " time");
// here we took 100 reflow and 100 repaint.

const t3 = performance.now();
// upper code optimized one
let myDiv = document.createElement('div');
for(let i =0; i<=100; i++) {
    let ele = document.createElement('p');
    ele.textContent = 'This is para : ' + i;
    myDiv.appendChild(ele);
}
// document.body.appendChild(myDiv);
// here we took 100 reflow and 1 repaint

// how to measure this
const t4 = performance.now();
console.log('This took : ' + (t4 - t3) + " time");


// updated code using document fragment
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i =1; i<=5; i++) {
    let ele = document.createElement('p');
    ele.textContent = 'This is para : ' + i;
    fragment.appendChild(ele);
}
document.body.appendChild(fragment);
// this took only 1 reflow and 1 repaint
const t6 = performance.now();
console.log('This took : ' + (t6 - t5) + " time");


// Single Threading
function addPara() {
    let para = document.createElement('h3');
    para.textContent = 'JS is Single';
    document.body.appendChild(para);
}
function appendNewMessage() {
    let para = document.createElement('h2');
    para.textContent = 'Kya Haal Hai';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();
// here one by one execution occurs first addPara()
// then appendNewMessage();


// Event Loop
console.log('Hi');
document.body.addEventListener('click', function() {
    console.log('123');
});
console.log('Hello');
// flow will be first 'Hi' prints (goes into call stack) 
//then an entry will be made in browser
// regarding that a eventListener is there for click event
// after that 'Hello' will be made
// the entry which was made in browser for eventListener
// went to Event Queue and this queue will start its execution
// when call stack become empty 


// SetTimeout
setTimeout(function() {
    console.log('Hey timeout function');
}, 4000);
console.log('Hi - use of setTimeout Fucntion');
setTimeout(function() {
    console.log('Hey timeout function 5');
}, 2000);
// here first entry of first timeout function will be made in call stack
// then it will be delievered to webAPI 
// after that it will go to queue in meantime line 80 will be executed using
// call stack
// then second timeout function entry will be made in the call stack then go to WEBAPI.
// overall first 80 - 82 - 78


