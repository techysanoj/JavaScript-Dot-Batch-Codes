// get the element 

let h2Tag = document.querySelector('.h2-tag');

console.log(h2Tag);

console.log(h2Tag.innerHTML);

h2Tag.innerHTML = ' ';
console.log(h2Tag.innerHTML);


let com = document.querySelector('.h3-tag');
console.log(com);
console.log(com.innerHTML);
console.log(com.outerHTML);
console.log(com.textContent);
console.log(com.innerText); // it shows only the non-hidden content as a text

let newElement = document.createElement('h4');
com.appendChild(newElement);
console.log(com);

newElement.textContent = 'Hello How ARE YOU?'


newElement.style.color = 'red';

newElement.style.cssText = 'color: green; background-color: yellow; font-size:2em;';

newElement.setAttribute('style', 'color: green; background-color: yellow; font-size:2em;');
newElement.setAttribute('class','h1-tag');

console.log(newElement.className); // it will result string of class Names of that element
console.log(document.body.classList);
