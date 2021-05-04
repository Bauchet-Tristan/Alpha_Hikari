
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
        left=cursors.left.isDown ? true : false;
        right=cursors.right.isDown ? true : false;

        space=cursors.space.isDown ? true : false;

        
        Deplacement(); 
        
        //Saut Axe Y-X
        Jump();

        //Compteur actualisation ++
        Timer();
    }
}


////////////
