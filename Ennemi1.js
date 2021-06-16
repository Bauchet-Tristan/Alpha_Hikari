class Ennemi1 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"ennemi");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.collideWorldBounds=true;
        //this.body.allowGravity = false;
        this.body.setSize(180,90);

        this.speed = 300;
        this.timeHit = 0;

        this.distancePlayerEnemy;
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
            this.timeHit++;

            if(this.timeHit >= 500)
            {
                //console.log(this.timeHit);
                this.speed = 300;
            }

            this.distancePlayerEnemy = player.x - this.body.x;
            //console.log(distancePlayerEnemy);
            
            if(this.distancePlayerEnemy > 1000 || this.distancePlayerEnemy < -1000 ||//distance max
                this.distancePlayerEnemy > 100 && this.distancePlayerEnemy < 200 ||//distance corp a corp 
                this.distancePlayerEnemy < 100 && this.distancePlayerEnemy > 0) // //distance corp a corp
            {
                this.body.setVelocityX(0);
                // mettre l'anims loup assis // 
            }
            else
            {
                if(this.distancePlayerEnemy > 100)
                {
                    //gauche
                    this.anims.play('WolfRight',true);
                    this.body.setVelocityX(this.speed);
                }
                else if (this.distancePlayerEnemy < 100)
                {
                    //droite
                    this.anims.play('WolfLeft',true);
                    this.body.setVelocityX(-this.speed);
                }
            }
            if(this.takeHit == true)
            {
                this.scene.cameras.main.shake(100, 0.05);
                this.takeHit = false;
            }
        }
    }



    Ennemi1Player(enemy)
    {
        if(lightning_attack==true && enemy.alive==true)
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
                enemy.speed = 150;
                enemy.timeHit = 0;


                //console.log(enemy);
                playerHealth--;
                invincibleTimer = 0;
                enemy.takeHit = true;
            }
        }
    }
}