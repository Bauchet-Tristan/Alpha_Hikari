class Porte extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,key,x,y)
    { 
        super(scene,x,y,"door");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.key = key;
        this.body.allowGravity = false;
       
    }

    DoorOpen(numberKey)
    {
        //console.log("boby");
        if( numberKey == this.key)
        {
            numberKey-this.key;
            this.destroy();
        }
    }

    

}