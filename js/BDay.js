const letters = document.querySelectorAll("li");

    setTimeout(() => {
        Array.from(letters).forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.toggle("show");
            }, index + 150);
        })
    }, 1000);

const button = document.querySelector("#button");
const icon = document.querySelector("#button > i");
const audio = document.querySelector("audio");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.volume = 0.2;
    audio.play();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
  }
  button.classList.add("fade");
});
