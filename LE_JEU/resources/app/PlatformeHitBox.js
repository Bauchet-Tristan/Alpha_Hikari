class PlatformeHitBox extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"HitBoxPlatform");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);
        this.body.immovable=true;

        this.body.collideWorldBounds = true;
        this.body.allowGravity = false;
        this.Alpha = 0;
    }
}