
class lvl1 extends Phaser.Scene //
{ 
    constructor()
    {
        super("lvl1"); 
    }

    init(data)
    {
        //dispo partout
    }


    preload ()
    {
    }

    create ()
    {
        this.add.image(960, 540, 'FOND');
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
        this.carteDuNiveau = this.add.tilemap("carte");

        // chargement du jeu de tuiles
        this.tileset = this.carteDuNiveau.addTilesetImage("Tile_Set","Phaser_tuilesdejeu");  
        
        // chargement du calque calque_background
        this.backgroundLayer = this.carteDuNiveau.createStaticLayer("Background",this.tileset,0,0);

        //Plateform Classic
        this.plateformes = this.carteDuNiveau.createStaticLayer("Grille/Platform_Classic",this.tileset,0,0);
        this.plateformes.setCollisionByExclusion(-1, true);

        //platform background
        this.plateformes_background = this.carteDuNiveau.createStaticLayer("Platform_Background",this.tileset,0,0);


        //---player
        player = this.physics.add.sprite(1500, playerY, 'dude').setOrigin(0.5,0.5).setSize(40,85,false);

        this.physics.world.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixels);

        player.setCollideWorldBounds(true);
        
        
        //---Camera
        this.cameras.main.setSize(config.width,config.height);
        this.cameras.main.startFollow(player);
        this.cameras.main.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixelss);
        

        ///////// UI

        UILightBlue = this.add.image(-250, 500, 'UIBlue').setOrigin(0,0).setScrollFactor(0);

        UILightYellow = this.add.image(820, 500, 'UIYellow').setOrigin(0,0).setScrollFactor(0); 


        for(let i=0; i < UIYangList.length; i++)
        {
            UIYangList[i] = this.add.sprite(800-(i*150), 800, 'UIYang').setOrigin(0,0).setScrollFactor(0);
        }

        for(let i=0; i < UIYinList.length; i++)
        {
            UIYinList[i] = this.add.image(1070+(i*150), 800, 'UIYin').setOrigin(0,0).setScrollFactor(0);
        }


        ////////////Groupe Object 

        //Key1//

        const groupeKeyObjects= this.carteDuNiveau.getObjectLayer('Object/Key').objects;

        this.keyList = [];

        for(const i of groupeKeyObjects)
        {
            this.keyList [groupeKeyObjects.indexOf(i)] = new Clef(this,i.x,i.y);

            //collide key
            this.physics.add.overlap(this.keyList[groupeKeyObjects.indexOf(i)],player,this.keyList[groupeKeyObjects.indexOf(i)].keyPlayer);
        }

        //Door1//

        const groupeDoorObjects= this.carteDuNiveau.getObjectLayer('Object/Door1').objects;

        this.doorList = [];

        for(const i of groupeDoorObjects)
        {
            this.doorList [groupeDoorObjects.indexOf(i)] = new Porte(this,1,i.x,i.y);

            this.physics.add.collider(this.doorList [groupeDoorObjects.indexOf(i)],player);
        }


        //bonus1//

        this.groupeBonus1 = this.physics.add.group({
        });

        const groupeBonus1Objects = this.carteDuNiveau.getObjectLayer('Object/Object_bonus1').objects;

        for(const i of groupeBonus1Objects){
            this.groupeBonus1.create(i.x,i.y, 'Bonus1')
            .setOrigin(0.5,0.5)
            .setGravityY(-500)
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
            .setGravityY(-500)
            .setImmovable(true);
        };

        for (const i of this.groupeBonus2.children.entries) {
            this.physics.add.overlap(i,player,PlayerBonus2);
        }


        //ennemi1

        const groupeEnnemi1Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi1').objects;

        this.Ennemi1List = [];

        for(const i of groupeEnnemi1Objects)
        {
            this.Ennemi1List [groupeEnnemi1Objects.indexOf(i)] = new Ennemi1(this,i.x,i.y);

            this.physics.add.collider(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],player,this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)].Ennemi1Player);

            this.physics.add.collider(this.Ennemi1List[groupeEnnemi1Objects.indexOf(i)],this.plateformes);
        }


        //ennemi2

        const groupeEnnemi2Objects = this.carteDuNiveau.getObjectLayer('Object/Ennemi2').objects;

        this.Ennemi2List = [];

        for(const i of groupeEnnemi2Objects)
        {
            this.Ennemi2List [groupeEnnemi2Objects.indexOf(i)] = new Ennemi2(this,i.x,i.y);

            this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],player,this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)].Ennemi2Player);
        
            this.physics.add.collider(this.Ennemi2List[groupeEnnemi2Objects.indexOf(i)],this.plateformes);

        }


        ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);
        

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
        if (gameOver == true)
        {
            console.log("gameOver");
            playerHealth = 6;
            playerSeishin = 6;
            gameOver = false;
            //return;
        }

        //Controle Joueur
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);     


        ///////////// Avatar and UIAvatar Property /////////////

        UI();

        Controls(); 

        Shifting();

        Jump();

        Lightning();
        
        //Crouch();


        //Kunai on your place
    
        if(kunaiStand==true && kunai_throw_stand ==false)
        {
            kunai3 = this.physics.add.image(player.x+45, player.y+90, 'Projectil');
            kunai3.body.allowGravity = false;
            this.physics.add.collider(kunai3,this.plateformes);

            kunaiStandTimer = 0;
            kunai_throw_stand = true;
        }

        KunaiHere();

        /////////////////////////////Throw a Kunai

        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x-25, player.y-30, 'ProjectilRight').setVelocityX(SpeedKunaiThrow);
            kunai2.body.allowGravity = false;
            this.physics.add.collider(kunai2,this.plateformes);
            
            for(let i = 0; i< this.Ennemi1List.length; i++)
            {
                this.physics.add.collider(this.Ennemi1List[i],kunai2);

                /*for(const i of groupeDoorObjects)
                {
                    this.doorList [groupeDoorObjects.indexOf(i)] = new Porte(this,1,i.x,i.y);
        
                    this.physics.add.collider(this.doorList [groupeDoorObjects.indexOf(i)],player);
                }*/
            }

            kunaiRightTimer=0;
            kunai_throw_right = true;
        }

        if(kunaiLeft == true && kunai_throw_left==false)
        {
            kunai1 = this.physics.add.image(player.x+25, player.y-30, 'ProjectilLeft').setVelocityX(-SpeedKunaiThrow); 
            kunai1.body.allowGravity = false;
            this.physics.add.collider(kunai1,this.plateformes);

            for(let i = 0; i< this.Ennemi1List.length; i++)
            {
                this.physics.add.collider(this.Ennemi1List[i],kunai1);
            }

            kunaiLeftTimer =0;
            kunai_throw_left = true;
        }

        
        KunaiAndTP();

        Balance();

        /////////////////// Door ////////////////////

        for(let i = 0; i< this.doorList.length; i++)
        {
            this.doorList[i].DoorOpen(keyNumber);
        }


        /////////////////// Bonus ///////////////////

        Bonus1();
        Bonus2();

        /////////////////// Ennemi Property ///////////////////

        ///////////////// Ennemi1

        for(let i = 0; i< this.Ennemi1List.length; i++)
        {
            if(this.Ennemi1List[i].displayList != null)
            {
                this.Ennemi1List[i].Patern(this);
            }
        }


        ///////////////// Ennemi2 

        for(let i = 0; i< this.Ennemi2List.length; i++)
        {
            if(this.Ennemi2List[i].displayList != null)
            {
                this.Ennemi2List[i].Patern(this);
            }
        }

        //Compteur actualisation ++//
        Timer();
    }
}


////////////
