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
       
    }

    DoorOpen(collide)
    {
        //console.log("boby");
        if( keyNumber3 == this.key)
        {
            collide.active = false;
            this.setAlpha(0); 
        }

        if(player.y <= 600 && player.x <=535)
        {
            this.destroy();
        }
    }

    Reset(collide)
    {
        collide.active = true;
        this.setAlpha(1); 
        restartDoor3 = 0;
        keyNumber3 = 0;
        /*console.log(keyNumber3);
        console.log();*/
    }
}