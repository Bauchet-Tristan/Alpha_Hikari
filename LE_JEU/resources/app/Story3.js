
class Story3 extends Phaser.Scene //
{ 
    constructor()
    {
        super("Story3"); 
    }

    preload ()
    {
        //
        this.load.audio("Story3_a","Song/Story/Story_3_a.mp3");
        this.load.audio("Story3_b","Song/Story/Story_3_b.mp3");

        this.load.audio("Story3_Yindol_a","Song/Story/Story3_Yindol_a.mp3");
        this.load.audio("Story3_Yindol_b","Song/Story/Story3_Yindol_b.mp3");

        //
        this.load.image("Story3Arazuma_a","assets/Story/72ppi/Story3Arazuma_a.png");
        this.load.image("Story3Arazuma_b","assets/Story/72ppi/Story3Arazuma_b.png");

        this.load.image("Story3Yindol_a","assets/Story/72ppi/Story3Yindol_a.png");
        this.load.image("Story3Yindol_b","assets/Story/72ppi/Story3Yindol_b.png");
        //
        this.load.image("lvlUp","assets/Story/72ppi/Story3_lvlUp.png");

    }

    create ()
    {


        cursors.space.reset();
        cursors = this.input.keyboard.createCursorKeys();

        //
        this.skip =true;
        this.dialogue =0;

        //Song
        this.Story3_1 = this.sound.add("Story3_Yindol_a");

        this.Story3_2 = this.sound.add("Story3_a");

        this.Story3_3 = this.sound.add("Story3_Yindol_b");

        this.Story3_4 = this.sound.add("Story3_b");

        /////////////

        this.image1 = this.add.image(1300, 625, 'Story3Yindol_a').setAlpha(0);

        this.image2 = this.add.image(600, 625, 'Story3Arazuma_a').setAlpha(0);

        this.image3 = this.add.image(1300, 625, 'Story3Yindol_b').setAlpha(0);

        this.image4 = this.add.image(600, 625, 'Story3Arazuma_b').setAlpha(0);

        this.image5 = this.add.image(950, 625, 'lvlUp').setAlpha(0);

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

        //console.log(this.dialogue);

        if(this.dialogue==0)
        {     
            this.Story3_1.play(storyConfigYindol);
        }

        if(this.dialogue==1)
        {
            this.Story3_2.play(storyConfig);
            this.image1.setAlpha(1);          
        }

        if(this.dialogue == 2)
        {  
            this.Story3_1.stop();
            this.Story3_3.play(storyConfigYindol);

            this.image1.setAlpha(0); 
            this.image2.setAlpha(1);
        }

        if(this.dialogue == 3)
        {  
            this.Story3_2.stop();
            this.Story3_4.play(storyConfig);
            this.image2.setAlpha(0); 
            this.image3.setAlpha(1);
        }

        if(this.dialogue == 4)
        {  
            this.Story3_3.stop();
            this.image3.setAlpha(0); 
            this.image4.setAlpha(1);
        }

        if(this.dialogue == 5)
        {  
            this.Story3_4.stop();
            this.image4.setAlpha(0); 
            this.image5.setAlpha(1); 
        }

        if(this.dialogue == 6)
        {  
            this.image5.setAlpha(0); 
            this.scene.start("lvl2"); 
        }
    }
}

////////////
