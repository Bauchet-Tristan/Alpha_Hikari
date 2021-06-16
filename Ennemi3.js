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
        this.body.setSize(150,90);

        this.speedX = 200;
        this.speedY = 500;
        this.distancePlayerEnemy;
        this.timerAttack = 0;
        this.alive = true;
        this.TimeOut =0;
        this.takeHit = false;
    }

    Destroy()
    {
        this.destroy();
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
                this.alive=true;
                collide.active = true;
                this.destroy();
            }
        }
        else
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
            else if( this.distancePlayerEnemy > 500 || this.distancePlayerEnemy < -500 || //distance max
                this.distancePlayerEnemy > 100 && this.distancePlayerEnemy < 120 || //distance corp a corp 
                this.distancePlayerEnemy < 100 && this.distancePlayerEnemy > 80 ) //distance corp a corp
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

            if(this.takeHit == true)
            {
                this.scene.cameras.main.shake(100, 0.05);
                this.takeHit = false;
            }
        }
    }


    Ennemi3Player(enemy)
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
    }
}