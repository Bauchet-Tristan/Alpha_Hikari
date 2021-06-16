class Ennemi2 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"GoatR");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.collideWorldBounds=true;
        this.body.immovable=true;
        //this.body.allowGravity = false;

        this.timer = 0;
        this.jumpTime = 0;
        this.jump_time_Max = 20;
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
        //console.log("didier");
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
            if(jump == true && this.body.blocked.down == true)
            {
                this.body.setVelocityY(-jumpSpeed);
                this.anims.play('GoatJump',true);
            }
            else if(this.body.blocked.down == true)
            {
                this.anims.play('GoatIdle',true);
            }

            if(this.takeHit == true)
            {
                this.scene.cameras.main.shake(100, 0.05);
                this.takeHit = false;
            }

        }
        

        // mettre l'anims loup assis //

    }

    Ennemi2Player(enemy)
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
                playerHealth--;
                invincibleTimer = 0;
                enemy.takeHit = true;
            }
        }
    }
}