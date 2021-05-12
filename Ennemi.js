class Ennemi extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    {
        super(scene,x,y,"ennemi");
        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        ///self = this;////
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        // console.log(this.body);
    }

    Patern()
    {
        this.body.setVelocityX(-100);
    }

    PlayerEnemy(enemy)
    {
        if(lightning_attack==true)
        {
            enemy.destroy();
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