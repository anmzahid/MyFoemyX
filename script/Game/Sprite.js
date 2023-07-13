//Sprite.js

class Sprite{
    constructor({position,imageSrc,frameRate=1,frameBuffer=4,scale=1}){
        this.position=position;
        this.scale=scale
        this.image=new Image();
        // this.image.onload=()=>{
        //     this.width=(this.image.width/this.frameRate)*this.scale
        //     this.height=this.image.height*this.scale

        // }
        this.image.src=imageSrc;
        this.frameRate=frameRate
        this.currentFrame=0
        this.frameBuffer=4
        this.elapsedFrames=0
        this.offset=0
    }
    draw(){
        if( !this.image) return;
        // const cropbox={
        //     position :{
        //         x:this.currentFrame*(this.image.width/this.frameRate),
        //         y:0,
        //     },
        //     width :this.image.width/this.frameRate,
        //     height :this.image.height,
        // }
        ctx.drawImage(this.image,//bishal arg func
        this.currentFrame* (this.image.width / this.frameRate),
           0,///
           this.image.width / this.frameRate,
           this.image.height,
            this.position.x,
            this.position.y,
            (this.image.width/this.frameRate)*this.scale,
            this.image.height*this.scale
            );
    }
    // draw() {
    //     ctx.drawImage(
    //       this.image,
    //       this.currentFrame * (this.image.width / this.frameRate),
    //       0,
    //       this.image.width / this.frameRate,
    //       this.image.height,
    
    //       this.position.x - this.offset.x,
    //       this.position.y - this.offset.y,
    //       (this.image.width / this.frameRate) * this.scale,
    //       this.image.height * this.scale
    //     );
    // }
    update(){
        this.draw()
        this.updateCurrentframe()
    }
    updateCurrentframe (){
        this.elapsedFrames++
        if(this.elapsedFrames%this.frameBuffer===0){
        if(this.currentFrame<this.frameRate-1)
        this.currentFrame++
        else this.currentFrame=0
    }
  

    }}