// Bullet.js
class Bullet extends Sprite {
  constructor({ position, velocity, imageSrc, scale, angle, gravity }) {
    super({ position, imageSrc, scale });
    this.velocity = velocity;
    this.image=new Image()
    this.imageSrc=imageSrc
    this.angle = angle;
    this.gravity = gravity;
    this.lifespan = 800; // Lifespan of the bullet in frames
    this.angle = 0, // Angle in degrees
      this.gravity =0 // gravity value
  }
  update(whichplayer) {

    if(whichplayer="p1")
    {
      if (this.lifespan <= 0) {
        // Remove the bullet from the bullets array
        const index = bullet_p1.indexOf(this);
        if (index > -1) {
          bullet_p1.splice(index, 1);
        }
      } else {
  
        // Apply gravity
        //this.velocity.y += this.gravity;
  
        // Calculate the new position based on angle and velocity
        const angleInRadians = this.angle * Math.PI / 180;
        this.position.x += Math.cos(angleInRadians) * this.velocity.x;
        this.position.y += Math.sin(angleInRadians) * this.velocity.y;
  
        this.draw();
        this.lifespan--;
      }
    } 

    if(whichplayer="p2")
    {
      if (this.lifespan <= 0) {
        // Remove the bullet from the bullets array
        const index = bullet_p1.indexOf(this);
        if (index > -1) {
          bullet_p2.splice(index, 1);
        }
      } else {
  
        // Apply gravity
       // this.velocity.y += this.gravity;
  
        // Calculate the new position based on angle and velocity
        const angleInRadians = this.angle * Math.PI / 180;
        this.position.x += Math.cos(angleInRadians) * this.velocity.x;
        this.position.y += Math.sin(angleInRadians) * this.velocity.y;
  
        this.draw();
        this.lifespan--;
      }
    }
  }
  draw() {
    if (!this.image) return;
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
