
class Menu extends Phaser.Scene //
{ 
    constructor()
    {
        super("Menu"); //nom = menu 
    }

    init(data)
    {
        //dispo partout
    }

    preload()
    {
        this.load.image("Phaser_tuilesdejeu", "assets/Tile_Set.png");
        this.load.tilemapTiledJSON("carte", "Map_Hikari.json");

        this.load.spritesheet("ArazamiR", "assets/CaractereAnnimationRight.png", { frameWidth: 74, frameHeight: 103 });
        this.load.spritesheet("ArazamiL", "assets/CaractereAnnimationLeft.png", { frameWidth: 74, frameHeight: 103 });

        this.load.image("kunai","assets/kunai.png");
        this.load.image("door","assets/Door.png");

        this.load.image("UIYin","assets/UIYin.png");
        this.load.image("UIYang","assets/UIYang.png");
        this.load.image("UIBlue","assets/UIBlue.png");
        this.load.image("UIYellow","assets/UIYellow.png");



        this.load.spritesheet('ennemi', 'assets/wolf.png', { frameWidth: 211, frameHeight: 106 });
    }

    create()
    {
        this.add.text(20,20, "Menu1");  

        ///////////les anims Player
        this.anims.create({
            key: 'RunLeft',
            frames: this.anims.generateFrameNumbers('ArazamiL', { start: 61, end: 89 }),
            frameRate: 40,
            repeat: -1
        });

        this.anims.create({
            key: 'RunRight',
            frames: this.anims.generateFrameNumbers('ArazamiR', { start: 61, end: 89 }),
            frameRate: 40,
            repeat: -1
        });

        this.anims.create({
            key: 'IdleR',
            frames: this.anims.generateFrameNumbers('ArazamiR', { start: 0, end: 29 }),
            frameRate: 30,
            repeat: -1
        });

        this.anims.create({
            key: 'IdleL',
            frames: this.anims.generateFrameNumbers('ArazamiL', { start: 0, end: 29 }),
            frameRate: 30,
            repeat: -1
        });

        this.anims.create({
            key: 'AttackL',
            frames: this.anims.generateFrameNumbers('ArazamiL', { start: 31, end: 42 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'AttackR',
            frames: this.anims.generateFrameNumbers('ArazamiR', { start: 31, end: 42 }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: 'JumpR',
            frames: this.anims.generateFrameNumbers('ArazamiR', { start: 44, end: 59 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'JumpL',
            frames: this.anims.generateFrameNumbers('ArazamiL', { start: 44, end: 59 }),
            frameRate: 16,
            repeat: -1
        });
        /////

         ///////////les anims Ennemi
        this.anims.create({
            key: 'WolfLeft',
            frames: this.anims.generateFrameNumbers('ennemi', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'WolfRight',
            frames: this.anims.generateFrameNumbers('ennemi', { start: 12, end: 23 }),
            frameRate: 10,
            repeat: -1
        });

    }

    update()
    {
        this.scene.start("lvl1");
    }
}


//Fonction du code en globale

function PlayerEnemy(i,player)
{
    if(lightning_attack==true)
    {
        i.destroy();
        enemyNumberToUnlock++;
    }
    else
    {
        if(invincibleTimer>= 210)
        {
            playerHealth--;
            invincibleTimer =0;
        }
    }
}



function UI()
{    
    if(playerHealth>=1){UIYangList[0].setAlpha(1);}
    else{UIYangList[0].setAlpha(0);gameOver=true;}

    if(playerHealth>=2){UIYangList[1].setAlpha(1);}
    else{UIYangList[1].setAlpha(0);}

    if(playerHealth>=3){UIYangList[2].setAlpha(1);}
    else{UIYangList[2].setAlpha(0);}

    if(playerHealth>=4){UIYangList[3].setAlpha(1);}
    else{UIYangList[3].setAlpha(0);}

    if(playerHealth>=5){UIYangList[4].setAlpha(1);}
    else{UIYangList[4].setAlpha(0);}

    if(playerHealth>=6){UIYangList[5].setAlpha(1);}
    else{UIYangList[5].setAlpha(0);}

    /////////

    if(playerSeishin>=1){UIYinList[0].setAlpha(1);}
    else{UIYinList[0].setAlpha(0);}

    if(playerSeishin>=2){UIYinList[1].setAlpha(1);}
    else{UIYinList[1].setAlpha(0);}

    if(playerSeishin>=3){UIYinList[2].setAlpha(1);}
    else{UIYinList[2].setAlpha(0);}

    if(playerSeishin>=4){UIYinList[3].setAlpha(1);}
    else{UIYinList[3].setAlpha(0);}

    if(playerSeishin>=5){UIYinList[4].setAlpha(1);}
    else{UIYinList[4].setAlpha(0);}

    if(playerSeishin>=6){UIYinList[5].setAlpha(1);}
    else{UIYinList[5].setAlpha(0);}

///////////////////////////
}


function Controls()
{
    ///////Deplacement axes X Marche-course///////
    leftButton=cursors.left.isDown;
    rightButton=cursors.right.isDown;
    downButton=cursors.down.isDown;
    
    jumpButton=cursors.space.isDown;

    kunaiRight = keyD.isDown;
    kunaiLeft = keyQ.isDown;
    kunaiStand = keyZ.isDown;
    
    balanceButton=cursors.up.isDown;



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



    //On peu JUMP
    if(player.body.blocked.down || player.body.touching.down)
    {
        canJump = true;
    }

    //Lighting attack
    if(downButton==true && !player.body.blocked.down) 
    {
        lightning_attack = true;
        jumpTime = 35; // cancel le jump si attack
        canJump=false; // cancel le jump si attack
    }
    //Crouch 
    else if(downButton == true && player.body.blocked.down) 
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

    if(player.body.blocked.down==true)
    {
        lightning_attack=false;
    }

    //Jump 
    if (jumpButton == true && canJump == true)
    {   
        canJump = false;
        jumpTime=0;
        jump=true;
    }

    //Balance
    if(balanceButton==true)
    {
        balance=true;
    }
    else
    {
        balance=false;
    }
}

function Shifting()
{
    if(runLeft == true)
    {
        lastDirection ="left";
        player.setVelocityX(-runSpeed);
        player.anims.play('RunLeft', true);
        player.setOffset(20,25).setSize(60,90,false);
    }
    else if (runRight == true)
    {
        lastDirection ="right";
        player.setVelocityX(runSpeed);
        player.anims.play('RunRight', true);
        player.setOffset(20,25).setSize(60,90,false);
    }
    else if(idle == true)
    {
        player.setVelocityX(0);

        if(lastDirection=="left")
        {
            player.anims.play('IdleL', true);
            player.setOffset(30,25).setSize(60,90,false);
        }
        else
        {
            player.anims.play('IdleR', true);
            player.setOffset(16,25).setSize(60,90,false);
        }
    }
    else{}
}



function Jump()
{
    if(jump==true)
    {
        if(jumpTime<Jump_time)
        {                                     
            player.setVelocityY(-jumpSpeed);

            if(lastDirection=="left")
            {
                player.setVelocityX(-400);
                player.anims.play('JumpL', true);
            }
            else if(lastDirection=="right")
            {
                player.setVelocityX(400);
                player.anims.play('JumpR', true);
            }
        }
        else
        {
            player.setVelocityY(0);
            player.setVelocityX(0);
            jump=false;
        }
    }
}


function KunaiHere()
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

function KunaiAndTP()
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
        player.x=kunai1.x;
        player.y=kunai1.y-90;
        player.setVelocityY(-20);
        player.setVelocityX(0);
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
        player.x=kunai2.x-60;
        player.y=kunai2.y-91;
        player.setVelocityY(-20);
        player.setVelocityX(0);
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
        player.x=kunai3.x-30;
        player.y=kunai3.y-91;
        player.setVelocityY(0);
        player.setVelocityX(0);
        playerSeishin--;
    }
}


function Lightning()
{
    if(lightning_attack == true)
    {
        player.setVelocityY(800);
        player.setVelocityX(0);
    }
}

function Crouch()
{
    if(playerCrouch == true)
    {
        player.setOffset(20,20).setSize(60,45,false);
        crouching = true;
    }

    if(crouching == true && playerCrouch==false)
    {
        player.y=player.y-45
        crouching =false;
    }
}


function Balance()
{
    if(balance==true)
    {
        var retenu = playerHealth + playerSeishin;
        //console.log(Math.floor(retenu/2));
        if(Math.floor(retenu/2) > 0)
        {
            playerHealth = Math.floor(retenu /2);
            playerSeishin = Math.floor(retenu/2);
        }
    }
}


function Timer()
{
    //saut
    jumpTime++;
    kunaiRightTimer++;
    kunaiLeftTimer++;
    kunaiStandTimer++;
    invincibleTimer++;
}