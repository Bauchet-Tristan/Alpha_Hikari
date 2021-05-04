
class Menu extends Phaser.Scene //
{
    constructor()
    {
        super("Menu"); //nom = menu 
    }

    init(data)
    {
        //dispo partout
    }

    preload()
    {
        this.load.spritesheet('dude', 'assets/dude2.png', { frameWidth: 17, frameHeight: 21 });
    }

    create()
    {
        this.add.text(20,20, "Menu1");  

        ///////////les anims
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 17 }),
            frameRate: 5,
            repeat: -1
        });
        /////

    }

    update()
    {
        this.scene.start("lvl1");
    }

}

////////////

