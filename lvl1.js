
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
        cursors.up.reset();
        cursors.down.reset();


        // chargement de la carte
        this.carteDuNiveau = this.add.tilemap("carte");

        // chargement du jeu de tuiles
        this.tileset = this.carteDuNiveau.addTilesetImage("Tile_Set","Phaser_tuilesdejeu");  
        
        // chargement du calque calque_background
        this.backgroundLayer = this.carteDuNiveau.createStaticLayer("Background",this.tileset,0,0);



        //---player
        player = this.physics.add.sprite(playerX, playerY, 'dude');
        player.setScale(2);
        player.setCollideWorldBounds(true);


        //---Camera
        this.cameras.main.setSize(960,540);
        this.cameras.main.setBounds(0,0,950,830);
        this.cameras.main.startFollow(player,true,1,1);


        //  Input Events Reset
        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
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
            gameOver = false;
            //return;
        }
    }
}


////////////
