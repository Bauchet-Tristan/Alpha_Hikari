class lvl_boss extends Phaser.Scene //
{ 
    constructor()
    {
        super("lvl_boss"); 
    }

    preload ()
    {
    }

    create ()
    {
        //Song
        var musiclvlConfig ={
            mute: false,
            volume: 0.3,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        musiclvl.play(musiclvlConfig);

        
        Fond(this);
        cursors = this.input.keyboard.createCursorKeys();

        //  Input Events Reset
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
        cursors.left.reset();
        cursors.space.reset();


        // chargement de la carte
        this.carteDuNiveau = this.add.tilemap("carteBoss");

        // chargement du jeu de tuiles
        this.tileset = this.carteDuNiveau.addTilesetImage("Tile_Set","Phaser_tuilesdejeu");  
        
        // chargement du calque calque_background
        this.backgroundLayer = this.carteDuNiveau.createLayer("Grille/Background",this.tileset,0,0);

        //Plateform Classic
        this.plateformes = this.carteDuNiveau.createLayer("Grille/Platform_Classic",this.tileset,0,0);
        this.plateformes.setCollisionByExclusion(-1, true);

        //platform background
        //this.plateformes_background = this.carteDuNiveau.createStaticLayer("Platform_Background",this.tileset,0,0);



        //---player--//
        player = this.physics.add.sprite(2550, 1000, 'dude').setOrigin(0.5,0.5).setSize(40,85,false);
        //player = this.physics.add.sprite(playerX, 1000, 'dude').setOrigin(0.5,0.5).setSize(40,85,false);

        this.physics.world.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixels);

        player.setCollideWorldBounds(true);
        player.body.setMaxVelocityY(900);

        //---Camera
        this.cameras.main.setSize(config.width,config.height);
        this.cameras.main.startFollow(player);
        this.cameras.main.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixelss);
        


        
        ////////////Groupe Object 

        //Platforme//

        const groupePlatform_object= this.carteDuNiveau.getObjectLayer('Object/Platform_object').objects;

        this.plateformList = [];

        for(const i of groupePlatform_object)
        {
            this.plateformList [groupePlatform_object.indexOf(i)] = new PlatformeHitBox(this,i.x+40,i.y-40).setAlpha(0);;
            //this.physics.add.collider(this.plateformList [groupePlatform_object.indexOf(i)],player);
        }


        //Key3//

        const groupeKey3Objects= this.carteDuNiveau.getObjectLayer('Object/KeySwitch1').objects;

        this.key3List = [];

        for(const i of groupeKey3Objects)
        {
            this.key3List[groupeKey3Objects.indexOf(i)] = new Clef3(this,i.x+40,i.y-10);

            //collide key
            this.physics.add.overlap(this.key3List[groupeKey3Objects.indexOf(i)],player,this.key3List[groupeKey3Objects.indexOf(i)].keyPlayer);
        }



        //Door3//

        const groupeDoor3Objects= this.carteDuNiveau.getObjectLayer('Object/DoorSwitch1').objects;

        this.door3List = [];

        for(const i of groupeDoor3Objects)
        {
            this.door3List [groupeDoor3Objects.indexOf(i)] = new Porte3(this,1,i.x+40,i.y);

            this.collideDoor3 = this.physics.add.collider(this.door3List [groupeDoor3Objects.indexOf(i)],player);
        }



        //Key2//

        const groupeKey2Objects= this.carteDuNiveau.getObjectLayer('Object/Key2').objects;

        this.key2List = [];

        for(const i of groupeKey2Objects)
        {
            this.key2List [groupeKey2Objects.indexOf(i)] = new Clef2(this,i.x+40,i.y-10);

            //collide key
            this.physics.add.overlap(this.key2List[groupeKey2Objects.indexOf(i)],player,this.key2List[groupeKey2Objects.indexOf(i)].keyPlayer);
        }



        //Door2//

         const groupeDoor2Objects= this.carteDuNiveau.getObjectLayer('Object/Door2').objects;

         this.door2List = [];
 
         for(const i of groupeDoor2Objects)
         {
             this.door2List [groupeDoor2Objects.indexOf(i)] = new Porte2(this,1,i.x+40,i.y);
 
             this.physics.add.collider(this.door2List [groupeDoor2Objects.indexOf(i)],player);
         }



        //Key1//

        const groupeKeyObjects= this.carteDuNiveau.getObjectLayer('Object/Key').objects;

        this.keyList = [];

        for(const i of groupeKeyObjects)
        {
            this.keyList [groupeKeyObjects.indexOf(i)] = new Clef(this,i.x+40,i.y+10);

            //collide key
            this.physics.add.overlap(this.keyList[groupeKeyObjects.indexOf(i)],player,this.keyList[groupeKeyObjects.indexOf(i)].keyPlayer);
        }



        //Door1//

        const groupeDoorObjects= this.carteDuNiveau.getObjectLayer('Object/Door1').objects;

        this.doorList = [];

        for(const i of groupeDoorObjects)
        {
            this.doorList [groupeDoorObjects.indexOf(i)] = new Porte(this,1,i.x+40,i.y);

            this.physics.add.collider(this.doorList [groupeDoorObjects.indexOf(i)],player);
        }



        //bonus1//

        this.groupeBonus1 = this.physics.add.group({
        });

        const groupeBonus1Objects = this.carteDuNiveau.getObjectLayer('Object/Object_bonus1').objects;

        for(const i of groupeBonus1Objects){
            this.groupeBonus1.create(i.x,i.y, 'Bonus1')
            .setOrigin(0.5,0.5)
            .setGravityY(-1400)
            .setImmovable(true);
        };

        for (const i of this.groupeBonus1.children.entries) {
            this.physics.add.overlap(i,player,PlayerBonus1);
        }


        //bonus2//
        this.groupeBonus2 = this.physics.add.group({});

        const groupeBonus2Objects = this.carteDuNiveau.getObjectLayer('Object/Object_bonus2').objects;

        for(const i of groupeBonus2Objects){
            this.groupeBonus2.create(i.x,i.y, 'Bonus1')
            .setOrigin(0.5,0.5)
            .setGravityY(-1400)
            .setImmovable(true);
        };

        for (const i of this.groupeBonus2.children.entries) {
            this.physics.add.overlap(i,player,PlayerBonus2);
        }

        /////////////////////////// Ennemi /////////////////////////// 

        //ennemi1

        const groupeEnnemi1Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi1').objects;

        this.Ennemi1List = [];

        /*for(const i of groupeEnnemi1Objects)
        {
            this.Ennemi1List [groupeEnnemi1Objects.indexOf(i)] = new Ennemi1(this,i.x,i.y);

            this.Ennemi1Collide = this.physics.add.collider(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],player,this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)].Ennemi1Player);

            this.physics.add.collider(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],this.plateformes);
        }*/

        //ennemi2
        const groupeEnnemi2Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi2').objects;

        this.Ennemi2List = [];
        /*
        const groupeEnnemi2Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi2').objects;

        this.Ennemi2List = [];

        for(const i of groupeEnnemi2Objects)
        {
            this.Ennemi2List [groupeEnnemi2Objects.indexOf(i)] = new Ennemi2(this,i.x,i.y);

            this.Ennemi2Collide = this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],player,this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)].Ennemi2Player);
        
            this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],this.plateformes);
        }*/

        //ennemi3

        const groupeEnnemi3Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi3').objects;

        this.Ennemi3List = [];

        /*for(const i of groupeEnnemi3Objects)
        {
            this.Ennemi3List [groupeEnnemi3Objects.indexOf(i)] = new Ennemi3(this,i.x,i.y);

            this.Ennemi3Collide = this.physics.add.collider(this.Ennemi3List[groupeEnnemi3Objects.indexOf(i)],player,this.Ennemi3List[groupeEnnemi3Objects.indexOf(i)].Ennemi3Player);
        
            this.physics.add.collider(this.Ennemi3List[groupeEnnemi3Objects.indexOf(i)],this.plateformes);
        }*/

        //Boss
        const groupeBossObjects = this.carteDuNiveau.getObjectLayer('Object/Boss').objects;

        this.BossList = [];

        for(const i of groupeBossObjects)
        {
            this.BossList [groupeBossObjects.indexOf(i)] = new Boss(this,i.x,i.y-160);

            this.BossCollide = this.physics.add.overlap(this.BossList[groupeBossObjects.indexOf(i)],player,this.BossList[groupeBossObjects.indexOf(i)].BossPlayer);
        
            //this.physics.add.collider(this.BossList[groupeBossObjects.indexOf(i)],this.plateformes);
        }

        //BossPlatform
        const groupeBossPlatformObjects= this.carteDuNiveau.getObjectLayer('Object/BossPlatform').objects;

        this.BossPlatformList = [];

        for(const i of groupeBossPlatformObjects)
        {
            this.BossPlatformList [groupeBossPlatformObjects.indexOf(i)] = new BossPlatform(this,i.x+40,i.y);

            this.collideBossPlatform = this.physics.add.overlap(this.BossPlatformList [groupeBossPlatformObjects.indexOf(i)],player);
        }


        ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);
        
        ///////// UI
        UICreation(this);
        enemyNumberToUnlock = 0;

        // Input Events Reset
        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
        cursors.left.reset();
        cursors.space.reset();
    }
    

//////////////
//////////////
//////////////
//////////////
//////////////      Update
//////////////
//////////////
//////////////
//////////////


    update ()
    {
        if(enemyNumberToUnlock >= 7)
        {
            console.log("win");
        }

        playerSeishin=7;

        if (gameOver == true)
        {
            console.log("gameOver");
            playerHealth = 6;

            player.x = 2550;
            player.y = 1000;

            if(enemyNumberToUnlock <= 3)
            {
                for(let i = 0; i< this.Ennemi2List.length; i++)
                {
                    if(this.Ennemi2List[i].displayList != null)
                    {
                        this.Ennemi2List[i].Destroy();
                    }
                }
            }

            if(enemyNumberToUnlock == 4)
            {
                this.Ennemi1List[0].Destroy();
            }
            if(enemyNumberToUnlock == 6)
            {
                this.Ennemi3List[0].Destroy();
            }

            enemyNumberToUnlock = 0;

            gameOver = false;
            //return;
        }
        
        //CloudMove();

        //Controle Joueur
          


        ///////////// Avatar and UIAvatar Property /////////////

        UI();

        Controls(this,"false"); 

        kunai_click(this);

        Mark_Space(this);

        Shifting();

        Jump();

        Lightning();
        
        //Crouch();


        Balance();

        /////////////////// Door ////////////////////

        //door1
        for(let i = 0; i< this.doorList.length; i++)
        {
            this.doorList[i].DoorOpen(keyNumber);
        }

        //door2
        for(let i = 0; i< this.door2List.length; i++)
        {
            this.door2List[i].DoorOpen(keyNumber2);
        }

        //door3
        for(let i = 0; i< this.door3List.length; i++)
        {
            this.door3List[i].DoorOpen(this.collideDoor3);
        }

        if(restartDoor3 >= 1)      
        {        
            for(let i = 0; i< this.door3List.length; i++)
            {
                this.door3List[i].Reset(this.collideDoor3);
            }
        }

        //Key3
        for(let i = 0; i< this.key3List.length; i++)
        {
            this.key3List[i].Switch(this.key3List[i],player);
        }


        /////////////////// Bonus ///////////////////

        Bonus1();
        Bonus2();

        /////////////////// Ennemi Property ///////////////////
        
        //Spawn
        if(enemyNumberToUnlock == 0)
        {
            const groupeEnnemi2Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi2').objects;

            this.Ennemi2List = [];
            for(const i of groupeEnnemi2Objects)
            {
                this.Ennemi2List [groupeEnnemi2Objects.indexOf(i)] = new Ennemi2(this,i.x,i.y);

                this.Ennemi2Collide = this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],player,this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)].Ennemi2Player);
            
                this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],this.plateformes);
            }
            enemyNumberToUnlock++;
        }
        //console.log(enemyNumberToUnlock);
        if(enemyNumberToUnlock == 3)
        {
            const groupeEnnemi1Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi1').objects;

            this.Ennemi1List = [];
            for(const i of groupeEnnemi1Objects)
            {
                this.Ennemi1List [groupeEnnemi1Objects.indexOf(i)] = new Ennemi1(this,i.x,i.y);

                this.Ennemi1Collide = this.physics.add.overlap(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],player,this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)].Ennemi1Player);
            
                this.physics.add.collider(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],this.plateformes);
            }
            enemyNumberToUnlock++;
        }

        if(enemyNumberToUnlock == 5)
        {
            const groupeEnnemi3Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi3').objects;

            this.Ennemi3List = [];
            for(const i of groupeEnnemi3Objects)
            {
                this.Ennemi3List [groupeEnnemi3Objects.indexOf(i)] = new Ennemi3(this,i.x,i.y);

                this.Ennemi3Collide = this.physics.add.overlap(this.Ennemi3List[groupeEnnemi3Objects.indexOf(i)],player,this.Ennemi3List[groupeEnnemi3Objects.indexOf(i)].Ennemi3Player);
            
                this.physics.add.collider(this.Ennemi1List[groupeEnnemi3Objects.indexOf(i)],this.plateformes);
            }
            enemyNumberToUnlock++;
        }

        


        ///////////////// Ennemi1

        for(let i = 0; i< this.Ennemi1List.length; i++)
        {
            if(this.Ennemi1List[i].displayList != null)
            {
                this.Ennemi1List[i].Patern(this.Ennemi1Collide);
            }
        }


        ///////////////// Ennemi2 

        for(let i = 0; i< this.Ennemi2List.length; i++)
        {
            if(this.Ennemi2List[i].displayList != null)
            {
                this.Ennemi2List[i].Patern(this.Ennemi2Collide);
            }
        }


        ///////////////// Ennemi3 

        for(let i = 0; i< this.Ennemi3List.length; i++)
        {
            if(this.Ennemi3List[i].displayList != null)
            {
                this.Ennemi3List[i].Patern(this.Ennemi3Collide);
            }
        }

        ///////////////// Boss
        for(let i = 0; i< this.BossList.length; i++)
        {
            if(this.BossList[i].displayList != null)
            {
                this.BossList[i].Patern(this.BossCollide);
            }
        }

        ///////////////// BossPlatform
        
        for(let i = 0; i< this.BossPlatformList.length; i++)
        {
            if(this.BossPlatformList[i].displayList != null)
            {
                this.BossPlatformList[i].Patern(this.BossPlatformCollide);
            }
        }

        //Compteur actualisation ++//
        Timer();
    }
}

////////////
