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

        this.body.setRotation = 20;

    }

    keyPlayer()
    {
        keyNumber3++;
        SwitchDoor3Open = 0;
        //console.log(keyNumber);
    } 

    Switch(key,player)
    {
        if(keyNumber3 >= 1)
        {
            key.setRotation(SwitchTime);

            SwitchDoor3Open++;

            if(SwitchDoor3Open >= 200)
            {
                key.setRotation(SwitchTime);
                restartDoor3 = 1;
            }
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
}