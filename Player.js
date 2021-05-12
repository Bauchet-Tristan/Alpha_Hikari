class Ennemi extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    {
        super(scene,x,y,"player");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        ///self = this;////
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        // console.log(this.body);

        this.load.spritesheet("ArazamiR", "assets/CaractereAnnimationRight.png", { frameWidth: 74, frameHeight: 103 });
        this.load.spritesheet("ArazamiL", "assets/CaractereAnnimationLeft.png", { frameWidth: 74, frameHeight: 103 });

    }

}