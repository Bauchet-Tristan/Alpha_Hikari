class Player extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    { 
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enableBody(this); 
        
        this.playerX = 30;
        this.playerY = 30;
        this.lastDirection ="left";
        //Vie//
        this.playerHealth = 6;

        //Seishin//
        this.playerSeishin = 6;

        this.jump=false;

        this.crouching = false;

        this.balance = false;
    }


    Controls(leftButton,rightButton,downButton,jumpButton,kunaiRight,kunaiLeft,kunaiStand,balanceButton)
    {
        //Shifting
        if (leftButton == true)
        {
            runLeft = true;
            runRight = false;
        }
        else if (rightButton == true)
        {
            runRight = true;
            runLeft = false;
        }
        else
        {
            runRight = false;
            runLeft = false;
            idle = true;
        }
    
    
    
        //On peut JUMP
        if(this.body.blocked.down || this.body.touching.down)
        {
            canJump = true;
        }
    
        //Lighting attack
        if(downButton==true && !this.body.blocked.down) 
        {
            lightning_attack = true;
            jumpTime = 35; // cancel le this.jump si attack
            canJump=false; // cancel le this.jump si attack
        }
        //Crouch 
        else if(downButton == true && this.body.blocked.down) 
        {
            playerCrouch = true;
            lightning_attack = false;
            canJump=false;
            //console.log("egjijr");
        }
        else
        {
            playerCrouch = false;
        }
    
        if(this.body.blocked.down==true)
        {
            lightning_attack=false;
        }
    
        //Jump 
        if (jumpButton == true && canJump == true)
        {   
            canJump = false;
            jumpTime=0;
            this.jump=true;
        }
    
        //Balance
        if(balanceButton==true)
        {
            this.balance=true;
        }
        else
        {
            this.balance=false;
        }
    }
    
    Shifting()
    {
        if(runLeft == true)
        {
            this.lastDirection ="left";
            this.body.setVelocityX(-runSpeed);
            //this.body.anims.play('RunLeft', true);
            this.body.setOffset(20,25).setSize(60,90,false);
        }
        else if (runRight == true)
        {
            this.lastDirection ="right";
            this.body.setVelocityX(runSpeed);
            //this.body.anims.play('RunRight', true);
            this.body.setOffset(20,25).setSize(60,90,false);
        }
        else if(idle == true)
        {
            this.body.setVelocityX(0);
    
            if(this.lastDirection=="left")
            {
                //this.body.anims.play('IdleL', true);
                this.body.setOffset(30,25).setSize(60,90,false);
            }
            else
            {
                //this.body.anims.play('IdleR', true);
                this.body.setOffset(16,25).setSize(60,90,false);
            }
        }
        else{}
    }
    
    
    Jump()
    {
        if(this.jump==true)
        {
            if(jumpTime<Jump_time)
            {                                     
                //this.body.setVelocityY(-jumpSpeed);
    
                if(this.lastDirection=="left")
                {
                    this.body.setVelocityX(-400);
                    //this.body.anims.play('JumpL', true);
                }
                else if(this.lastDirection=="right")
                {
                    this.body.setVelocityX(400);
                    //this.body.anims.play('JumpR', true);
                }
            }
            else
            {
                this.body.setVelocityY(0);
                this.body.setVelocityX(0);
                this.jump=false;
            }
        }
    }
    
    
    Lightning()
    {
        if(lightning_attack == true)
        {
            this.body.setVelocityY(800);
            this.body.setVelocityX(0);
        }
    }
    
    Crouch()
    {
        if(playerCrouch == true)
        {
            this.body.setOffset(20,20).setSize(60,45,false);
            this.crouching = true;
        }
    
        if(this.crouching == true && playerCrouch==false)
        {
            this.body.y=this.body.y-45
            this.crouching =false;
        }
    }
    
   Balance()
    {
        if(this.balance==true)
        {
            this.retenu = this.playerHealth + this.playerSeishin;
            //console.log(Math.floor(retenu/2));
            if(Math.floor(retenu/2) > 0)
            {
                this.playerHealth = Math.floor(retenu /2);
                this.playerSeishin = Math.floor(retenu/2);
            }
        }
    }
    
    
    
    
    PlayerBonus1()
    {
        if(bonus1State == "unactive")
        {    
            bonus1Cooldown = 0;
        }
    }
    
    
    Bonus1()
    {    
        if(bonus1Cooldown<=400)
        {
            bonus1State = "active";
            this.playerSeishin=6;
    
            //this.body.setTintFill(0x5f5f5f);//change direct la couleur de base
            this.body.setTint(0x5f5f5f);//filtre de couleur
        }
        else
        {
            bonus1State = "unactive";
            this.body.clearTint();
        }
    }
    
    
    PlayerBonus2()
    {
        if(bonus2State == "unactive")
        {    
            bonus1Cooldown = 0;
        }
    }
    
    Bonus2()
    {    
        
        if(bonus2Cooldown<=400)
        {
            bonus2State = "active";
            this.playerSeishin=6;
    
            //this.body.setTintFill(0x5f5f5f);//change direct la couleur de base
            this.body.setTint(0x9D9D99);//filtre de couleur
        }
        else
        {
            bonus2State = "unactive";
            //this.body.clearTint();
        }
    }
     
}