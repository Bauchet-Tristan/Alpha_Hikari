
class Menu extends Phaser.Scene //
{ 
    constructor()
    {
        super("Menu"); //nom = menu 
    }

    preload()
    {
        this.load.image("Phaser_tuilesdejeu", "assets/Tile_Set.png");
        this.load.tilemapTiledJSON("carte", "Map_Hikari.json");
        this.load.tilemapTiledJSON("carteTuto", "Map_Tuto.json");
        this.load.tilemapTiledJSON("carteBoss", "Map_Boss.json");

        this.load.spritesheet("ArazamiR", "assets/CaractereAnnimationRight.png", { frameWidth: 74, frameHeight: 103 });
        this.load.spritesheet("ArazamiL", "assets/CaractereAnnimationLeft.png", { frameWidth: 74, frameHeight: 103 });

        this.load.image("Mark","assets/Mark.png");
        this.load.image("Projectile","assets/Projectile.png");
        this.load.image("HitBoxTP","assets/Projectil2.png");
        this.load.image("HitBoxPlatform","assets/HitBoxPlatform.png");
        this.load.spritesheet("MarkAnimation", "assets/Sparkle_117_114.png", { frameWidth: 117, frameHeight: 114 });
        this.load.spritesheet("LightningLink", "assets/link-Lightning_241_101.png", { frameWidth: 241, frameHeight: 101 });


        this.load.image("door1","assets/FichierDoor(1).png");
        this.load.image("door2","assets/FichierDoor(2).png");
        this.load.image("door3","assets/FichierDoor(3).png");

        this.load.image("key1","assets/key(1).png");
        this.load.image("key2","assets/key(2).png");
        this.load.image("key3","assets/key(3).png");

        this.load.image("UIYin","assets/UI//72ppi/Fichier1UI.png");
        this.load.image("UIYang","assets/UI//72ppi/Fichier2UI.png");

        this.load.image("UIYinVide","assets/UI//72ppi/Fichier1Vide.png");
        this.load.image("UIYangVide","assets/UI//72ppi/Fichier2Vide.png");

        this.load.image("UIBlue","assets/UI//72ppi/Fichier3Lightning.png");
        this.load.image("UIYellow","assets/UI//72ppi/Fichier2Lightning.png");

        this.load.image("Bonus1","assets/Bonus1.png");
        
        this.load.spritesheet('ennemi', 'assets/wolf.png', { frameWidth: 211, frameHeight: 106 });

        this.load.spritesheet("GoatR", "assets/Bouquetin_116_123.png", { frameWidth: 116, frameHeight: 123 });
 
        this.load.spritesheet("GrueR", "assets/Grue_Right_161_147.png", { frameWidth: 161, frameHeight: 147 });
        this.load.spritesheet("GrueL", "assets/Grue_Left_162_147.png", { frameWidth: 162, frameHeight: 147 });

        this.load.spritesheet("GrueLPrepa", "assets/GrueLeftPrepaAttack_132_145.png", { frameWidth: 132, frameHeight: 145 });
        this.load.spritesheet("GrueRPrepa", "assets/GrueRightPrepaAttack_132_145.png", { frameWidth: 132, frameHeight: 145 });

        this.load.spritesheet("Boss", "assets/Boss.png", { frameWidth: 160, frameHeight: 800 });
        this.load.image("ProjectilBoss","assets/ProjectilBoss.png");

        this.load.spritesheet("Explosion", "assets/Explosion_118_117.png", { frameWidth: 118, frameHeight: 117 });


        this.load.image("FOND1","assets/Background/72ppi/Plan(1).png");
        this.load.image("FOND2","assets/Background/72ppi/Plan(2).png");
        this.load.image("FOND3","assets/Background/72ppi/Plan(3).png");
        this.load.image("FOND4","assets/Background/72ppi/Plan(4).png");
        this.load.image("FOND5","assets/Background/72ppi/Plan(5).png");
        this.load.image("FOND6","assets/Background/72ppi/Plan(6).png");
        this.load.image("Sun","assets/Background/72ppi/Plan(7).png");

        //nuage
        this.load.image("Nuage1","assets/Background/72ppi/Nuage(1).png");
        this.load.image("Nuage2","assets/Background/72ppi/Nuage(2).png");
        this.load.image("Nuage3","assets/Background/72ppi/Nuage(3).png");
        this.load.image("Nuage4","assets/Background/72ppi/Nuage(4).png");

        //fond
        this.load.image("StarterScreen","assets/EcranTitre.png");

        ////Song
        this.load.audio("lvlSong","Song/Game-Song.mp3");
        this.load.audio("kunai","Song/KunaiLancer.mp3");
        this.load.audio("Storm","Song/StormSong.mp3");

    }

    create()
    {   
        //Song
        musiclvl = this.sound.add("lvlSong");
        songKunai = this.sound.add("kunai");
        songStormTpKunai = this.sound.add("Storm");
        songStormLightning = this.sound.add("Storm");
        songStormTpMark = this.sound.add("Storm");

        ////
        this.add.image(960, 540, 'StarterScreen');

        this.add.text(450,0, "Press space to play").setScale(5,5);  

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
            frameRate: 12,
            repeat: -1
        });
    
        this.anims.create({
            key: 'WolfRight',
            frames: this.anims.generateFrameNumbers('ennemi', { start: 12, end: 23 }),
            frameRate: 12,
            repeat: -1
        });

        //Goat

        this.anims.create({
            key: 'GoatIdle',
            frames: this.anims.generateFrameNumbers('GoatR', { start: 16, end: 32 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'GoatJump',
            frames: this.anims.generateFrameNumbers('GoatR', { start: 0, end: 14 }),
            frameRate: 14,
            repeat: -1
        });

        //Grue

        this.anims.create({
            key: 'GrueFlyRight',
            frames: this.anims.generateFrameNumbers('GrueR', { start: 0, end: 62 }),
            frameRate: 60,
            repeat: -1
        });

        this.anims.create({
            key: 'GrueFlyLeft',
            frames: this.anims.generateFrameNumbers('GrueL', { start: 0, end: 62 }),
            frameRate: 60,
            repeat: -1
        });

        this.anims.create({
            key: 'GrueRightPrepaAttack',
            frames: this.anims.generateFrameNumbers('GrueRPrepa', { start: 0, end: 62 }),
            frameRate: 60,
            repeat: -1
        });

        this.anims.create({
            key: 'GrueLeftPrepaAttack',
            frames: this.anims.generateFrameNumbers('GrueLPrepa', { start: 0, end: 62 }),
            frameRate: 60,
            repeat: -1
        });

        //Projectile
        this.anims.create({
            key: 'MarkAnimationRotate',
            frames: this.anims.generateFrameNumbers('MarkAnimation', { start: 0, end: 9 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'LightningLink',
            frames: this.anims.generateFrameNumbers('LightningLink', { start: 0, end: 15 }),
            frameRate: 16,
            repeat: -1
        });

        this.anims.create({
            key: 'LightningLinkEnd',
            frames: this.anims.generateFrameNumbers('LightningLink', { start: 0, end: 15 }),
            frameRate: 50,
            repeat: 0
        });

        this.anims.create({
            key: 'LightningLinkTP',
            frames: this.anims.generateFrameNumbers('LightningLink', { start: 17, end: 33 }),
            frameRate: 30,
            repeat: 0
        });

        //enemy die
        this.anims.create({
            key: 'enemyDie',
            frames: this.anims.generateFrameNumbers('Explosion', { start: 0, end: 6 }),
            frameRate: 30,
            repeat: 0
        });

        //Boss
        
        /*this.anims.create({
            key: 'bossLazer',
            frames: this.anims.generateFrameNumbers('boss', { start: 0, end: 6 }),
            frameRate: 30,
            repeat: 0
        });*/

        cursors = this.input.keyboard.createCursorKeys();
        cursors.space.reset();
    }

    update()
    {
        this.scene.start("lvl_tuto"); 
        //controling(this);

        if(cursors.space.isDown)
        {
            this.scene.start("lvl_tuto");
        }
        
    }
}

// Fonction du code
function controling(scene)
{
    boby=cursors.space.isDown;
}

function Fond(scene)
{
    scene.add.image(2300, 950, 'FOND6').setScrollFactor(0.8,0.6);
    scene.add.image(2400, 950, 'Sun').setScrollFactor(0.8,0.6);
    scene.add.image(2300, 950, 'FOND5').setScrollFactor(0.8,0.6);
    scene.add.image(2700, 950, 'FOND4').setScrollFactor(0.65,0.6);
    scene.add.image(2700, 950, 'FOND3').setScrollFactor(0.6,0.6);
    scene.add.image(2200, 950, 'FOND2').setScrollFactor(0.55,0.6);
    scene.add.image(2200, 950, 'FOND1').setScrollFactor(0.5,0.6);

    //cloud
    alea = Math.random();
    console.log(cloud1);

    if(alea < 0.5)
    {
        cloud1=scene.physics.add.image(400, 950, 'Nuage1');
        cloud1.body.allowGravity = false;

        cloud2=scene.physics.add.image(400, 500, 'Nuage2');
        cloud2.body.allowGravity = false;
    }
    if(alea > 0.5)
    {
        cloud3=scene.physics.add.image(400, 950, 'Nuage3');
        cloud3.body.allowGravity = false;

        cloud4=scene.physics.add.image(400, 500, 'Nuage4');
        cloud4.body.allowGravity = false;
    }
    


}

function CloudMove()
{   
    if(alea < 0.5)
    {
        cloud1.setVelocityX(6);
        cloud2.setVelocityX(4);
    }
    if(alea > 0.5)
    {
        cloud3.setVelocityX(4);
        cloud4.setVelocityX(6);
    }
}

function Patern(enemy)
{
    distancePlayerEnemy = player.x - enemy.x;
    //console.log(distancePlayerEnemy);
    
    if(distancePlayerEnemy > 1000 || distancePlayerEnemy < -1000)
    {
        enemy.setVelocityX(0);
        //Mettre l'anims loup assis // 
    }
    else
    {
        if(distancePlayerEnemy > 0)
        {
            //gauche
            enemy.anims.play('WolfRight',true);
            enemy.setVelocityX(300);
        }
        else if (distancePlayerEnemy < 0)
        {
            //droite
            enemy.anims.play('WolfLeft',true);
            enemy.setVelocityX(-300);
        }
    }
}

function UICreation(scene)
 {
    UILightBlue = scene.add.image(280, 800, 'UIBlue').setOrigin(0,0).setScrollFactor(0);
    UILightYellow = scene.add.image(995, 800, 'UIYellow').setOrigin(0,0).setScrollFactor(0); 

    for(let i=0; i < UIYangList.length; i++)
    {
        UIYangListVide[i] = scene.add.sprite(800-(i*90), 900, 'UIYangVide').setOrigin(0,0).setScrollFactor(0).setAlpha(1);
        UIYangList[i] = scene.add.sprite(800-(i*90), 900, 'UIYang').setOrigin(0,0).setScrollFactor(0);
    }

    for(let i=0; i < UIYinList.length; i++)
    {
        UIYinListVide[i] = scene.add.image(1070+(i*90), 900, 'UIYinVide').setOrigin(0,0).setScrollFactor(0).setAlpha(1);
        UIYinList[i] = scene.add.image(1070+(i*90), 900, 'UIYin').setOrigin(0,0).setScrollFactor(0);
    }
 }



function UI()
{    
    /*if(playerHealth<=1){UIYangList[0].setAlpha(1);}
    else{UIYangListVide[0].setAlpha(0);}*/

    ////
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




function kunai_click(scene)
{
    if(kunai_Throwing && kunai_throw == false && kunaiTP == false && kunaiUnlock ==true) 
    {
        kunaiUnlock = false;
        kunai_throw = true;
        kunai_active = true;
        kunaiTimer = 0;
        kunaiTimerTouched =0;

        kunai = new Kunai(scene, player.x, player.y - 20);
        songKunai.play();

        scene.physics.add.collider(kunai, scene.plateformes,kunai.KunaiPlatforme);
        for(let i = 0; i< scene.doorList.length; i++)
        {
            scene.physics.add.collider(kunai,scene.doorList[i],kunai.KunaiPlatforme);
        }
        for(let i = 0; i< scene.door2List.length; i++)
        {
            scene.physics.add.collider(kunai,scene.door2List[i],kunai.KunaiPlatforme);
        }
        for(let i = 0; i< scene.door3List.length; i++)
        {
            scene.collide2Door3 = scene.physics.add.collider(kunai,scene.door3List[i],kunai.KunaiPlatforme);
        }

        for(let i = 0; i< scene.BossPlatformList.length; i++)
        {
            scene.physics.add.overlap(kunai,scene.BossPlatformList[i],kunai.KunaiPlatformeBoss);
        }
        
        kunai.Shoot(scene);
        kunai.HitBoxCollide(scene,kunai);

        sparkle = scene.add.sprite(player.x,player.y,"LightningLink");
        sparkle.anims.play('LightningLink',true);
    }

    if(kunaiOUT == true)
    {
        sparkle.destroy();
        kunai.Destroy();
    }

    if(kunai_active == true)
    {

        sparkle.setPosition((kunai.x + player.x)/2, (kunai.y + player.y)/2)

        if(kunai.y < player.y)
        {
            sparkle.rotation =-Math.acos((kunai.x-player.x)/(Math.sqrt(((kunai.x-player.x)**2)+((kunai.y-player.y)**2))));
        }
        else if(kunai.y > player.y)
        {
            sparkle.rotation =Math.acos((kunai.x-player.x)/(Math.sqrt(((kunai.x-player.x)**2)+((kunai.y-player.y)**2))));
        }

        // sparkle.scaleY = Phaser.Math.Distance.BetweenPoints(player, sparkle)/1;
        sparkle.scaleX = Phaser.Math.Distance.BetweenPoints(player, sparkle)/140;

        //////////////////

        kunai.HitBoxFollow();
        //kunai.HitBoxCollideleft();

        if(kunaiTimer >= 150 && kunai_touched == false) //timer si aucune touche
        {
            KunaiRotaStop = SwitchTime;
            kunai.Anim();
            sparkle.anims.play('LightningLinkEnd',true);
            kunai.FadeOut();
        }   
        else if(kunai_touched == true)    
        {
            if(kunaiTimerTouched<150)
            {
                sparkle.anims.play('LightningLink',true);
            }
            if(kunaiTimer >= 150)
            {
                kunaiTimerTouched++;

                if(kunaiTimerTouched >150) // timer si contre un murs
                {
                    sparkle.anims.play('LightningLinkEnd',true);
                    
                    kunai.FadeOut(sparkle);
                }
            }
        }
        else
        {
            KunaiRotaStop = SwitchTime;
            kunai.Anim();
        } 
    }
    ///////////////////////Teleportation kunai

    if(kunai_Throwing == false && kunai_throw ==true)
    {
        kunaiTP = true;
    }

    if(kunai_Throwing && kunai_throw == true && kunaiTP == true && playerSeishin > 0)
    {
        songStormTpKunai.play();
        sparkle.anims.play('LightningLinkTP',true);

        playerSeishin--;
        // 
        if(KunaiHit=="right")
        {
            player.x=kunai.x-20;
            player.y=kunai.y-30;
        }
        else if(KunaiHit=="left")
        {
            player.x=kunai.x+20;
            player.y=kunai.y-30;
        }
        else if(KunaiHit=="down")
        {
            player.x=kunai.x;
            player.y=kunai.y-30;
        }
        else if(KunaiHit=="up")
        {
            player.x=kunai.x;
            player.y=kunai.y+20;
        }

        //dconsole.log(KunaiHit);
        //KunaiHit = "up";
        
        kunai.Destroy();
    }

    if(kunai_Throwing == false && kunai_throw == false)
    {
        kunaiUnlock = true;
    }
}



function Mark_Space(scene)
{
    if(markStand && mark_throw == false && markTP == false && markUnlock ==true) 
    {
        markUnlock = false;
        mark_throw = true;
        mark_active = true;
        markTimer = 0;  

        mark = new Mark(scene, player.x, player.y - 20);
        scene.physics.add.collider(mark, scene.plateformes,);

        for(let i = 0; i< scene.BossPlatformList.length; i++)
        {
            scene.physics.add.overlap(mark,scene.BossPlatformList[i],mark.markPlatform);
        }

        sparkle2 = scene.add.sprite(player.x,player.y,"LightningLink");
        sparkle2.anims.play('LightningLink',true);
    }

    if(markOUT == true)
    {
        sparkle2.destroy();
        mark.Destroy();
    }

    if(mark_active == true)
    {
        sparkle2.setPosition((mark.x + player.x)/2, (mark.y + player.y)/2)

        if(mark.y < player.y)
        {
            sparkle2.rotation =-Math.acos((mark.x-player.x)/(Math.sqrt(((mark.x-player.x)**2)+((mark.y-player.y)**2))));
        }
        else if(mark.y > player.y)
        {
            sparkle2.rotation =Math.acos((mark.x-player.x)/(Math.sqrt(((mark.x-player.x)**2)+((mark.y-player.y)**2))));
        }

        // sparkle.scaleY = Phaser.Math.Distance.BetweenPoints(player, sparkle)/1;
        sparkle2.scaleX = Phaser.Math.Distance.BetweenPoints(player, sparkle2)/140;

        mark.Anim()
       //console.log(markTimer);
        if(markTimer >= 450)
        {
            sparkle2.anims.play('LightningLinkEnd',true);
            mark.FadeOut();
        }   
        else{} 
    }


    ///////////////////////Teleportation

    if(markStand == false && mark_throw ==true)
    {
        
        markTP = true;
    }

    if(markStand && mark_throw == true && markTP == true && playerSeishin > 0)
    {
        sparkle2.anims.play('LightningLinkTP',true);
        songStormTpMark.play();
        playerSeishin--;
        player.x=mark.x;
        player.y=mark.y;
        player.setVelocity(0,0);
        mark.Destroy();
    }

    if(markStand == false && mark_throw == false)
    {
        markUnlock = true;
    }
}



function Controls(scene,didier)
{
    //
    pointer = scene.input.activePointer;
    kunai_Throwing = pointer.isDown;

    keyQ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);  
    keyZ = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

    ///////Deplacement axes X Marche-course///////

    leftButton=keyQ.isDown;
    rightButton=keyD.isDown;
    downButton=keyS.isDown;
    jumpButton=keyZ.isDown;
    balanceButton=keyA.isDown;
    markStand=cursors.space.isDown;
    //jumpButton=cursors.space.isDown;

    /*kunaiRight = keyD.isDown;
    kunaiLeft = keyQ.isDown;
    kunaiStand = keyZ.isDown;*/
    

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


    //Lighting attack
    if(downButton==true && !player.body.blocked.down) 
    {
        lightning_attack = true;
        songStormLightning.play();
    }

    if(player.body.blocked.down==true)
    {
        lightning_attack=false;
    }

    //Balance
    if(balanceButton==true)
    {
        if(didier == "false")
        {
            balance=false;
        }
        else{
            balance=true;
        }
        
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
        player.setOffset(15,10).setSize(50,85,false);

    }
    else if (runRight == true)
    {
        lastDirection ="right";
        player.setVelocityX(runSpeed);
        player.anims.play('RunRight', true);
        player.setOffset(5,10).setSize(50,85,false);

    }
    else if(idle == true)
    {
        player.setVelocityX(0);

        if(lastDirection=="left")
        {
            player.anims.play('IdleL', true);
            player.setOffset(20,10).setSize(40,85,false);
        }
        else
        {
            player.anims.play('IdleR', true);
            player.setOffset(10,10).setSize(40,85,false);
        }
    }
    else{}
}


function Jump()
{
    //if( jumpButton ==true && (player.body.blocked.down || player.body.touching.down))
    if((player.body.blocked.down || player.body.touching.down)&& jumpRelease==true)
    {
        jumpTime=0
    }

    if( jumpButton ==true && jumpTime<50 )
    {  
        jumpTime= 50;     
        jump=true;
        jumpRelease = false;


        player.setVelocityY(-jumpSpeed);
        if(lastDirection=="left")
        {
            //player.setVelocityX(-400);
            player.anims.play('JumpL', true);
        }
        else if(lastDirection=="right")
        {
            //player.setVelocityX(400);
            player.anims.play('JumpR', true);
        }
    }
    else
    {
        jump=false;
    }

    if(jumpButton==false)
    {
        jumpRelease=true;
    }
}

function Lightning()
{
    if(lightning_attack == true)
    {
        player.body.setMaxVelocityY(900);
        player.setVelocityY(900);
        player.setVelocityX(0);
    }
    else
    {
        if(jump)
        player.body.setMaxVelocityY(800);
    }
}


/*
function Crouch()
{
    if(playerCrouch == true)
    {
        player.setSize(40,40,false);
        crouching = true;
    }

    if(crouching == true && playerCrouch==false)
    {
        player.y=player.y-45
        crouching =false;
    }
}*/


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




function PlayerBonus1()
{
    if(bonus1State == "unactive")
    {    
        bonus1Cooldown = 0;
    }
}


function Bonus1()
{    
    if(bonus1Cooldown<=400)
    {
        bonus1State = "active";
        playerSeishin=6;

        //player.setTintFill(0x5f5f5f);//change direct la couleur de base
        player.setTint(0x5f5f5f);//filtre de couleur
    }
    else
    {
        bonus1State = "unactive";
        player.clearTint();
    }
}


function PlayerBonus2()
{
    if(bonus2State == "unactive")
    {    
        bonus1Cooldown = 0;
    }
}

function Bonus2()
{    
    
    if(bonus2Cooldown<=400)
    {
        bonus2State = "active";
        playerSeishin=6;

        //player.setTintFill(0x5f5f5f);//change direct la couleur de base
        player.setTint(0x9D9D99);//filtre de couleur
    }
    else
    {
        bonus2State = "unactive";
        //player.clearTint();
    }
}



function Timer()
{
    //saut
    movingCloud += 0.001;
    jumpTime++;
    kunaiTimer++;
    markTimer++;
    invincibleTimer++;
    bonus1Cooldown++;
    bonus2Cooldown++;
    SwitchTime = SwitchTime+0.1;

    if(SwitchTime >= 180)
    {
        SwitchTime = 0;
    }
}