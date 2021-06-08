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

    DoorOpen(numberKey3)
    {
        //console.log("boby");
        if( numberKey3 == this.key)
        {
            numberKey3-this.key;
            this.destroy();
        }
    }
}