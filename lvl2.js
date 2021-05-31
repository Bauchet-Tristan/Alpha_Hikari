
class lvl2 extends Phaser.Scene //
{ 
    constructor()
    {
        super("lvl2"); 
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
        this.plateformes = this.carteDuNiveau.createStaticLayer("Platform_Classic",this.tileset,0,0);
        this.plateformes.setCollisionByExclusion(-1, true);

        //platform background
        this.plateformes_background = this.carteDuNiveau.createStaticLayer("Platform_Background",this.tileset,0,0);


        //---player
        player = this.physics.add.sprite(playerX, playerY, 'dude').setOrigin(0,0).setOffset(30,25);

        //this.physics.world.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixels);

        player.setCollideWorldBounds(true);
        
        
        //---Camera
        this.cameras.main.setSize(960,540);
        //this.cameras.main.setBounds(0,0,1920,1080);
        this.cameras.main.setBounds(0,0,this.carteDuNiveau.widthInPixels,this.carteDuNiveau.heightInPixelss);
        this.cameras.main.startFollow(player, true);
        
        

        ///////// UI
/*
        UILightBlue = this.add.image(700, 525, 'UIBlue');

        UILightYellow = this.add.image(1220, 525, 'UIYellow') ;


        for(let i=0; i < UIYangList.length; i++)
        {
            UIYangList[i] = this.add.sprite(880-(i*70), 1025, 'UIYang');
        }

        for(let i=0; i < UIYinList.length; i++)
        {
            UIYinList[i] = this.add.image(1030+(i*70), 1025, 'UIYin');
        }
*/

        ////////////Groupe Object 

        //bonus1//
        /*this.groupeBonus1 = this.physics.add.group({
        });

        const groupeBonus1Objects = this.carteDuNiveau.getObjectLayer('Object_bonus1').objects;

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
        this.groupeBonus2 = this.physics.add.group({
        });

        const groupeBonus2Objects = this.carteDuNiveau.getObjectLayer('Object_bonus2').objects;

        for(const i of groupeBonus2Objects){
            this.groupeBonus2.create(i.x,i.y, 'Bonus1')
            .setOrigin(0.5,0.5)
            .setGravityY(-500)
            .setImmovable(true);
        };

        for (const i of this.groupeBonus2.children.entries) {
            this.physics.add.overlap(i,player,PlayerBonus2);
        }



        //ennemi
        this.groupeEnemy = this.physics.add.group({
        });

        const listEnemyObjects = this.carteDuNiveau.getObjectLayer('Object_ennemi').objects;

        for(const i of listEnemyObjects){
            enemyNumberToUnlock++;
            this.groupeEnemy.create(i.x,i.y, 'ennemi')
            .setOrigin(0.5,0.5)
            .setScale(0.7)
            .setImmovable(true);
        }*/

        ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);
/*
        for (const i of this.groupeEnemy.children.entries) 
        {
            this.physics.add.collider(i,player,PlayerEnemy);
            this.physics.add.collider(i,this.plateformes);
        }
        

        // Input Events Reset
        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
        cursors.left.reset();
        cursors.space.reset();*/
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

        //UI();

        Controls(); 

        Shifting();

        Jump();

       // Lightning();
        
        //Crouch();


        //kunai on your place
    /*
        if(kunaiStand==true && kunai_throw_stand ==false)
        {
            kunai3 = this.physics.add.image(player.x+45, player.y+90, 'Projectil');
            kunai3.body.allowGravity = false;
            this.physics.add.collider(kunai3,this.plateformes);

            for (const i of this.groupeEnemy.children.entries) 
            {
                this.physics.add.collider(i,kunai3);
            }

            kunaiStandTimer = 0;
            kunai_throw_stand = true;
        }

        KunaiHere();

        /////////////////////////////Throw a Kunai

        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x+60, player.y+15, 'ProjectilRight').setVelocityX(SpeedKunaiThrow);
            kunai2.body.allowGravity = false;
            this.physics.add.collider(kunai2,this.plateformes);
            for (const i of this.groupeEnemy.children.entries) 
            {
                this.physics.add.collider(i,kunai2);
            }
            kunaiRightTimer=0;
            kunai_throw_right = true;
        }

        if(kunaiLeft == true && kunai_throw_left==false)
        {
            kunai1 = this.physics.add.image(player.x, player.y+15, 'ProjectilLeft').setVelocityX(-SpeedKunaiThrow); 
            kunai1.body.allowGravity = false;
            this.physics.add.collider(kunai1,this.plateformes);

            for (const i of this.groupeEnemy.children.entries) 
            {
                this.physics.add.collider(i,kunai1);
            }

            kunaiLeftTimer =0;
            kunai_throw_left = true;
        }

        
        KunaiAndTP();

        Balance();

        /////////////////// Bonus ///////////////////

        Bonus1();
        Bonus2();
        BonusUI();

        /////////////////// Ennemi Property ///////////////////

        for (const i of this.groupeEnemy.children.entries) 
        {
            Patern(i);
        }
*/

        //Compteur actualisation ++//
        Timer();
    }
}


////////////
