// Game.js

const backgroundMusic = new Audio('sound/gamebg.mp3')

const player1DeathSound = new Audio('sound/Female Death.mp3')
const player2DeathSound = new Audio('sound/Zombie.mp3')

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
canvas.width = 992;
canvas.height = 544;
const gravity = 1

let allowShoot = true;
let bullet_p1 = [];
let bullet_p2 = [];
const 
floorBlocks=
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528, 528,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


    ///////////deflection Blocks
    const deflectionBlocks=[0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 528, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 528, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


function nextLevel()
{
  setTimeout(function () {
    window.location.href = './Level 2/level2_preload.html';
},0 );
}

function gameover()
{
  setTimeout(function () {
    window.location.href = 'game over.html';
},0 );
}


const scaledCanvas = {
  width: canvas.width / 2,
  height: canvas.height / 2
};

// console.log(floorBlocks)
const floorCollision2D=[]
for (let i = 0; i < floorBlocks.length; i += 31) {
  floorCollision2D.push(floorBlocks.slice(i, i + 31));
}
const collisionblocks=[] //floor collision
floorCollision2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
      if (symbol === 528) {
        collisionblocks.push(
              new collisionBlock({
                  position: { x: x * 32*(canvas.width/988), y: y * 32*(canvas.height/544) },

              })
          )
      }
  })
}
)
const deflection2D=[]
for (let i = 0; i < deflectionBlocks.length; i += 31) {
  deflection2D.push( deflectionBlocks.slice(i, i + 31));
}
const deflectionblocks=[] //bullet deflections
deflection2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
      if (symbol == 528) {
        deflectionblocks.push(
              new collisionBlock({
                  position: { x: x * 32*(canvas.width/988), y: y * 32*(canvas.height/544) },

              })
          )
      }
  })
}
)




const playerSize = 50;
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  w: {
    pressed: false
  },
  s: {
    pressed: false,
  },
};

const player = new Player({
  health:100,
  position: { x: canvas.width / 4, y: canvas.height / 4 },
  collisionblocks  ,//456
  imageSrc: './Images/Game/Punk_idle.png',
  frameRate: 4,
  lastDirection: "right",
  scale: 2,
  animations: {
    Idle: {
      imageSrc: './Images/Game/Punk_idle.png',
      frameRate: 4,
      frameBuffer: 3,
    },
    IdleLeft: {
      imageSrc: './Images/Game/Punk_idleleft.png',
      frameRate: 4,
      frameBuffer: 8,
    },
    Run: {
      imageSrc: './Images/Game/Punk_run.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    RunLeft: {
      imageSrc: './Images/Game/Punk_runleft.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    Jump: {
      imageSrc: './Images/Game/Punk_jump.png',
      frameRate: 4,
      frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: './Images/Game/Punk_jumpleft.png',
      frameRate: 4,
      frameBuffer: 3,
    },
    Death: {
      imageSrc: './Images/Game/Punk_death.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    DeathLeft: {
      imageSrc: './Images/Game/Punk_deathleft.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    Attack: {
      imageSrc: './Images/Game/Punk_attack3.png',//Images/Game/Punk_deathleft.png
      frameRate: 8,
      frameBuffer: 2,
    },
    AttackLeft: {
      imageSrc: './Images/Game/Punk_attack3left.png',//Images/Game/Punk_deathleft.png
      frameRate: 8,
      frameBuffer: 2,
    },


  },
});
const player2 = new Player({
  health:100,
  position: { x: canvas.width / 2 + canvas.width / 4 , y: canvas.height / 4 },
  collisionblocks,
  imageSrc: './Images/Game/Punk2_idle.png',
  frameRate: 4,
  scale: 2,
  animations: {
    Idle: {
      imageSrc: './Images/Game/Punk2_idle.png',
      frameRate: 4,
      frameBuffer: 8,
    },
    IdleLeft: {
      imageSrc: './Images/Game/Punk2_idleleft.png',
      frameRate: 4,
      frameBuffer: 8,
    },
    Run: {
      imageSrc: './Images/Game/Punk2_run.png',
      frameRate: 6,
      frameBuffer: 8,
    },
    RunLeft: {
      imageSrc: './Images/Game/Punk2_runleft.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    Jump: {
      imageSrc: './Images/Game/Punk2_jump.png',
      frameRate: 4,
      frameBuffer: 3,
    },
    JumpLeft: {
      imageSrc: './Images/Game/Punk2_jumpleft.png',
      frameRate: 4,
      frameBuffer: 3,
    },
    Death: {
      imageSrc: './Images/Game/Punk2_death.png',
      frameRate: 6,
      frameBuffer: 3,
    },
    DeathLeft: {
      imageSrc: './Images/Game/Punk2_deathleft.png',//Images/Game/Punk_deathleft.png
      frameRate: 6,
      frameBuffer: 3,
    },
    // Attack: {
    //   imageSrc: './Images/Game/Punk_attack1.png',//Images/Game/Punk_deathleft.png
    //   frameRate: 8,
    //   frameBuffer: 3,
    // },
    // AttackLeft: {
    //   imageSrc: './Images/Game/Punk_attack1left.png',//Images/Game/Punk_deathleft.png
    //   frameRate: 8,
    //   frameBuffer: 3,
    // },

  },
});
const background = new Sprite({
  position: { x: 0, y: 0 },
  imageSrc: './Images/Game/map.png',
})
function backgroundUpdate(){
  background.width=canvas.width
  background.height=canvas.height
}

function drawDivision() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, scaledCanvas.width, canvas.height);
  ctx.fillStyle = 'rgba(255,0,0,0.2)';
  ctx.fillRect(scaledCanvas.width, 0, scaledCanvas.width, canvas.height);
}

function animate() {
  requestAnimationFrame(animate);
//   drawDivision();
//  ctx.save();
//  ctx.scale(1, 1)///edike hisab kore scale korte hbe shb kisu jeno dynamic hoynaile player baire jabega
//   //tachara collison block eke .Collision detection darao possiblle

//   ctx.translate(0, 0)
  backgroundUpdate()
  background.update()
  collisionblocks.forEach(collisionBlock=>{
    collisionBlock.update()
  })
  deflectionblocks.forEach(collisionBlock=>{
    collisionBlock.update()
  })
  player.checkVerticalCollision()
  player2.checkVerticalCollision()
  movement();
  player.update();
  player2.update();
  
  //shootPlayer2();
  shootPlayer1();
  gsap.to('#playerHealth', {
    width: player.health + '%',
  });
  gsap.to('#enemyHealth', {
    width: player2.health + '%',
  });
  ctx.restore();
}

function shootPlayer1() {
  for (let i = bullet_p1.length - 1; i >= 0; i--) {
    const bullet = bullet_p1[i];
    bullet.update("p1");

    let hitPlayer2 = false;
    let hitWall = false;

    if (collidesWithPlayer2(bullet)) {
      hitPlayer2 = true;
      bullet_p1.splice(i, 1);
      player2.reduceHealth();
      if (player2.isDead()) {
        allowShoot = false;
        //player2.removeFromGame("Images/Game/Punk_deathleft.png");
        player.switchSprite('DeathLeft')
        backgroundMusic.pause();
        player2DeathSound.play();
      }
    }

    if (collidesWithPlayer1(bullet) && bullet.velocity.x < 0) {
      hitPlayer2 = true;
      bullet_p1.splice(i, 1);
      player.reduceHealth();
      if (player.isDead()) {
        allowShoot = false;
       
        player.switchSprite('Death')
        backgroundMusic.pause();
        player1DeathSound.play(); // Play player death scream sound
        gameover();
      }
    }

    if (collidesWithWalls(bullet)) {
      hitWall = true;
    }

    if (!hitPlayer2 && !hitWall) {
      if (bullet.position.x < 0 || bullet.position.x + bullet.width > scaledCanvas.width) {
        bullet.velocity.x *= -1;
      }
      if (bullet.position.y < 0 || bullet.position.y + bullet.height > canvas.height) {
        bullet.velocity.y *= -1;
      }
    }
  }
}


function shootPlayer2() {
  for (let i = bullet_p2.length - 1; i >= 0; i--) {
    const bullet = bullet_p2[i];
    bullet.update("p2");

    let hitPlayer1 = false;
    let hitWall = false;

    if (collidesWithPlayer1(bullet) && bullet.velocity.x < 0) {
      hitPlayer1 = true;
      bullet_p2.splice(i, 1);
      player.reduceHealth();
      if (player.isDead()) {
        allowShoot = false;
        player.switchSprite('Death')
        backgroundMusic.pause();
        player1DeathSound.play();
      }
    }

    if (collidesWithPlayer2(bullet) && bullet.velocity.x > 0) {
      hitPlayer1 = true;
      bullet_p2.splice(i, 1);
      player2.reduceHealth();
      if (player2.isDead()) {
        allowShoot = false;
        player2.switchSprite('Deathleft')
        backgroundMusic.pause();
        player2DeathSound.play();
      }
      nextLevel();
    }

    if (collidesWithWalls(bullet)) {
      hitWall = true;
    }

    if (!hitPlayer1 && !hitWall) {
      if (bullet.position.x > 0 || bullet.position.x + bullet.width < canvas.width) {
        bullet_p2.splice(i, 1); // Remove the bullet when it goes beyond the canvas boundaries
      } else {
        bullet.position.x -= bullet.velocity.x; // Update the bullet's position based on velocity (moving from right to left)
        bullet.position.y -= bullet.velocity.y; // Update the bullet's position based on velocity
      }
    }
  }
}






function collidesWithPlayer1(bullet) {
  const isBulletReflected = bullet.velocity.x < 0;

  return (
    (isBulletReflected && bullet.position.x < player.position.x + player.width && bullet.position.x + bullet.width > player.position.x &&
      bullet.position.y < player.position.y + player.height && bullet.position.y + bullet.height > player.position.y) ||
    (!isBulletReflected && bullet.position.x + bullet.width > player.position.x && bullet.position.x < player.position.x + player.width &&
      bullet.position.y + bullet.height > player.position.y && bullet.position.y < player.position.y + player.height)
  );
}


function collidesWithPlayer2(bullet) {
  return (
    bullet.position.x < player2.position.x + player2.width &&
    bullet.position.x + bullet.width > player2.position.x &&
    bullet.position.y < player2.position.y + player2.height &&
    bullet.position.y + bullet.height > player2.position.y
  );
}




function collidesWithWalls(bullet) {
  // Check collision with deflection blocks
  for (let i = 0; i < deflectionblocks.length; i++) {
    const deflectionBlock = deflectionblocks[i];
    const blockX = deflectionBlock.position.x;
    const blockY = deflectionBlock.position.y;

    if (
      bullet.position.x < blockX + 32 &&
      bullet.position.x + bullet.width > blockX &&
      bullet.position.y < blockY + 32 &&
      bullet.position.y + bullet.height > blockY
    ) {

      // Bullet collided with a deflection block, reflect the bullet
      if (bullet.velocity.x !== 0) {
        bullet.velocity.x *= -1;
          
        //bullet.angle= -1;
        //bullet.gravity=0.2;
       // bullet.velocity=0;
        
      }
      if (bullet.velocity.y !== 0) {
       // bullet.velocity.y *= -1;
       
      }

      return true;
    }
  }

  // Check collision with outer walls
  if (
    bullet.position.x <= 0 || // left wall
    bullet.position.x + bullet.width <= canvas.width || // right wall
    bullet.position.y <= 0 || // top wall
    bullet.position.y + bullet.height >= canvas.height // bottom wall
  ) {
    return true;
  }

  return false;
}



window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'd':
    case 'ArrowRight':
      keys.d.pressed = true;
      break;
    case 'a':
    case 'ArrowLeft':
      keys.a.pressed = true;
      break;
    case 'w':
    case 'ArrowUp':
      keys.w.pressed = true;
      break;
    case 's':
    case 'ArrowDown':
      keys.s.pressed = true;
      break;
    case ' ':
      {
        if(player.lastDirection=='right')
        player.switchSprite('Attack')
        else
        player.switchSprite('AttackLeft')
        //player2.shootBullet_p2("false");
        player.shootBullet(allowShoot);   
      }
      
      
      break;
  }
});

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case 'd':
    case 'ArrowRight':
      keys.d.pressed = false;
      break;
    case 'a':
    case 'ArrowLeft':
      keys.a.pressed = false;
      break;
    case 'w':
    case 'ArrowUp':
      keys.w.pressed = false;
      break;
    case 's':
    case 'ArrowDown':
      keys.s.pressed = false;
      break;

  }
});


function movement() {
  // Reset velocities
  player.velocity.x = 0;
  player.velocity.y = 0;
  player2.velocity.x = 0;
  player2.velocity.y = 0;

  if (keys.w.pressed && player.position.y - player.velocity.y >= 0 && player2.position.y - player2.velocity.y >= 0) {
    if (player.lastDirection === 'right') {
      player.switchSprite('Jump')
      player2.switchSprite('JumpLeft')

      //fixing problem
      player.position.y=2;
      player2.position.y=2;

    }
    else {
      player2.switchSprite('Jump')
      player.switchSprite('JumpLeft')

       //fixing problem
      player.position.y=2;
      player2.position.y=2;
    }
 
    player.velocity.y = -7;
    player2.velocity.y = -7;
   
  }
  else if (keys.s.pressed && player.position.y + player.height + player.velocity.y <= canvas.height && player2.position.y + player2.height + player2.velocity.y <= canvas.height) {
    if (player.lastDirection === 'right') {
      player.switchSprite('Jump')
      player2.switchSprite('JumpLeft')
    }
    else {
      player2.switchSprite('Jump')
      player.switchSprite('JumpLeft')
    }
    
    player.velocity.y = 7;
    player2.velocity.y = 7;
  }
  else if (keys.a.pressed && player.position.x - player.velocity.x >= 0 && player2.position.x + player2.velocity.x >=scaledCanvas.width ) {//  scaledCanvas.width /2 chilo
    player.switchSprite('RunLeft')
    player2.switchSprite('Run')
    player.velocity.x = -7;
    player2.velocity.x = 7;
    player.lastDirection='left'
  }
  else if (keys.d.pressed && player.position.x + player.width + player.velocity.x <= scaledCanvas.width && player2.position.x - player2.velocity.x >= scaledCanvas.width ) {
    player.switchSprite('Run')
    player2.switchSprite('RunLeft')
    player.velocity.x = 7;
    player2.velocity.x = -7;
    player.lastDirection='right'

  }
  else{
    if (player.lastDirection === 'right') {
      player.switchSprite('Idle')
      player2.switchSprite('IdleLeft')
    }
    else {
      player2.switchSprite('Idle')
      player.switchSprite('IdleLeft')
    }
  }

  // Apply gravity
  player.velocity.y += gravity;
  player2.velocity.y += gravity;

  // Update player positions
  player.position.x += player.velocity.x;
  player.position.y += player.velocity.y;
  player2.position.x += player2.velocity.x;
  player2.position.y += player2.velocity.y;

  // Keep players within bounds
  if (player.position.x < 0) {
    player.position.x = 0;
  } else if (player.position.x + player.width >= scaledCanvas.width ) {
    player.position.x = scaledCanvas.width  - player.width;
  }
  if (player.position.y < 0) {
    player.position.y = 0;
  } else if (player.position.y + player.height > canvas.height) {
    player.position.y = canvas.height - player.height;
  }
  if (player2.position.x <= scaledCanvas.width ) {
    player2.position.x = scaledCanvas.width  ;//upore r edike + player2.width
  } else if (player2.position.x + player2.width > canvas.width) {
    player2.position.x = canvas.width - player2.width;
  }
  if (player2.position.y < 0) {
    player2.position.y = 0;
  } else if (player2.position.y + player2.height > canvas.height) {
    player2.position.y = canvas.height - player2.height;
  }
}







animate();
