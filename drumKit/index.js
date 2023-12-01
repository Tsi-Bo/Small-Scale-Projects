function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function so we can start over when we press fast
  audio.currentTime = 0; //will make it rewind to the start
  audio.play();
  key.classList.add("pressed");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //it will skip if it is not a transform
  this.classList.remove("pressed");
}

const keys = document.querySelectorAll(".key");

//must be forEach because it will not listen to every single items in the Node list 'keys'
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
