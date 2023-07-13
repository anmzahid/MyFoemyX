const canvas = document.querySelector('canvas');


const c = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.6;

const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc: './img/map.png',
});



const player = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },

  offset: {
    x: 0,
    y: 0,
  },
  imageSrc: './img/hero2/idle.png',
  framesMax: 8,
  scale: 2,
  offset: {
    x: -50,
    y: 20,
  },
  sprites: {
    idle: {
      imageSrc: './img/hero/Idle.png',
      framesMax: 11,
    },
    run: {
      imageSrc: './img/hero/Run.png',
      framesMax: 8,
    },
    jump: {
      imageSrc: './img/hero/Jump.png',
      framesMax: 4,
    },
    fall: {
      imageSrc: './img/hero/Fall.png',
      framesMax: 4,
    },
    attack1: {
      imageSrc: './img/hero/Attack.png',
      framesMax: 6,
    },
    takeHit: {
      imageSrc: './img/hero/Take Hit.png',
      framesMax: 4,
    },
    death: {
      imageSrc: './img/hero/Death.png',
      framesMax: 9,
    },
  },

  attackBox: {
    offset: {
      x: 100,
      y: 50,
    },
    width: 160,
    height: 50,
  },
});


const enemy = new Fighter({
  position: {
    x: 400,
    y: 100,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: 'blue',

  offset: {
    x: -50,
    y: 0,
  },
  imageSrc: './img/hero2/idle.png',
  framesMax: 4,
  scale: 1.8,
  offset: {
    x: -50,
    y: 0,
  },
  sprites: {
    idle: {
      imageSrc: './img/hero2/idle.png',
      framesMax: 11,
    },
    run: {
      imageSrc: './img/hero2/Run.png',
      framesMax: 8,
    },
    jump: {
      imageSrc: './img/hero2/Jump.png',
      framesMax: 4,
    },
    fall: {
      imageSrc: './img/hero2/Fall.png',
      framesMax: 4,
    },
    attack1: {
      imageSrc: './img/hero2/Attack.png',
      framesMax: 6,
    },
    takeHit: {
      imageSrc: './img/hero2/Take Hit.png',
      framesMax: 4,
    },
    death: {
      imageSrc: './img/hero2/Death.png',
      framesMax: 9,
    },
  },

  attackBox: {
    offset: {
      x: -170,
      y: 50,
    },
    width: 170,
    height: 50,
  },
});


const keys = {
  a:
  {
    pressed: false,
  },
  d: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
  ArrowUp: {
    pressed: false,
  },
};

decreaseTimer();

function animate() {

  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0, 0, canvas.width, canvas.height);

  background.update();
  // shop.update();
  c.fillStyle = 'rgba(255, 255, 255, 0.15)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  checkSkyBoundary()
  player.update();

  enemy.velocity.x = 0;
  enemy.velocity.y = 0;

  // Enemy movement logic
  const playerCenterX = player.position.x + player.width / 2;
  const enemyCenterX = enemy.position.x + enemy.width / 2;

  if (playerCenterX < enemyCenterX) {
    enemy.velocity.x = -5; // Adjust the enemy's movement speed as desired

  } else {
    enemy.velocity.x = 5;

  }

  enemy.position.y = player.position.y;

  enemy.update();

  player.velocity.x = 0;
  enemy.velocity.x = 0;

  // Randomly determine enemy movement
  const randomMovement = Math.random();
  if (randomMovement < 0.02) {
    enemy.velocity.x = -5;

    enemy.velocity.y = -5;
    //enemy.switchSprite('run_left');

  } else if (randomMovement < 0.03) {
    enemy.velocity.x = 5;
    enemy.velocity.y = 5;
   // enemy.switchSprite('run_right');

  } else if (randomMovement < 0.05) {
    enemy.velocity.y = -5;

  } else {
    enemy.velocity.x = 0;
    enemy.velocity.y = 0;
  }

  // Check if the enemy collides with the player during attack
  if (
    rectangularCollision({ rectangle1: enemy, rectangle2: player }) &&
    enemy.isAttacking &&
    enemy.frameCurrent === 2
  ) {
    player.takeHit();
    enemy.isAttacking = false;

    gsap.to('#playerHealth', {
      width: player.health + '%',
    });
  }
  // Check if the enemy collides with the player during attack
  if (
    rectangularCollision({ rectangle1: player, rectangle2: enemy }) &&
    player.isAttacking &&
    player.frameCurrent === 2
  ) {
    enemy.takeHit();

    player.isAttacking = false;

    gsap.to('#enemyHealth', {
      width: enemy.health + '%',
    });
  }
  if (keys.a.pressed || keys.ArrowLeft.pressed ) {
    player.velocity.x = -5;
   // player.switchSprite('run_left');

  } else if (keys.d.pressed || keys.ArrowRight.pressed) {
    player.velocity.x = 5;

    //player.switchSprite('run_right');
  } else {
    player.switchSprite('idle');
  }

  if (player.velocity.y < 0) {
    player.switchSprite('jump');
  } else if (player.velocity.y > 0) {
    player.switchSprite('fall');
  }



  if (enemy.velocity.y < 0) {
    enemy.switchSprite('jump');
  } else if (enemy.velocity.y > 0) {
    enemy.switchSprite('fall');
  }

  // Update enemy's position
  enemy.position.x += enemy.velocity.x;
  enemy.position.y += enemy.velocity.y;

  // Randomly stop enemy to attack player
  const shouldAttack = Math.random() < 0.04; // Adjust the probability as desired
  if (shouldAttack) {
    enemy.velocity.x = 0;

    // Adjust the distance between enemy and player during the attack
    const attackDistance = 180; // Adjust the distance as desired
    if (playerCenterX < enemyCenterX) {
      enemy.position.x = player.position.x - attackDistance - enemy.width;
    } else {
      enemy.position.x = player.position.x + player.width + attackDistance;
    }
    const audio=new Audio("../sound/fight.mp3");
    enemy.attack();
    audio.play();

  }

  if (enemy.health <= 0 || player.health <= 0) {
    determineWinner({ player, enemy, timerId });
  }
}


animate();

window.addEventListener('keydown', (e) => {
  const audio=new Audio("../sound/fight.mp3");
 
  if (!player.dead) {
    console.log('player.dead', e.key);
    switch (e.key) {
      case 'd':
      case 'ArrowRight':
        keys.d.pressed = true;
        keys.ArrowRight.pressed = true;
        player.lastKey = 'd';
        
        console.log('player.lastKey', player.lastKey);
        break;

      case 'a':
      case 'ArrowLeft':
        keys.a.pressed = true;
        keys.ArrowLeft.pressed = true;
        player.lastKey = 'a';
        break;

      case 'w':
      case 'ArrowUp':
        player.velocity.y = -20;
        break;

      case ' ':
        player.attack();
        audio.play();
        break;
    }
  }


});

window.addEventListener('keyup', (e) => {
 
  switch (e.key) {
    case 'd':
      keys.d.pressed = false;
      keys.ArrowRight.pressed = false;
      break;

    case 'a':
      keys.a.pressed = false;
      keys.ArrowLeft.pressed = false;
      break;
    case 'w':
      keys.w.pressed = false;
      keys.ArrowUp.pressed = false;
      break;

    case 'ArrowRight':
      keys.ArrowRight.pressed = false;
      keys.d.pressed = false;
      break;

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;
      keys.a.pressed = false;
      break;

    case 'ArrowDown':
      keys.ArrowUp.pressed = false;
      break;


  }
});
function checkSkyBoundary() {
  if (player.position.y < 0) {
    player.position.y = 0;
  }

  if (enemy.position.y < 0) {
    enemy.position.y = 0;
  }
}