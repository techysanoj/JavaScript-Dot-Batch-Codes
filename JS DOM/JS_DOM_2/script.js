// Adding Event Listener
let btn = document.querySelector('.button-new');
console.log(btn);
let cntClick = 0;
function buttonClicked() {
    console.log('You just click the button');
    if(cntClick % 2 == 0) {
        btn.style.background = 'yellow';
    }
    else {
        btn.style.background = 'red';
    }
    let childCreated = document.createElement('h1');
    childCreated.innerText = 'Hello Guys';
    // btn.appendChild(childCreated);
    cntClick++;
}
btn.addEventListener('click', buttonClicked);


// Removing EventListener
// btn.removeEventListener('click', buttonClicked);


// Event Object
const content = document.querySelector('#wrapper');

content.addEventListener('click', function(event) {
    console.log(event);
});
// here event is an object


// Preventing Default Action
let link = document.querySelector('a');
console.log(link);

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Heheh');
});


// Avoid too many Div
// let myDiv = document.createElement('div');
// function paraStatus(event) {
//     // here we are accessing individual paragraph
//     console.log('Para ' + event.target.textContent);
//     // console.log('I have clicked on para');
// }
// myDiv.addEventListener('click', paraStatus);
// for(let i = 0; i<=100; i++) {
//     let newEle = document.createElement('p');
//     newEle.textContent = 'This is para : ' + i;
    // newEle.addEventListener('click', function(event) {
    //     console.log('I have clicked on para');
    // });

    // as this eventListener is on 100 paragraph 
    // we can add this on the div also 
    // but we lose the individual access
    // now here phases works
    // newEle.addEventListener('click', paraStatus);
//     myDiv.appendChild(newEle);
// }
// these event Listeners are creating new object for every event
// create the function outside
// let bdy = document.querySelector('body');
// bdy.appendChild(myDiv);

// event.target property may occur problem
let element = document.querySelector('#wrapper-1');
element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click : ' + event.target.textContent);
    }
});
