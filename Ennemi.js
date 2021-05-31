class Kunai extends Phaser.GameObjects.Sprite 
{ 
    constructor(scene,x,y)
    {
        super(scene,x,y);
        scene.add.existing(this);
        scene.physics.world.enableBody(this);

        ///self = this;////
        this.body.immovable=true;
        this.body.collideWorldBounds=true;
        this.body.allowGravity = false;
        
        
        this.kunai3;

        this.kunaiStand;

        this.kunai_throw_stand = false;

        //Kunai//
        this.kunai1;
        this.kunai2;

        this.kunaiRight;
        this.kunaiLeft;

        this.kunai_throw_left = false;
        this.kunai_throw_right = false;

        //Teleportation
        this.kunai1TP=false;
        this.kunai2TP=false;
        this.kunai3TP=false;
    }


    KunaiHere()
    {
        if(kunai_throw_stand == true && kunaiStandTimer >= DispawnKunaiThrowSet)
        {
            kunai3.disableBody(true,true);
    
            if(kunaiStand==false)
            {
                kunai_throw_stand = false;
                kunai3TP=false;
            }
        }  
    }
    
    KunaiAndTP()
    {
        //left
        if(kunai_throw_left == true && kunaiLeftTimer >= OnplaceKunaiThrow)
        {
            kunai1.setVelocityX(0);
        }
    
        if(kunai_throw_left == true && kunaiLeftTimer >= DispawnKunaiThrowTimer)
        {
            kunai1.disableBody(true,true);
    
            if(kunaiLeft==false)
            {
                kunai_throw_left = false;
                kunai1TP=false;
            }
        }    
    
        ////Teleportation kunai////
        //Gauche
        //Unlock la tp si touche relever
        if(kunaiLeft==false && kunai_throw_left==true)
        {
            kunai1TP=true;
        }
        
        //teleportation et brise le kunai
        if(kunai1TP==true && kunaiLeft == true && playerSeishin >=1)
        {
            kunai1TP=false;
            kunaiLeftTimer = 300;
            this.body.x=kunai1.x;
            this.body.y=kunai1.y-90;
            this.body.setVelocityY(-20);
            this.body.setVelocityX(0);
            playerSeishin--;
        }
    
        //Droite//
        if(kunai_throw_right == true && kunaiRightTimer >= OnplaceKunaiThrow)
        {
            kunai2.setVelocityX(0);
        }
        
        if(kunai_throw_right == true && kunaiRightTimer >= DispawnKunaiThrowTimer)
        {
            kunai2.disableBody(true,true);
    
            if(kunaiRight==false)
            {
                kunai_throw_right = false;
                kunai2TP=false;
            }
            
        }
        //tp
        if(kunaiRight==false && kunai_throw_right==true)
        {
            kunai2TP=true;
        }
        
        if(kunai2TP==true && kunaiRight == true && playerSeishin >=1)
        {
            kunai2TP=false;
            kunaiRightTimer = DispawnKunaiThrowTimer;
            this.body.x=kunai2.x-60;
            this.body.y=kunai2.y-91;
            this.body.setVelocityY(-20);
            this.body.setVelocityX(0);
            playerSeishin--;
        }
    
        //Stand
        if(kunaiStand==false && kunai_throw_stand==true)
        {
            kunai3TP=true;
        }
        
        if(kunai3TP==true && kunaiStand == true && playerSeishin >=1)
        {
            kunai3TP=false;
            kunaiStandTimer = 500;
            this.body.x=kunai3.x-30;
            this.body.y=kunai3.y-91;
            this.body.setVelocityY(0);
            this.body.setVelocityX(0);
            playerSeishin--;
        }
    }
}