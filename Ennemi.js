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
        this.enemy.setVelocityX(50);
        this.enemy.anims.play('WolfLeft',true);
    }

    PlayerEnemy(ennemi)
    {
        if(lightning_attack==true)
        {
            console.log(ennemi);
            ennemi.destroy();
        }
    }
}