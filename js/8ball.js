//ADD AND SIZE IMAGE TO HTML DOC
let img = document.createElement("img");
img.width=500 //SETS IMAGE SIZE
img.src = "../img/01.png"; //SELECTS IMAGE
let src = document.getElementById("ball");
src.appendChild(img);

//GET IMAGES
image_array = [
    '01.png',
    '02.png',
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

// function eightBall(){
//     //GET RANDOM ARRAY
//     random_answer = Math.floor(Math.random() * image_array.length);
//     //SELECT IMAGE
//     answer = image_array[random_answer]
//     document.getElementById("ball").src = `./img/${answer}`
// }

  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index];
  
    // Display the image
    document.getElementById('image_shower').src = `../img/${selected_image}`
  }

  //.width=500