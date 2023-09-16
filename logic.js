let icons = [
  "💐",
  "🌹",
  "🌻",
  "🏵️",
  "🌺",
  "🌴",
  "🌈",
  "🍓",
  "🍒",
  "🍎",
  "🍉",
  "🍊",
  "🥭",
  "🍍",
  "🍋",
  "🍏",
  "🍐",
  "🥝",
  "🍇",
  "🥥",
  "🍅",
  "🌶️",
  "🍄",
  "🧅",
  "🥦",
  "🥑",
  "🍔",
  "🍕",
  "🧁",
  "🎂",
  "🍬",
  "🍩",
  "🍫",
  "🎈",
];
icons.sort(() => 0.5 - Math.random());
arr = icons.slice(0, 8);
arr.push(...arr);
arr.sort(() => 0.5 - Math.random());

function startGame() {
  loadIntogrid();
}

function loadIntogrid() {
  const container = document.getElementById("container");
  container.innerHTML = "";
  for (let i = 0; i < 16; i++) {
    const buttonTag = document.createElement("div");
    buttonTag.className = "card";
    buttonTag.setAttribute("onclick", "flip(event)");
    const frontface = document.createElement("div");
    const backface = document.createElement("div");
    frontface.className = "front-face";
    backface.className = "back-face";
    frontface.innerHTML = "🐶";
    backface.innerHTML = arr[i];
    buttonTag.setAttribute("id", i);
    buttonTag.appendChild(frontface);
    buttonTag.appendChild(backface);
    container.appendChild(buttonTag);
  }
}
let current = [];
let correct = [];

const flip = (event) => {
  const element = event.currentTarget;
  console.log(current.length);
  if (current.length === 0) {
    current.push(element.id);
    console.log(current);
    element.style.transform = element.style.transform || "rotateY(0deg)";
    if (element.style.transform === "rotateY(0deg)") {
      element.style.transform = "rotateY(180deg)";
    }
  } else if (current.length === 1) {
    element.style.transform = "rotateY(180deg)";
    current.push(element.id);
    if (arr[current[0]] === arr[current[1]]) {
      correct.push(current[0], current[1]);
      current = [];
    } else {
      current.push(element.id);
      let el1 = document.getElementById(current[0]);
      let el2 = document.getElementById(current[1]);
      setTimeout(() => {
        el1.style.transform = "rotateY(0deg)";
        el2.style.transform = "rotateY(0deg)";
        current = [];
      }, 1000);
    }
  }
};

startGame();
