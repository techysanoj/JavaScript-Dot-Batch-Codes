let count = 0;
let inc = document.querySelector('#increment');
let dec = document.querySelector('#decrement');
let cVar = document.querySelector('#counter-var');

function increaseCount() {
    count+=1;
    cVar.textContent = count;
}

function decreaseCount() {
    count--;
    cVar.textContent = count;
}

inc.addEventListener('click', increaseCount);
dec.addEventListener('click', decreaseCount);