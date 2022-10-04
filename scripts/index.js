const playSound = (value) => {
  switch (value) {
    case "w":
    case "W":
      new Audio("/sounds/tom-1.mp3").play();
      break;
    case "a":
    case "A":
      new Audio("/sounds/tom-2.mp3").play();
      break;
    case "s":
    case "S":
      new Audio("/sounds/tom-3.mp3").play();
      break;
    case "d":
    case "D":
      new Audio("/sounds/tom-4.mp3").play();
      break;
    case "j":
    case "J":
      new Audio("/sounds/crash.mp3").play();
      break;
    case "k":
    case "K":
      new Audio("/sounds/kick-bass.mp3").play();
      break;
    case "l":
    case "L":
      new Audio("/sounds/snare.mp3").play();
      break;
    default:
      console.log(`Button ${value} pressed`);
      break;
  }
};

const animateButtonUsingForEach = (key) => {
  const allButtons = document.querySelectorAll(".drum");
  if (allButtons && allButtons.length > 0) {
    allButtons.forEach((button) => {
      button.classList.remove("pressed");
    });
  }

  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");
};

const animateButton = (key) => {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
};
const keyPressFunc = (e) => {
  playSound(e.key);
  animateButton(e.key);
};

const drumButtons = document.querySelectorAll(".drum");
if (drumButtons && drumButtons.length > 0) {
  drumButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonTextContent = button.textContent;
      playSound(buttonTextContent);
      animateButton(buttonTextContent);
    });
  });
}

document.addEventListener("keydown", keyPressFunc);
