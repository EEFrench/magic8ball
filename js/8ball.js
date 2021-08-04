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

Magic = [
  './sounds/Wizard10thLevel.wav',
  './sounds/WizardCastSpell.wav',
  './sounds/WizardDeciding.wav',
  './sounds/WizardEnterCombat.wav',
  './sounds/WizardFindingSomething.wav',
  './sounds/WizardGoFlag.wav',
  './sounds/WizardSeeHostile.wav',
  './sounds/WizardUpLevel.wav'
]

//ADD STARTING IMAGE
let start = document.getElementById('start');
start.src = './img/01.png';

//ADD LINE FOR REPEAT OF QUESTION IN TOPBAR
const ask = document.querySelector('label');
ask.innerHTML = ' ';

//FUNCTION TO FORCE A QUESTION, AND SPIN THE BALL FOR ANSWER
button.addEventListener('click', function() {

    if (input.value < 1) {
        laugh();
        start.src = './img/blur2.png';
        ask.innerHTML = 'THAT...  is not a Question!';
        spin2();
}   else {
    spin();
    start.src = './img/02.png';
    setTimeout(hideAll, 150);
    
}});

//HIDE RETURN BUTTON
button2.style.display = 'none';
button2.addEventListener('click', function () {
    reset();
})

//FUNCTION HIDE MAIN BUTTON & INPUT, AND PUT QUESTION IN TOPBAR
function hideAll() {
    input.style.display = 'none';
    button.style.display = 'none';
    button2.style.display = 'block';
    ask.innerHTML = input.value;
    start.src =ballImageArray[Math.floor(Math.random() *ballImageArray.length)];
}

//FUNCTION TO RESET TO RESET TO STARTING SCENE
function reset() {
    ask.innerHTML = ' ';
    input.style.display = 'block';
    input.value = '';
    button.style.display = 'block';
    start.src = './img/01.png';
    button2.style.display = 'none';
}

//ADD SPIN EFFECT TO MAIN 8BALL
function spin() {
    start.src = './img/blur2.png';
    start.classList.add('spin');
    
    setTimeout(function() {
        start.classList.remove('spin');
    }, 1000);
    
}

//ADD SPIN TO MORTIS BALL
function spin2() {
  start.src = './img/02.png';
  start.classList.add('spin2');
  
  setTimeout(function() {
      start.classList.remove('spin2');
  }, 1000);
  
}

//SET THE lAUGH SOUND FILE
function laugh() {
    var audio = new Audio('sounds/VPLaugh.mp3');
    audio.play();
    
  }


//   function speak() {
//     var audio = new Audio(randomSpeak);
//     audio.play();
    
//   }

//   //GET SPEAK FUNCTION
// function getRandomSound(){
//   let randomSpeak = Math.floor(Math.random() * Magic.length);
//   //let talk = Magic[randomSpeak];
// }

//  //start.src = Magic[Math.floor(Math.random() * Magic.length)];