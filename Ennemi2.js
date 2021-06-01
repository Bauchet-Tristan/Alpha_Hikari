class Ennemi2 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"ennemi");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        //this.body.allowGravity = false;

        console.log(this);
        //

    }


    Patern(scene)
    {
        if(jump == true)
        {
            this.body.setVelocityY(-500);
        }

        // mettre l'anims loup assis // 
    }


    Ennemi2Player(enemy)
    {
        if(lightning_attack==true)
        {
            enemy.destroy();
            enemyNumberToUnlock++;
        }
        else
        {
            if(invincibleTimer >= 150)
            {
                playerHealth--;
                invincibleTimer = 0;
            }
        }
    }
}