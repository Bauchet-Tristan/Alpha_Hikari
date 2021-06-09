class Ennemi3 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"GrueR");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
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



        if(this.hauterPlayerEnemy >=500 || this.hauterPlayerEnemy <=-500)
        {
            if(this.distancePlayerEnemy > 100)
            {
                this.anims.play('GrueRightPrepaAttack',true);;
            }
            else if (this.distancePlayerEnemy < 100)
            {
                this.anims.play('GrueLeftPrepaAttack',true);
            }
        }
        if( this.distancePlayerEnemy > 500 || this.distancePlayerEnemy < -500 || //distance max
            this.distancePlayerEnemy > 100 && this.distancePlayerEnemy < 120 || //distance corp a corp 
            this.distancePlayerEnemy < 100 && this.distancePlayerEnemy > 80) //distance corp a corp
        {
            if(this.distancePlayerEnemy > 100)
            {
                this.anims.play('GrueRightPrepaAttack',true);;
            }
            else if (this.distancePlayerEnemy < 100)
            {
                this.anims.play('GrueLeftPrepaAttack',true);
            }
        }
        else 
        {
            if(this.timerAttack <=100)
            {
                //fly normale
                if(this.distancePlayerEnemy > 100)
                {
                    this.anims.play('GrueFlyRight',true);
                    this.body.setVelocityX(this.speedX);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    this.anims.play('GrueFlyLeft',true);
                    this.body.setVelocityX(-this.speedX);
                }
            }
            else if(this.timerAttack <=150)
            {
                console.log("stop");
                //attack prepa
                if(this.distancePlayerEnemy > 100)
                {
                    this.anims.play('GrueRightPrepaAttack',true);
                    this.body.setVelocityY(0);
                    this.body.setVelocityX(0);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    this.anims.play('GrueLeftPrepaAttack',true);
                    this.body.setVelocityY(0);
                    this.body.setVelocityX(0);
                }
            }
            else if (this.timerAttack <=200)
            {
                //attack 
                this.speedX = 350;
                this.speedY = 250;

                if(this.hauterPlayerEnemy < 10)
                {
                    this.body.setVelocityY(-this.speedY);
                }
                else if (this.hauterPlayerEnemy > 10)
                {
                    this.body.setVelocityY(this.speedY);
                } 

                if(this.distancePlayerEnemy > 100)
                {
                    this.body.setVelocityX(this.speedX);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    this.body.setVelocityX(-this.speedX);
                }
            }
            else if(this.timerAttack <=220)
            {
                //attack reset
                this.speedX = 200;
                this.body.setVelocityY(-this.speedY);
                this.body.setVelocityX(0);
            }
        }

        if(this.timerAttack >=220)
        {
            this.timerAttack = 0;
            this.body.setVelocityX(0);
            this.body.setVelocityY(0);
        }
    }

/*
    Patern()
    {          
        this.timerAttack++;

        this.distancePlayerEnemy = player.x - this.body.x;
        // console.log(this.distancePlayerEnemy);

        this.hauterPlayerEnemy = player.y - this.body.y;
        //console.log(this.hauterPlayerEnemy);


        if(this.timerAttack <250)
        {
            if(this.distancePlayerEnemy > 500 || this.distancePlayerEnemy < -500 ||//distance max
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
                    this.anims.play('GrueFlyRight',true);
                    this.body.setVelocityX(this.speedX);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    //droite
                    this.anims.play('GrueFlyLeft',true);
                    this.body.setVelocityX(-this.speedX);
                }
            }


            //Attack
            if((this.timerAttack > 200 && this.distancePlayerEnemy < 500) || //timer + Aoe de detection
                (this.timerAttack > 200 && this.distancePlayerEnemy > -500))
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
            }
            else if(this.timerAttack > 150 && this.distancePlayerEnemy < 500 || //timer + Aoe de detection
                this.timerAttack > 150 && this.distancePlayerEnemy > -500)
            {
                this.anims.play('GrueRightPrepaAttack',true);

                this.body.setVelocityY(0);
                this.body.setVelocityX(0);
            }
            else
            {
                this.body.setVelocityY(0);
            }

        }

        //Repos apres l'attack
        if(this.timerAttack >= 250)
        {
            this.body.setVelocityX(0);
            this.body.setVelocityY(-200);
        }

        if(this.timerAttack >= 350)
        {
            this.timerAttack = 0;
            this.speedX = 200;
            this.body.setVelocityY(0);
        }
    }*/


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