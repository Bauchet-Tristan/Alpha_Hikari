
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


        //---Camera
        this.cameras.main.setSize(1920,1080);
        this.cameras.main.setBounds(0,0,3840,2160);
        this.cameras.main.startFollow(player,true,1,1);


    ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);


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

        Jump();


        /////////////////////////////Throw a Kunai
        //left//

        if(kunaiLeft == true && kunai_throw_left==false)
        {
            kunaiLeftTimer =0;
            kunai1 = this.physics.add.image(player.x, player.y, 'kunai').setVelocityX(-400).setGravityY(-500);
            kunai_throw_left = true;
        }
        
        if(kunai_throw_left == true && kunaiLeftTimer >= 50)
        {
            kunai1.setVelocityX(0);
        }

        if(kunai_throw_left == true && kunaiLeftTimer >= 200)
        {
            kunai1.disableBody(true,true);

            if(kunaiLeft==false)
            {
                kunai_throw_left = false;
                kunai1TP=false;
            }
        }    


        //right//
        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x, player.y, 'kunai').setVelocityX(400).setGravityY(-500);
            kunaiRightTimer=0;
            kunai_throw_right = true;
        }

        if(kunai_throw_right == true && kunaiRightTimer >= 50)
        {
            kunai2.setVelocityX(0);
        }
        
        if(kunai_throw_right == true && kunaiRightTimer >= 200)
        {
            kunai2.disableBody(true,true);

            if(kunaiRight==false)
            {
                kunai_throw_right = false;
                kunai2TP=false;
            }
            
        }

        /////////////////////////////Throw a Kunai End


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
            kunaiLeftTimer =200;
            player.x=kunai1.x;
            player.y=kunai1.y;
        }

        //Droite
        if(kunaiRight==false && kunai_throw_right==true)
        {
            kunai2TP=true;
        }
        
        if(kunai2TP==true && kunaiRight == true)
        {
            kunai2TP=false;
            kunaiRightTimer =200;
            player.x=kunai2.x;
            player.y=kunai2.y;
        }

        



        //Compteur actualisation ++
        Timer();
    }
}


////////////
