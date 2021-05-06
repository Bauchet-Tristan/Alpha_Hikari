class Ennemi extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene)
    {
        super(scene);
        this.scene = scene;
        this.enemy = this.scene.physics.add.sprite(250,250,"ennemi");
    }

    ReturnType()
    {
        return this.enemy;
    }

    Patern()
    {
        //this.enemy.setVelocityX(50);
    }

    PlayerEnemy()
    {
        if(lightning_attack==true)
        {
            this.enemy.destroy();
        }
    }
}