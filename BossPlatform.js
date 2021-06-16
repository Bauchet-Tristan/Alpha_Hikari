class BossPlatform extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"door2");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.body.allowGravity = false;

        this.body.setSize(80,160);
    }


    Patern(collide)
    {

        if(this.alive==false)
        {
            this.TimeOut++;
            
            collide.active = false;
            this.anims.play('enemyDie',true);

            if(this.TimeOut>=25)
            {
                this.destroy();
            }
        }
        else
        {

        }
        

        // mettre l'anims loup assis //

    }
/*
    BossPlayer(enemy)
    {
        if(lightning_attack==true)
        {
            //enemy.anims.play('enemyDie',true);
            //enemy.destroy();
            enemy.alive=false;
            enemyNumberToUnlock++;
        }
        else
        {
            if(invincibleTimer >= 150)
            {
                playerHealth--;
                invincibleTimer = 0;
                enemy.takeHit = true;
            }
        }
    }*/
}