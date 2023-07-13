//Player.js

class Player extends Sprite {
    constructor({ position,collisionblocks, imageSrc, frameRate, scale = 0.5, animations, health = 100 }) {
        super({ position, imageSrc, frameRate, scale });
        this.collisionblocks=collisionblocks
        this.position = position;
        this.velocity = {
          x: 0,
          y: 0
        };
        this.health = health;
        this.isOnGround = false;
        this.width = 30
        this.height = 40
        this.hitbox = {
          position: {
            x: this.position.x,
            y: this.position.y,
          },
          width: this.width,
          height: this.height,
        }
        this.animations = animations
        for (let key in this.animations) {
          const image = new Image()
          image.src = this.animations[key].imageSrc
          this.animations[key].image = image
        }
        this.lastDirection = 'right'
     
      }
    switchSprite(key) {
        if (this.image === this.animations[key].image) return
        this.currentFrame = 0
        this.image = this.animations[key].image
        this.frameBuffer = this.animations[key].frameBuffer
        this.frameRate = this.animations[key].frameRate
    }
    updatehitBox() {
        this.hitbox = {
            position: {
                x: this.position.x+5 ,
                y: this.position.y+26 ,
            },
            width: 46,
            height: 76,
        }
    }
    drawHitBox()
    {
        ctx.fillStyle='rgba(0,255,0,0.2)'
        ctx.fillRect(this.hitbox.position.x,this.hitbox.position.y,this.hitbox.width,this.hitbox.height)
    }


  

    update() {


 
        this.draw();
    
        this.updatehitBox()
   
        this.updatehitBox()
    }
   

    shootBullet(allowShoot,whichplayer) {
        if (!allowShoot) {
          return; // Return if shooting is not allowed
        }
       const bulletSound = new Audio('sound/gunshot.mp3');
        bulletSound.play();//bullet sound
   
        const bulletPosition = {
          x: this.position.x + this.width / 2,
          y: this.position.y + this.height / 2,
        };
    
        const bulletVelocity = {
          x: player2.position.x - this.position.x > 0 ? 5 : -5,
          y: player2.position.y + player2.height / 2 - (this.position.y + this.height / 2),
        };
    
 
        const bullet = new Bullet({
          position: bulletPosition,
          velocity: bulletVelocity,
          imageSrc: './Images/Game/bullet.png',//////
          scale: 3,
        });

            bullet_p1.push(bullet);
     
       
      }
    
      reduceHealth() {
        this.health -= 1;
        if (this.isDead()) {
          this.removeFromGame();
        }
      }
      // shootBullet_p2(allowShoot) {
      //   if (!allowShoot) {
      //     return; // Return if shooting is not allowed
      //   }
      //   const bulletSound = new Audio('sound/gunshot.mp3');
      //   bulletSound.play();
      
      //   const bulletPosition = {
      //     x: this.position.x + this.width / 2,
      //     y: this.position.y + this.height / 2,
      //   };
      
      //   const bulletVelocity = {
      //     x: player.position.x - this.position.x > 0 ? 5 : -5,
      //     y: player.position.y + player.height / 2 - (this.position.y + this.height / 2),
      //   };
      
      //   const bullet = new Bullet({
      //     position: bulletPosition,
      //     velocity: bulletVelocity,
      //     imageSrc: './Images/Game/bullet2.png',
      //     scale: 1,
      //   });
      //   bullet_p2.push(bullet);
      // }
      
    
      isDead() {
        return this.health <= 0;
      }
    
      removeFromGame(imageFile) {
        // Remove the player from the game
        this.image.src = imageFile;
        this.scale = 0.2;
    
      }

      
      checkVerticalCollision() {
        for (let i = 0; i < collisionblocks.length; i++) {
            const collisionBlock = this.collisionblocks[i]; 
            //console.log("heabby lagscee")
            if (collision({
                object1: this.hitbox,
                object2: collisionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0;
                    const offset = this.hitbox.position.y - this.position.y + this.hitbox.height

                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }
                if (this.velocity.y < 0) {
                    this.velocity.y = 0;
                    const offset = this.hitbox.position.y - this.position.y

                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }

            }
        }
    }



}




