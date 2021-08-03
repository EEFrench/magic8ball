//INSERT NAME INTO TOPBAR
let Magic = document.getElementById('title');
Magic.innerText = "The Majyk 8 Ball";

let form = document.createElement('form');
document.body.appendChild(form);

//ADD INPUT AND BUTTON
let questionInput = addInput('input', 'ASK');
let submitButton = addButton('Do you feel Lucky?');

//ADD ELEMENTS TO DISPLAY QUESTION
let questionElement = document.getElementById('input');
let repeatQuestion = document.getElementById('MagicAnswer');
let restartButton = document.createElement('button');
document.body.appendChild(questionElement);

//LABEL RESTART BUTTON
restartButton.innerHTML = 'Do you wish to try again??';

//DISPLAY RESTART BUTTON AND ANSWER
questionElement.appendChild(repeatQuestion);
questionElement.appendChild(restartButton);
questionElement.style.display = 'none';

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
  //document.getElementById('ballImage').src = `img/${selectedImage}`;
  //document.getElementById('ballImage').src = './img/01.png'
}

//REMOVE IMAGE FUNCTION
function removeImage(){
  selectedImage.style.display = '';
}

//RESTART FUNCTION
restartButton.addEventListener('click', function() {
  toggleFormUserInfo();
  setInputValues('', '', '');
  removeImage();
})

//SUBMIT QUESTION FUNCTION
form.addEventListener('submit', function(event) {
event.preventDefault();
let question = form[0].value;
displayUserInfo(question);
toggleFormUserInfo();
getRandomImage();
})

//ADD INPUT FUNCTION
function addInput(type, placeholder) {
let input = document.createElement(type);
form.appendChild(input);
input.placeholder = placeholder;
}

//ADD BUTTON FUNCTION
function addButton(text){
let button = document.createElement('button');
form.appendChild(button);
button.innerHTML = text;
return button;
}

//DISPLAY QUESTION ON SCREEN
function displayUserInfo(question) {
repeatQuestion.innerText = question;
}


function setInputValues(question) {
form[0].value = question;
}


function toggleFormUserInfo() {

if (form.style.display === 'none') {
    form.style.display = 'block';
    questionElement.style.display = 'none';
} else {
    form.style.display = 'none';
    questionElement.style.display = 'block';
}

}
