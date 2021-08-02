//<<--ORIGINAL TEMPLATE-->>
//INSERT NAME INTO TOPBAR
let Magic = document.getElementById('MagicAnswer');
Magic.innerText = "The Majyk 8 Ball";

//ADD QUESTION INPUT
// const question = document.createElement('input');
// document.body.appendChild(question);
//const input.getElementById(input);

let form = document.createElement('form');
document.body.appendChild(form);

//ADD INPUT AND BUTTON
let questionInput = addInput('input', 'ASK');
let submitButton = addButton('Do you feel Lucky?');



//ADD ELEMENTS TO DISPLAY QUESTION
let userInfoElement = document.getElementById('input');
let userNameElement = document.createElement('h1');
let restartButton = document.createElement('button');
document.body.appendChild(userInfoElement);

//CREATE RESTART BUTTON
restartButton.innerHTML = 'Restart';

//DISPLAY RESTART BUTTON
userInfoElement.appendChild(userNameElement);
userInfoElement.appendChild(restartButton);
userInfoElement.style.display = 'none';


restartButton.addEventListener('click', function() {
    toggleFormUserInfo();
    setInputValues('', '', '');

})

form.addEventListener('submit', function(event) {
  event.preventDefault();
  let username = form[0].value;
  displayUserInfo(username);
  toggleFormUserInfo();
  get_random_image();
})

function addInput(type, placeholder) {
  let input = document.createElement(type);
  form.appendChild(input);
  input.placeholder = placeholder;
}

function addButton(text){
  let button = document.createElement('button');
  form.appendChild(button);
  button.innerHTML = text;
  return button;
}

function displayUserInfo(username) {
  userNameElement.innerText = username;
}

function setInputValues(username) {
  form[0].value = username;
}

function toggleFormUserInfo() {

  if (form.style.display === 'none') {
      form.style.display = 'block';
      userInfoElement.style.display = 'none';
  } else {
      form.style.display = 'none';
      userInfoElement.style.display = 'block';
  }
 
}

//ADD INITIAL IMAGE TO HTML DOC
let img = document.createElement("img");
img.src = "../img/01.png" //SELECTS IMAGE
//let src = document.getElementById("ball");
//src.appendChild(img);

//ARRAY OF IMAGE IDs
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



//FUNCTIONS
  function get_random_image(){
    // GET RANDOM NUMBER
    random_index = Math.floor(Math.random() * ballImage_array.length);
    // GET RANDOM BALL IMAGE
    selected_image = ballImage_array[random_index];
    // DISPLAY BALL IMAGE
    document.getElementById('image_shower').src = `../img/${selected_image}`

  }

