
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
        this.load.image("Phaser_tuilesdejeu", "assets/Tile_Set.png");
        this.load.tilemapTiledJSON("carte", "Map_Hikari.json");
    }

    create ()
    {
        //this.add.text(20,20, "lvl1"); 
        //  Input Events Reset
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        cursors = this.input.keyboard.createCursorKeys();

        cursors.left.reset();
        cursors.right.reset();


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
        player = this.physics.add.sprite(playerX, playerY, 'dude');
        player.setScale(2);
        player.setCollideWorldBounds(true);


        //door
        //door1 = new Porte(this,2);

        //Ennemi
        /*enemy1 = new Ennemi(this);
        enemy2 = new Ennemi(this);*/

        //---Camera
        this.cameras.main.setSize(1920,1080);
        this.cameras.main.setBounds(0,0,3840,2160);
        this.cameras.main.startFollow(player,true,1,1);


    ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);

        /*this.physics.add.collider(player, door1.ReturnType());
        this.physics.add.collider(this.plateformes, door1.ReturnType());*/
        
        /*this.enemyList = [enemy1,enemy2];
        
        //la boucle for fait plusieurs collide d'une meme class
        
        for(let i=0; i < this.enemyList.length; i++)
        {
            this.physics.add.collider(player, this.enemyList[i].ReturnType(),this.enemyList[i].PlayerEnemy);
            this.physics.add.collider(this.plateformes, this.enemyList[i].ReturnType());
        }*/


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
            gameOver = false;
            //return;
        }

        //Controle Joueur
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        Controls(); 

        UI();

        Jump();

        //kunai on your place
    
        if(kunaiStand==true && kunai_throw_stand ==false)
        {
            kunaiStandTimer = 0;
            kunai3 = this.physics.add.image(player.x-1, player.y, 'kunai').setGravityY(-500);
            kunai_throw_stand = true;
        }
        KunaiHere();

        /////////////////////////////Throw a Kunai

        if(kunaiLeft == true && kunai_throw_left==false)
        {
            kunaiLeftTimer =0;
            kunai1 = this.physics.add.image(player.x-33, player.y, 'kunai').setVelocityX(-400).setGravityY(-500);
            kunai_throw_left = true;
        }

        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x+30, player.y, 'kunai').setVelocityX(400).setGravityY(-500);
            kunaiRightTimer=0;
            kunai_throw_right = true;
        }
        
        KunaiAndTP();

        Lightning();

        //actualisation de l'ouverture de la porte
        //door1.DoorOpen(2);

        //patern enemy
        /*enemy1.Patern(this.scene);
       
        enemy1.PlayerEnemy();*/

        //Compteur actualisation ++
        Timer();
    }
}


////////////
