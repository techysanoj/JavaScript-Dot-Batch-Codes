// Question - 1
// Synchrnous Code
// function sync() {
//     console.log('First');
// }
// sync();
// console.log('Second');
// // output : First Second

// console.log('Aysnc Code: ---')
// Question 2
// setTimeout(function() {
//     console.log('Third');
// }, 2000);
// sync();
// console.log('Second');
// here output: first second third.
// because setTimeout function is async function
// which will go to browserAPI, then queue then call stack


// Promises
// let mPromises = new Promise(function(resolve, reject) {
//     // console.log('I am inside Promise');
//     setTimeout(function() {
//         console.log('I am inside promise');
//     }, 10000);
//     resolve(124);
//     // reject (new Error('Error is here'));
// });
// console.log('First');

// Two promises
// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise : 1');
//     }, 5000);
//     resolve(124);
// });
// let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise : 2');
//     }, 3000);
//     resolve(1244);
// });
// here parallely we are running these two promises.


// then() and catch()
// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise : 1');
//     }, 5000);
//     // resolve(124);
//     // reject (new Error('New error'));
// });
// promise1.then((value) => {console.log(value)});// it will print 124
// promise1.catch((error) => {console.log('Error')}); // it will print the error
// // we can also write in then also
// promise1.then((value) => {console.log(value)} , (error) => {console.log('Received an Error')});
// let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log('I am inside promise : 2');
//     }, 3000);
//     resolve(1244);
// });
// promise2.then((value) => {console.log(value)});// it will print 1244
// promise2.catch((error) => {console.log('Error')});


// how to run t1 -> t2 -> t3
// let w1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('SetTimeout started: 1')
//     }, 2000);
//     resolve(true);
// })
// // uses Event Loop to run these lines of code
// w1.then(() => {
//     let w2 = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             console.log('SetTimeout started: 2');
//             resolve('w2 resolved');
//         }, 3000);
//     })
//     return w2; // this promise is returned.
// }).then((value) => {console.log(value)});


// async await function
// async function abcd() {
//     return 7;
// }
// console.log(abcd()); // this will return a promise

// async function getWheather()
// {
//     let dW = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('DELHI MAI GARMI HAI');
//         }, 1000);
//     });

//     let hyd = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hyderabad MAI GARMI Nahi HAI');
//         }, 5000);
//     });

//     // let dMausam = dW;
//     // let hMausam = hyd;
//     // return [dMausam, hMausam];
//     // these promises are running parallely.
//     // if we want to wait for another there we use await
//     let dMausam = await dW;
//     let hMausam = await hyd;
//     return [dMausam, hMausam];
// }
// console.log(getWheather());


// Fetch API
// async function utility() {
//     // here we are fetching the url.
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     // fetch('URL', [options]);
//     // these options contains some kind of authenitcation
//     let output = await content.json(); // here content was promise which
//     // is converted to json format
//     // json a kind of key value pair format (object in JS).
//     // JSON - javascript object notation.
//     console.log(output);
// }
// utility();

// checking with an image example
// async function getImage() {
//     let img = await fetch('https://picsum.photos/200');
//     // let output = await img.json();
//     console.log(img);
//     let imgDiv = document.createElement('img');
//     imgDiv.src = img.url;
//     document.body.appendChild(imgDiv);
// }
// getImage();


// POST method to send data
// async function helper() {
//     let options = {
//         method: 'POST',
//         // this body is converted into js to js string.
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
//     // sending the data to the link
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }
// utility();


// Closure
function init() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
        //output will be mozilla
        // displayName() is a function which forms closure
        // here name is accessed which is a outer function variable
    }
    return displayName;
}
let fun1 = init();
fun1();
// here when fun1 is called it should have print undefined value 
// because let name is only scoped inside init function block
// and we are returning this which get stored in fun1 variable
// but the mozilla is printed because of closure property
// means name variable value is stored in the context with reference 
// so that execution will not be stopped