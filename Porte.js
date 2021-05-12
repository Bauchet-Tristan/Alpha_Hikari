class Porte extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,ennemiMax,x,y)
    { 
        super(scene,x,y,"door");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;

        this.ennemiMax = ennemiMax;
    }

    DoorOpen()
    {
        if(enemyNumber>=this.ennemiMax)
        {
            this.destroy();
        }
    }
}