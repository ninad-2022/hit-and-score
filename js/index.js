let timer = 30;
let score = 0;
let hitNumber = 0;

const hitUrl = () => {
  hitNumber = Math.floor(Math.random() * 10);
  document.querySelector("#hitUrl").textContent = hitNumber;
};

const increaseScore = () => {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
};

const generateBubble = () => {
  const bubbleContainer = document.querySelector("#pbottom");
  const bubbleCount = 160;
  let clutter = "";

  for (let i = 0; i < bubbleCount; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
  }

  bubbleContainer.innerHTML = clutter;
};

const updateTimerDisplay = () => {
  document.querySelector("#timer-interval").textContent = timer;
};

const handleClick = (e) => {
  const clickedNumber = parseInt(e.target.textContent);
  if (clickedNumber === hitNumber) {
    increaseScore();
    hitUrl();
    generateBubble();
  }
};
const endGame = (timerInterval) => {
  clearInterval(timerInterval);
  const pBottom = document.querySelector("#pbottom");
  pBottom.innerHTML = `<div className="restart">
  <h1>Your score is ${score}, Game Over!</h1>
<button id="startButton">Restart</button>
  </div>`;
};

const startGame = (e) => {
  hitUrl();
  generateBubble();

  const timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      updateTimerDisplay();
    } else {
      endGame(timerInterval);
    }
  }, 1000);
};

const startButton = document.querySelector("#startButton");
startButton.addEventListener("click", () => {
  startGame();
});

document.querySelector("#pbottom").addEventListener("click", handleClick);
