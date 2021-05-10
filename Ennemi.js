class Ennemi extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    {
        super(scene);
        this.scene = scene;
        this.enemy = this.scene.physics.add.sprite(x,y,"ennemi").setScale(0.5);
        this.enemy.setImmovable(true);
    }

    ReturnType()
    {
        return this.enemy;
    }

    Patern()
    {
        this.enemy.setVelocityX(50);
    }

    PlayerEnemy()
    {
        if(lightning_attack==true)
        {
            this.enemy.disableBody(true,true);
            enemyNumber++;
        }
        else
        {
            if(invincibleTimer>= 210)
            {
                playerHealth--;
                invincibleTimer =0;
            }
        }
    }

}