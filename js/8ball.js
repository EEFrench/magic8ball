//ADD AND SIZE IMAGE TO HTML DOC
const img = document.createElement("img");
img.width=500 //SETS IMAGE SIZE
img.src = "../img/01.png"; //SELECTS IMAGE
const src = document.getElementById("ball");
src.appendChild(img);

