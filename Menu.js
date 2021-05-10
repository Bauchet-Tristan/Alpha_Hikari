
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

        this.load.spritesheet('dude', 'assets/dude2.png', { frameWidth: 17, frameHeight: 21 });

        this.load.image("kunai","assets/kunai.png");
        this.load.image("door","assets/Door.png");

        this.load.spritesheet('ennemi', 'assets/wolf.png', { frameWidth: 211, frameHeight: 106 });
    }

    create()
    {
        this.add.text(20,20, "Menu1");  

        ///////////les anims Player
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 17 }),
            frameRate: 5,
            repeat: -1
        });
        /////

         ///////////les anims Ennemi
        this.anims.create({
            key: 'WolfLeft',
            frames: this.anims.generateFrameNumbers('wolf', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'WolfRight',
            frames: this.anims.generateFrameNumbers('wolf', { start: 12, end: 23 }),
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

function Controls()
{
    ///////Deplacement axes X Marche-course///////
    left=cursors.left.isDown;
    right=cursors.right.isDown;
    down=cursors.down.isDown;
    

    space=cursors.space.isDown;

    kunaiRight = keyD.isDown;
    kunaiLeft = keyQ.isDown;
    kunaiStand=cursors.up.isDown;

    if (left==true)
    {
        lastDirection ="left";
        player.setVelocityX(-150);
        player.anims.play('left', true);
    }
    else if (right == true)
    {
        lastDirection ="right";
        player.setVelocityX(150);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn', true);
    }
}


function UI()
{
    
}


function Jump()
{
    if (space==true && player.body.blocked.down || space==true && player.body.touching.down)
    {
        jumpTime=0;
        jump=true;
    }

    if(jump==true)
    {
        if(jumpTime<30)
        {                                     
            player.setVelocityY(-550);

            if(lastDirection=="left")
            {
                player.setVelocityX(-400);
            }
            else if(lastDirection=="right")
            {
                player.setVelocityX(400);
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
    if(kunai1TP==true && kunaiLeft == true)
    {
        kunai1TP=false;
        kunaiLeftTimer =300;
        player.x=kunai1.x+1.5;
        player.y=kunai1.y;
        player.setVelocityY(-20);
        player.setVelocityX(0);
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
    
    if(kunai2TP==true && kunaiRight == true)
    {
        kunai2TP=false;
        kunaiRightTimer = DispawnKunaiThrowTimer;
        player.x=kunai2.x+1.5;
        player.y=kunai2.y;
        player.setVelocityY(-20);
        player.setVelocityX(0);
    }

    //Stand
    if(kunaiStand==false && kunai_throw_stand==true)
    {
        kunai3TP=true;
    }
    
    if(kunai3TP==true && kunaiStand == true)
    {
        kunai3TP=false;
        kunaiStandTimer = 500;
        player.x=kunai3.x+1.5;
        player.y=kunai3.y;
        player.setVelocityY(0);
        player.setVelocityX(0);
    }
}


function Lightning()
{
    if(down==true) 
    {
        lightning_attack = true;
    }

    if(player.body.blocked.down==true)
    {
        lightning_attack=false;
    }

    if(lightning_attack == true)
    {
        player.setVelocityY(800);
        player.setVelocityX(0);
    }
}


function collide1()
{
    //console.log("didier");
    enemy1.PlayerEnemy();
}


function collide2()
{
    //console.log("didier");
    enemy2.PlayerEnemy();
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