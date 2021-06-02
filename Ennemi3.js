class Ennemi3 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"ennemi");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.body.allowGravity = false;
        //

        this.speedX = 200;
        this.speedY = 500;
        this.distancePlayerEnemy;
        this.timerAttack = 0;
    }


    Patern()
    {          

        this.timerAttack++;

        this.distancePlayerEnemy = player.x - this.body.x;
        // console.log(this.distancePlayerEnemy);

        this.hauterPlayerEnemy = player.y - this.body.y;
        //console.log(this.hauterPlayerEnemy);


        if(this.timerAttack <200)
        {
            if(this.distancePlayerEnemy > 750 || this.distancePlayerEnemy < -750 ||//distance max
                this.distancePlayerEnemy > 100 && this.distancePlayerEnemy < 200 ||//distance corp a corp 
                this.distancePlayerEnemy < 100 && this.distancePlayerEnemy > 0) // //distance corp a corp
            {
                this.body.setVelocityX(0);
                this.body.setVelocityY(0);
            }
            else
            {
                if(this.distancePlayerEnemy > 100)
                {
                    //gauche
                    this.anims.play('WolfRight',true);
                    this.body.setVelocityX(this.speedX);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    //droite
                    this.anims.play('WolfLeft',true);
                    this.body.setVelocityX(-this.speedX);
                }
            }

            //Attack
            if(this.timerAttack > 150 && this.distancePlayerEnemy < 750 || //timer + Aoe de detection
                this.timerAttack > 150 && this.distancePlayerEnemy > -750)
            {
                this.speedX = 400;

                //en Y
                if(this.hauterPlayerEnemy < -10)
                {
                    this.body.setVelocityY(-this.speedY);
                }
                else if (this.hauterPlayerEnemy > 10)
                {
                    this.body.setVelocityY(this.speedY);
                }
                else
                {
                    this.body.setVelocityY(0);
                }
            }
        }

        //Repos apres l'attack
        if(this.timerAttack >= 200)
        {
            this.body.setVelocityX(0);
            this.body.setVelocityY(-200);
        }

        if(this.timerAttack >= 300)
        {
            this.timerAttack = 0;
            this.speedX = 200;
            this.body.setVelocityY(0);
        }
    }


    Ennemi3Player(enemy)
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