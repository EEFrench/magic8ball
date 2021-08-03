//INSERT NAME INTO TOPBAR
let Magic = document.getElementById('title');
Magic.innerText = "The Majyk 8 Ball";

//ARRAY OF IMAGE IDs
ballImageArray = [
    './img/03.png',
    './img/04.png',
    './img/05.png',
    './img/06.png',
    './img/07.png',
    './img/08.png',
    './img/09.png',
    './img/10.png',
    './img/11.png',
    './img/12.png',
    './img/13.png',
    './img/14.png',
    './img/15.png',
    './img/16.png',
    './img/17.png',
    './img/18.png',
    './img/19.png',
    './img/20.png',
    './img/21.png',
    './img/22.png',
    './img/23.png'
]


let start = document.getElementById('start');
start.src = './img/01.png';


const ask = document.querySelector('label');
ask.innerHTML = ' ';


const input = document.querySelector('input');

const button = document.querySelector('#button');
button.innerHTML = 'Do you feel Lucky?';
button.addEventListener('click', function() {

    if (input.value < 1) {
        start.src = './img/02.png';
        ask.innerHTML = 'THAT...  is not a Question!';
        
}   else {
    spin();
    setTimeout(hideAll, 600);
    
}});


const button2 = document.querySelector('.button');
button2.innerHTML = 'Do you wish to ask again?';
button2.style.display = 'none';
button2.addEventListener('click', function () {
    returnAll();
})


function hideAll() {
    input.style.display = 'none';
    button.style.display = 'none';
    button2.style.display = 'block';
    ask.innerHTML = input.value;
    start.src =ballImageArray[Math.floor(Math.random() *ballImageArray.length)];
}


function returnAll() {
    ask.innerHTML = ' ';
    input.style.display = 'block';
    input.value = '';
    button.style.display = 'block';
    start.src = './img/01.png';
    button2.style.display = 'none';
}


function spin() {
    start.src = './img/blur1.png';
    start.classList.add('spin');
    
    setTimeout(function() {
        start.classList.remove('spin');
    }, 1000);
    
}
