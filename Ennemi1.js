class Ennemi1 extends Phaser.GameObjects.Sprite 
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
        /*
        var distancePlayerEnemy = player.x - this.body.x;
        //console.log(distancePlayerEnemy);
        
        if(distancePlayerEnemy > 1000 || distancePlayerEnemy < -1000)
        {
            this.body.setVelocityX(0);
            // mettre l'anims loup assis // 
        }

        
        if(distancePlayerEnemy >= 100 && distancePlayerEnemy < 230)
        {
            //gauche
            this.anims.play('WolfRight',true);
            this.body.setVelocityX(0);
        }
        else if (distancePlayerEnemy <= 100 && distancePlayerEnemy > -20)
        {
            //droite
            this.anims.play('WolfLeft',true);
            this.body.setVelocityX(0);
        }

        else
        {
            if(distancePlayerEnemy > 100)
            {
                //gauche
                this.anims.play('WolfRight',true);
                this.body.setVelocityX(300);
            }
            else if (distancePlayerEnemy < 100)
            {
                //droite
                this.anims.play('WolfLeft',true);
                this.body.setVelocityX(-300);
            }
        }
        */
    }



    Ennemi1Player(enemy)
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