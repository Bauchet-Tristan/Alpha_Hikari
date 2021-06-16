class Boss extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"Boss");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.collideWorldBounds=true;
        this.body.immovable=true;
        this.body.allowGravity = false;

        this.timer = 0;
        this.alive = true;
        this.TimeOut =0;
        this.takeHit = false;
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
            if(this.body.x<=560)
            {
                this.body.setVelocityX(200);
            }
            else if (this.body.x>=1760)
            {
                this.body.setVelocityX(-200);
            }

            if(this.takeHit == true)
            {
                this.scene.cameras.main.shake(100, 0.05);
                this.takeHit = false;
            }
        }
        

        // mettre l'anims loup assis //

    }

    BossPlayer(enemy)
    {

        if(invincibleTimer >= 150)
        {
            playerHealth--;
            invincibleTimer = 0;
            enemy.takeHit = true;
        }
        
    }
}