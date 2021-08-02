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
  get_random_image();
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

//ADD INITIAL IMAGE TO HTML DOC
//let img = document.createElement("img");
//img.src = "../img/01.png" //SELECTS IMAGE
//let src = document.getElementById("ball");
//src.appendChild(img);

//ARRAY OF IMAGE IDs
// ballImage_array = [
//     '../img/03.png',
//     '../img/04.png',
//     '../img/05.png',
//     '../img/06.png',
//     '../img/07.png',
//     '../img/08.png',
//     '../img/09.png',
//     '../img/10.png',
//     '../img/11.png',
//     '../img/12.png',
//     '../img/13.png',
//     '../img/14.png',
//     '../img/15.png',
//     '../img/16.png',
//     '../img/17.png',
//     '../img/18.png',
//     '../img/19.png',
//     '../img/20.png',
//     '../img/21.png',
//     '../img/22.png',
//     '../img/23.png'
// ]
ballImage_array = [
  '03.png',
  '04.png',
  '05.png',
  '06.png',
  '07.png',
  '08.png',
  '09.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png',
  '14.png',
  '15.png',
  '16.png',
  '17.png',
  '18.png',
  '19.png',
  '20.png',
  '21.png',
  '22.png',
  '23.png'
]

//GET IMAGE FUNCTION
function get_random_image(){
  // GET RANDOM NUMBER
  random_index = Math.floor(Math.random() * ballImage_array.length);
  // GET RANDOM BALL IMAGE
  selected_image = ballImage_array[random_index];
  // DISPLAY BALL IMAGE
  document.getElementById('ballImage').src = `./img/${selected_image}`
  //document.getElementById('ballImage').src = `${selected_image}`
}

//REMOVE IMAGE FUNCTION
function removeImage(){
  let remove = document.getElementById('ballImage');
  remove.removeChild(remove.childNodes[0]);
}
