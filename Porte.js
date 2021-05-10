class Porte extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,ennemiMax,x,y)
    {
        super(scene);
        this.scene = scene;
        this.door = this.scene.physics.add.image(x,y,"door");
        this.door.setImmovable(true);
        this.ennemiMax = ennemiMax;
    }

    ReturnType()
    {
        return this.door;
    }

    DoorOpen()
    {
        if(enemyNumber>=this.ennemiMax)
        {
            this.door.disableBody(true,true);
        }
    }
}