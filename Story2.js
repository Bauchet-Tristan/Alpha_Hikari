
class Story2 extends Phaser.Scene //
{ 
    constructor()
    {
        super("Story2"); 
    }

    preload ()
    {
        this.load.audio("Story2","Song/Story/Story_2.mp3");

        //
        this.load.image("Story2Arazuma","assets/Story/72ppi/Story2Arazuma.png");
    }

    create ()
    {
        cursors.space.reset();
        cursors = this.input.keyboard.createCursorKeys();

        //
        this.skip =true;
        this.dialogue =0;

        //Song
        this.Story2 = this.sound.add("Story2");

        /////////////

        this.image = this.add.image(600, 625, 'Story2Arazuma').setAlpha(0);
        this.add.image(950, 100, 'StorySpace');
        

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
        ////////////////////////////

        if(this.dialogue==0)
        {
            this.Story2.play(storyConfig);           
        }

        if(this.dialogue==1)
        {
            this.image.setAlpha(1);          
        }

        
        if(this.dialogue == 2)
        {
            this.Story2.stop();  
            this.scene.start("lvl1"); 
        }


    }
}

////////////
