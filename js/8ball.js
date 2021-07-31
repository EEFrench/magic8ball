//INSERT NAME INTO TOPBAR
const Magic = document.getElementById('MagicAnswer');
Magic.innerText = "Majyk 8 Ball";

//ADD QUESTION INPUT
// const question = document.createElement('input');
// document.body.appendChild(question);
//const input.getElementById(input);

const form = document.createElement('form');
document.body.appendChild(form);


const usernameInput = addInput('input', 'ASK');
const submitButton = addButton('Do you feel Lucky?');

const userInfoElement = document.createElement('div');
const userNameElement = document.createElement('h1');
const phoneNumberElement = document.createElement('p');
const emailElement = document.createElement('p');
const restartButton = document.createElement('button');
document.body.appendChild(userInfoElement);

restartButton.innerHTML = 'Restart';

userInfoElement.appendChild(userNameElement);
userInfoElement.appendChild(restartButton);
userInfoElement.style.display = 'none';

restartButton.addEventListener('click', function() {
    toggleFormUserInfo();
    setInputValues('', '', '');
})




form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username = form[0].value;
  displayUserInfo(username);
  toggleFormUserInfo();
})

function addInput(type, placeholder) {
  const input = document.createElement(type);
  form.appendChild(input);
  input.placeholder = placeholder;
}

function addButton(text){
  const button = document.createElement('button');
  form.appendChild(button);
  button.innerHTML = text;
  return button;
}

function displayUserInfo(username, email, phoneNumber) {
  userNameElement.innerText = username;
}

function setInputValues(username, email, phoneNumber) {
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
img.src = "../img/01.png"; //SELECTS IMAGE
let src = document.getElementById("ball");
src.appendChild(img);

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

