class Ennemi2 extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y,"GoatR");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        //
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        //this.body.allowGravity = false;

        this.timer = 0;
        this.jumpTime = 0;
        this.jump_time_Max = 20;
    }


    Patern()
    {

        if(jump == true && this.body.blocked.down == true)
        {
            this.body.setVelocityY(-500);
            this.anims.play('GoatJump',true);
            this.timer = 1;
        }
        else if(this.timer == 1)
        {
            this.jumpTime++;
            if(this.jumpTime >= jump_time_Max)
            {
                this.body.setVelocityY(0);
                this.timer = 0;
                this.jumpTime = 0;
            }
        }
        else if(this.body.blocked.down == true)
        {
            this.anims.play('GoatIdle',true);
        }

        // mettre l'anims loup assis //

    }


    Ennemi2Player(enemy)
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