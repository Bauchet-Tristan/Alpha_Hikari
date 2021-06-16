class BossPlatform extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"ProjectilBoss");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.body.allowGravity = false;

        this.body.setSize(120,120);
    }


    Patern(collide)
    {
        if(this.body.y <= 800)
        {
            this.body.setVelocityY(100);
        }
        else if(this.body.y >= 1320)
        {
            this.body.setVelocityY(-100);
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