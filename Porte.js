class Porte extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,ennemiMax)
    {
        super(scene);
        this.scene = scene;
        this.door = this.scene.physics.add.image(50,50,"door");
        this.door.setGravityY(0);
        this.ennemiMax = ennemiMax;
    }

    ReturnType()
    {
        return this.door;
    }

    DoorOpen(nombreEnnemie)
    {
        if(nombreEnnemie>=this.ennemiMax)
        {
            this.door.destroy();
        }
    }
}