class Porte2 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,key,x,y)
    { 
        super(scene,x,y,"door2");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.key = key;
        this.body.allowGravity = false;
       
    }

    DoorOpen(numberKey2)
    {
        //console.log("boby");
        if( numberKey2 == this.key)
        {
            numberKey2-this.key;
            this.destroy();
        }
    }
}