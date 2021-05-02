
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
        //this.load.image("Phaser_tuilesdejeu", "TuileGame.png");
        //this.load.tilemapTiledJSON("carte", "map.json");
    }

    create ()
    {
        this.add.text(20,20, "lvl1"); 

        //  Input Events
        cursors = this.input.keyboard.createCursorKeys();
        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();

    

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
