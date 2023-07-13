//utils.js

function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height
  );
}

const p1death= new Audio("../sound/Female Death.mp3");
const p2death= new Audio("../sound/Zombie.mp3");

function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector('#displayText').style.display = 'flex';
  if (player.health === enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Tie';
    setTimeout(function () {

      window.location.href = './game over.html';     //////////
  },);
  } else if (player.health > enemy.health) {
    document.querySelector('#displayText').innerHTML = 'Player 1 Wins';
    setTimeout(function () {

      window.location.href = '../Level 2/win.html';     //////////
  },);
  } else if (player.health < enemy.health) {
    
    document.querySelector('#displayText').innerHTML = 'Player 2 Wins';

  
    setTimeout(function () {

      window.location.href = './game over.html';     //////////
  },);
  }
}

let timer = 60;
let timerId;

function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer--;
    document.querySelector('#timer').innerHTML = timer;
  }
  if (timer === 0) {
    determineWinner({ player, enemy, timerId });
  }
}
