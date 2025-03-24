let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Create a new function called startGame() that calls renderGame()
function startGame() {
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  let cardVar = 2;
  sum = sum + cardVar;

  renderGame();
}
