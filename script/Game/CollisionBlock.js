
class collisionBlock{
    constructor({position,height=32*(canvas.height/544)}){
        this.position=position;
        this.height=height
        this.width=32*(canvas.width/988)
    }
    draw(){
        ctx.fillStyle='rgba(255,0,0,0.02)'
        ctx.fillRect(this.position.x,this.position.y
            ,this.width,this.height)
    }
    update(){
        this.draw();
    }
}