
class Story1 extends Phaser.Scene //
{ 
    constructor()
    {
        super("Story1"); 
    }

    preload ()
    {
        //audio
        this.load.audio("Story1","Song/Story/Story_1.mp3");

        //image
        this.load.image("Story1Arazuma","assets/Story/72ppi/Story1Arazuma.png");
        this.load.image("StorySpace","assets/Story/72ppi/StorySpacePress.png");
    }

    create ()
    {
        musiclvl.play(musiclvlConfig);
        cursors.space.reset();
        cursors = this.input.keyboard.createCursorKeys();

        //
        this.skip =true;
        this.dialogue = 0;


        //Song
        this.Story1 = this.sound.add("Story1");
      
        this.image = this.add.image(600, 625, 'Story1Arazuma').setAlpha(0);
        this.add.image(950, 100, 'StorySpace');

        cursors.space.reset();
    }


    update ()
    {
        //console.log(this.dialogue);

        if(cursors.space.isDown && this.skip==true)
        {
            this.dialogue++;
            this.skip=false;
        }

        if(cursors.space.isUp)
        {
            this.skip=true;            
        }


        if(this.dialogue==0)
        {
            this.Story1.play(storyConfig);           
        }



        if(this.dialogue == 1)
        {
            this.image.setAlpha(1);
        }


        if(this.dialogue == 2)
        {
            this.Story1.stop();  
            this.scene.start("lvl_tuto"); 
        }
    }
}

////////////
