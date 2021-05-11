
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
        // chargement de la carte
        this.carteDuNiveau = this.add.tilemap("carte");

        // chargement du jeu de tuiles
        this.tileset = this.carteDuNiveau.addTilesetImage("Tile_Set","Phaser_tuilesdejeu");  
        
        // chargement du calque calque_background
        this.backgroundLayer = this.carteDuNiveau.createStaticLayer("Background",this.tileset,0,0);

        //Plateform Classic
        this.plateformes = this.carteDuNiveau.createStaticLayer("Platform_Classic",this.tileset,0,0);
        this.plateformes.setCollisionByExclusion(-1, true);

        //---player
        player = this.physics.add.sprite(playerX, playerY, 'dude').setOrigin(0,0).setOffset(30,25).setSize(60,90,false);

        player.setCollideWorldBounds(true);
        
        
        //---Camera
        this.cameras.main.setSize(1920,1080);
        this.cameras.main.setBounds(1,1,3840,2160);
        this.cameras.main.startFollow(player,true,1,1);

        ///////// UI

        UILightBlue = this.add.image(700, 1025, 'UIBlue').setScrollFactor(0,0).setScale(0.07);

        UILightYellow = this.add.image(1220, 1025, 'UIYellow').setScrollFactor(0,0).setScale(0.07); 


        for(let i=0; i < UIYangList.length; i++)
        {
            UIYangList[i] = this.add.sprite(880-(i*70), 1025, 'UIYang').setScrollFactor(0,0).setScale(0.15);
        }

        for(let i=0; i < UIYinList.length; i++)
        {
            UIYinList[i] = this.add.image(1030+(i*70), 1025, 'UIYin').setScrollFactor(0,0).setScale(0.15);
        }

        //  Input Events Reset
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
        cursors = this.input.keyboard.createCursorKeys();

        cursors.left.reset();
        cursors.right.reset();


        
        //Ennemi
        enemy1 = new Ennemi(this,250,250);
        enemy2 = new Ennemi(this,250,250);

        enemyList = [enemy1,enemy2];
        collideEnemyList =[collide1,collide2];

        //door
        door1 = new Porte(this,enemyList.length,700,100);

    ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);

        for(let i=0; i < enemyList.length; i++)
        {
            this.physics.add.collider(player, enemyList[i].ReturnType(),collideEnemyList[i]);
            this.physics.add.collider(this.plateformes, enemyList[i].ReturnType());
            enemyList[i].ReturnType().setCollideWorldBounds(true);
        }


        this.physics.add.collider(player, door1.ReturnType());
        this.physics.add.collider(this.plateformes, door1.ReturnType());
        door1.ReturnType().setCollideWorldBounds(true);
        
        
        
        //la boucle for fait plusieurs collide d'une meme class
        

        //  Input Events Reset
        cursors.left.reset();
        cursors.right.reset();
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

        Controls(); 

        UI();

        Jump();

        //kunai on your place
    
        if(kunaiStand==true && kunai_throw_stand ==false)
        {
            
            kunai3 = this.physics.add.image(player.x+45, player.y+90, 'kunai').setGravityY(-500);
            this.physics.add.collider(kunai3,this.plateformes);
            this.physics.add.collider(kunai3,door1.ReturnType());
            for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai3, enemyList[i].ReturnType());
            }

            kunaiStandTimer = 0;
            kunai_throw_stand = true;
        }

        KunaiHere();

        /////////////////////////////Throw a Kunai

        if(kunaiLeft == true && kunai_throw_left==false)
        {
           
            kunai1 = this.physics.add.image(player.x, player.y+15, 'kunai').setVelocityX(-SpeedKunaiThrow).setGravityY(-500); 
            this.physics.add.collider(kunai1,this.plateformes);
            this.physics.add.collider(kunai1,door1.ReturnType());

            for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai1, enemyList[i].ReturnType());
            }

            kunaiLeftTimer =0;
            kunai_throw_left = true;
        }

        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x+60, player.y+15, 'kunai').setVelocityX(SpeedKunaiThrow).setGravityY(-500);
            this.physics.add.collider(kunai2,this.plateformes);
            this.physics.add.collider(kunai2,door1.ReturnType());
            for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai2, enemyList[i].ReturnType());
            }

            kunaiRightTimer=0;
            kunai_throw_right = true;
        }
        
        KunaiAndTP();

        Lightning();

        Balance();

        //actualisation de l'ouverture de la porte
        door1.DoorOpen();

        //patern enemy
        enemy1.Patern(this.scene);

        //Compteur actualisation ++
        Timer();
    }
}


////////////
