class Player extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"door");
    }

    controle()
    {
        this.leftButton=cursors.left.isDown;
    }    
}