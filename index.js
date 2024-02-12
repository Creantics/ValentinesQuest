const imageList = document.querySelectorAll("section.screen div.img-container");
const chatList = document.querySelectorAll(".chatText");
const character = document.querySelector(".character");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");
const startScreen = document.getElementById("start");
const scene1 = document.getElementById("scene1");
const scene1Text = document.getElementById("scene1Text");
const startSound = document.getElementById("startSound");
const clickSound = document.getElementById("clickSound");
const backgroundMusic = document.getElementById("bgMusic");
backgroundMusic.volume = .1;


let index = 0;
let chatIndex = 0;
// To align with index starting at 0
let frameLimit = imageList.length - 1;

const keyHandler = (e) => {
  const characterLocationValue = parseInt(character.style.left, 10);

  if (e.key === "ArrowRight") {
    character.style.left = characterLocationValue + 15 + "px";
  }

  if (e.key === "ArrowLeft") {
    character.style.left = characterLocationValue - 15 + "px";
  }

  // Next Screen
  if (
    characterLocationValue > imageList[index].offsetWidth &&
    index !== frameLimit
  ) {
    character.style.left = 0;
    imageList[index].classList.add("hidden");
    index++;
    imageList[index].classList.remove("hidden");
  }

  // Prevent going back a screen
  if (characterLocationValue < 0) {
    character.style.left = 0;
  }

  console.log(imageList[index].offsetWidth, "THIS SHIT");
};
document.addEventListener("keydown", (e) => keyHandler(e));


// Button Functions

function playStartSound() {
  startSound.volume = .25;
  startSound.play();
}

function playClickSound() {
  clickSound.volume = .35;
  clickSound.play();
}

function buttonLeft() {
  if (startScreen.classList.contains("hidden") === true) {
  const characterLocationValue = parseInt(character.style.left, 10);
  character.style.left = characterLocationValue - 25 + "px"; 
  if (
    characterLocationValue > imageList[index].offsetWidth &&
    index !== frameLimit
  ) {
    character.style.left = 0;
    imageList[index].classList.add("hidden");
    index++;
    imageList[index].classList.remove("hidden");
  }
  if (characterLocationValue < 0) {
    character.style.left = 0;
  }
}
  else {

  }
}

function buttonRight() {
  if (startScreen.classList.contains("hidden") === true) {
    const characterLocationValue = parseInt(character.style.left, 10);
    character.style.left = characterLocationValue + 25 + "px"; 
    if (
      characterLocationValue > imageList[index].offsetWidth &&
      index !== frameLimit
    ) {
      character.style.left = 0;
      imageList[index].classList.add("hidden");
      index++;
      imageList[index].classList.remove("hidden");
    }
    if (characterLocationValue < 0) {
      character.style.left = 0;
    }
  }
    else {
  
    }
}

function buttonB() {
  console.log(chatList);
}

function buttonA() {
  console.log(chatList);
}

function selectButton() {
  console.log("test");
}

function startButton() {
  console.log("test");
  startScreen.classList.add("hidden");
  scene1.classList.remove("hidden");
  character.classList.remove("hidden");
  scene1Text.classList.remove("hidden");
}

