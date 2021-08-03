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


//GET IMAGE FUNCTION
function getRandomImage(){
  let randomIndex = Math.floor(Math.random() * ballImageArray.length);
  let selectedImage = ballImageArray[randomIndex];
  document.getElementById('ballImage').src = selectedImage;
}

// Used getElementByID for the image. Started with the extra image (looks better than start to me personally)

const start = document.getElementById('start');
start.src = './img/01.png';
//start.style.width = '400px';

// Used querySelector for the remaining variables

const ask = document.querySelector('label');
ask.innerHTML = 'Ask me anything!';
ask.style.fontSize = '36px';

const input = document.querySelector('input');

// First button has an click event where it will perform a function created below that hides all elements except the image. The event also changes the source of the image to a random one from the list of 20. This button will throw an alert out if you attempt to press it without entering anything into the input field.

const button = document.querySelector('#button');
button.innerHTML = 'Do you feel Lucky?';
button.addEventListener('click', function() {

    if (input.value < 1) {
        alert('Please ask a question!');
}   else {
    shake();
    getRandomImage
    //ask.innerHTML = response[Math.floor(Math.random() * response.length)];
    setTimeout(hideAll, 2000);
    
}});

// This is the second button. It starts out being hidden, but will appear after the first button is pressed. This button has an event that will perform a function created below that will return all elements to their starting positions.

const button2 = document.querySelector('.button');
button2.innerHTML = 'Try again?';
button2.style.display = 'none';
button2.addEventListener('click', function () {
    returnAll();
})


// hideAll will hide the original buttons, but will allow the Try Again button to appear. It also changes the label to display the input value.

function hideAll() {
    input.style.display = 'none';
    button.style.display = 'none';
    button2.style.display = 'block';
    ask.innerHTML = input.value;
    start.src =ballImageArray[Math.floor(Math.random() *ballImageArray.length)];
}

// returnAll will return all the original buttons, but will hide the Try Again button. It also displays the original start image of the magic 8 ball and will delete the contents of the input field from before.

function returnAll() {
    ask.innerHTML = 'Ask me anything!';
    input.style.display = 'block';
    input.value = '';
    button.style.display = 'block';
    start.src = './img/01.png';
    button2.style.display = 'none';
}

// function that will add a class that will animate the magic 8 ball, but after 2 seconds, it will be removed.

function shake() {
    start.classList.add('shake');

    setTimeout(function() {
        start.classList.remove('shake');
    }, 2000)
}


// //REMOVE IMAGE FUNCTION
// function removeImage(){
//   selectedImage.style.display = '';
// }

// //RESTART FUNCTION
// restartButton.addEventListener('click', function() {
//   toggleFormUserInfo();
//   setInputValues('', '', '');
//   removeImage();
// })

// //SUBMIT QUESTION FUNCTION
// form.addEventListener('submit', function(event) {
// event.preventDefault();
// let question = form[0].value;
// displayUserInfo(question);
// toggleFormUserInfo();
// getRandomImage();
// })

// //ADD INPUT FUNCTION
// function addInput(type, placeholder) {
// let input = document.createElement(type);
// form.appendChild(input);
// input.placeholder = placeholder;
// }

// //ADD BUTTON FUNCTION
// function addButton(text){
// let button = document.createElement('button');
// form.appendChild(button);
// button.innerHTML = text;
// return button;
// }

// //DISPLAY QUESTION ON SCREEN
// function displayUserInfo(question) {
// repeatQuestion.innerText = question;
// }


// function setInputValues(question) {
// form[0].value = question;
// }


// function toggleFormUserInfo() {

// if (form.style.display === 'none') {
//     form.style.display = 'block';
//     questionElement.style.display = 'none';
// } else {
//     form.style.display = 'none';
//     questionElement.style.display = 'block';
// }

// }
