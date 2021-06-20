
class Story4 extends Phaser.Scene //
{ 
    constructor()
    {
        super("Story4"); 
    }

    preload ()
    {
        this.load.audio("Story4","Song/Story/Story_4.mp3");

        //
        this.load.image("Story4Arazuma","assets/Story/72ppi/Story4Arazuma.png");
        this.load.image("Generique","assets/Story/72ppi/Generique.png");
        this.load.image("Remerciement","assets/Story/72ppi/Remerciement.png");
        this.load.image("ThankYou","assets/Story/72ppi/ThankYou.png");
    }

    create ()
    {
        musiclvl.stop();
        musiclvl = this.sound.add("lvlSong");
        musiclvl.play(musiclvlConfig);

        cursors.space.reset();
        cursors = this.input.keyboard.createCursorKeys();

        //
        this.skip =true;
        this.dialogue =0;

        //Song
        this.Story4 = this.sound.add("Story4");

        /////////////

        this.image = this.add.image(600, 625, 'Story4Arazuma').setAlpha(0);

        this.image2 = this.add.image(950, 625, 'Generique').setAlpha(0);

        this.image3 = this.add.image(950, 625, 'Remerciement').setAlpha(0);

        this.image4 = this.add.image(950, 625, 'ThankYou').setAlpha(0);

        this.add.image(950, 100, 'StorySpace');
        

        cursors.space.reset();
    }


    update ()
    {
        if(cursors.space.isDown && this.skip==true)
        {
            this.skip=false;
            this.dialogue++;
        }

        if(cursors.space.isUp)
        {
            this.skip=true;            
        }
        ////////////////////////////

        if(this.dialogue==0)
        {
            this.Story4.play(storyConfig);           
        }

        if(this.dialogue==1)
        {
            this.image.setAlpha(1);          
        }

        
        if(this.dialogue == 2)
        {
            this.Story4.stop();  
            this.image.setAlpha(0);  
            this.image2.setAlpha(1);  
        }

        if(this.dialogue == 3)
        {
            this.image2.setAlpha(0);  
            this.image3.setAlpha(1);  
        }

        if(this.dialogue == 4)
        {
            this.image3.setAlpha(0);  
            this.image4.setAlpha(1);  
        }
    }
}

////////////
