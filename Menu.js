
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
        this.load.spritesheet('dude', 'assets/dude2.png', { frameWidth: 17, frameHeight: 21 });

        this.load.image("kunai","assets/kunai.png");
    }

    create()
    {
        this.add.text(20,20, "Menu1");  

        ///////////les anims
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

    }

    update()
    {
        this.scene.start("lvl1");
    }
}


function Controls()
{
    ///////Deplacement axes X Marche-course///////
    left=cursors.left.isDown ? true : false;
    right=cursors.right.isDown ? true : false;


    space=cursors.space.isDown ? true : false;

    kunaiRight = keyD.isDown ? true : false;
    kunaiLeft = keyQ.isDown ? true : false;

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


function Jump()
{
    if (space==true && player.body.blocked.down)
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



function Timer()
{
    //saut
    jumpTime++;
    kunaiRightTimer++;
    kunaiLeftTimer++;
}

////////////

