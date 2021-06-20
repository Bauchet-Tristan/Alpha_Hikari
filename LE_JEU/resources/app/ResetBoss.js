
class ResetBoss extends Phaser.Scene //
{ 
    constructor()
    {
        super("ResetBoss"); //nom = menu 
    }

    preload()
    {
        
    }

    create()
    {   
       
    }

    update()
    {

       this.scene.start("lvl_boss"); 

    }
}
