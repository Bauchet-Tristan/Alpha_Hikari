class Mark extends Phaser.GameObjects.Sprite 
{
	constructor(scene, x, y) 
    {
        super(scene, x, y, "Mark");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

		//this.body.immovable = true;
		this.body.allowGravity = false;
    }

    FadeOut() 
    {
        this.alpha = this.alpha -0.01 ;        
        
        if(this.alpha == 0)
        {
            this.Destroy();
            sparkle2.destroy();
        }
    }

    markPlatform()
    {
        markOUT = true;
    }

    Destroy() 
    {
        this.destroy();
        mark_throw = false;
        mark_active = false;
        mark_touched = false;
        markTP = false;
        markOUT = false;
    }

    Anim()
    {
        mark.setRotation(SwitchTime);
    }
}