
class Story2 extends Phaser.Scene //
{ 
    constructor()
    {
        super("Story2"); 
    }

    preload ()
    {
    }

    create ()
    {
        cursors.space.reset();
        cursors = this.input.keyboard.createCursorKeys();

        //
        this.skip =true;
        this.dialogue =0;

        cursors.space.reset();
    }


    update ()
    {
        if(cursors.space.isDown && this.skip==true)
        {
            this.skip=false;
            this.dialogue++;
            //console.log("+1");
        }

        if(cursors.space.isUp)
        {
            this.skip=true;            
        }


        if(this.dialogue==1)
        {
            this.scene.start("lvl1");             
        }
    }
}

////////////
