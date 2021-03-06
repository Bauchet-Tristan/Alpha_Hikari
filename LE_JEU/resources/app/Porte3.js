class Porte3 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,key,x,y)
    { 
        super(scene,x,y,"door3");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.key = key;
        this.body.allowGravity = false;

        this.body.setSize(80,160);
    }

    DoorOpen(collide,collide2)
    {
        if( keyNumber3 == this.key)
        {
            collide.active = false;
            collide2.active = false;
            this.setAlpha(0); 
        }

        if(player.y <= SwitchY && player.x <=SwitchX)
        {
            this.destroy();
        }
        if(player.y >= SwitchY2 && player.x <=SwitchX2)
        {
            this.destroy();
        }
    }

    Reset(collide,collide2)
    {
        collide.active = true;
        collide2.active = true;
        this.setAlpha(1); 
        restartDoor3 = 0;
        keyNumber3 = 0;
    } 
}