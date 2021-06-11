class Kunai extends Phaser.GameObjects.Sprite 
{
	constructor(scene, x, y) 
    {
        super(scene, x, y, "ProjectilRight");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

		//this.body.immovable = true;
		this.body.allowGravity = false;

        this.originX =-0.8;
        this.originY =-0.8;
    }

	Shoot(scene) 
    {
        if (this.body) 
        {
            pointer.x += scene.cameras.main.scrollX
            pointer.y += scene.cameras.main.scrollY

            this.dY = (pointer.y - player.y);
            this.dX = (pointer.x - player.x);

            this.dSpeed = (1150 / (Math.abs(this.dY) + Math.abs(this.dX)));

            this.body.setVelocityY(this.dY * this.dSpeed);
            this.body.setVelocityX(this.dX * this.dSpeed);
        }

	}

    FadeOut() 
    {
        this.alpha = this.alpha -0.02 ;        
        
        if(this.alpha == 0)
        {
            this.Destroy();
        }
    }


    Destroy() 
    {
        this.destroy();
        kunai_throw = false;
        kunai_active = false;
        kunai_touched = false;
    }


    KunaiPlatforme(kunai)
    {
        kunai.body.setVelocity(0,0);
        kunai_touched = true; /////////////////////////////////////////////////  LLLLLLLAAAAAAA
    }

}