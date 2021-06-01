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

        this.speed = 300;
        this.timeHit = 300;
        this.distancePlayerEnemy;
    }

    Patern()
    {
        this.timeHit++;

        if(this.timeHit >= 1000)
        {
            //console.log(this.timeHit);
            //this.speed = 300;
        }

        this.distancePlayerEnemy = player.x - this.body.x;
        //console.log(distancePlayerEnemy);
        
        if(this.distancePlayerEnemy > 1000 || this.distancePlayerEnemy < -1000 || //distance max
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
                this.speed = 50;
                this.timeHit = 0;


                //console.log(this.timeHit);
                playerHealth--;
                invincibleTimer = 0;
            }
        }
    }
}