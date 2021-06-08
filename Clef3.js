class Clef3 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"key3");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.body.allowGravity = false;
        //

    }

    keyPlayer(key)
    {
        keyNumber3++;
        key.destroy();
        //console.log(keyNumber);
    }
}