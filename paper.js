class paperBall
{
    constructor(x,y,radius,world){

        this.paper = Bodies.circle(x,y,2*radius,{isStatic:false})
        World.add(world, this.paper)
        
        this.y = y
        this.x = x
        this.r = radius
        
        var paperSprite
        var paperImage

        paperImage = loadImage("paper.png")

        this.paperSprite = createSprite(this.x,this.y,this.r)

        this.paperSprite.addImage("paper",paperImage)

        this.paperSprite.scale = 0.30
  }


    display()
    {
      fill("purple")
      // circle(this.paper.position.x, this.paper.position.y, this.r)

      this.paperSprite.y = this.paper.position.y;
      this.paperSprite.position.x = this.paper.position.x, 30,10
    }
}