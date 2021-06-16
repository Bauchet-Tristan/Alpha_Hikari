class Kunai extends Phaser.GameObjects.Sprite 
{
	constructor(scene, x, y) 
    {
        super(scene, x, y, "Projectile");

        scene.add.existing(this);
        scene.physics.world.enableBody(this);

		//this.body.immovable = true;
		this.body.allowGravity = false;

        // this.body.setOffset(5,10).setSize(50,85,false);
        this.setOrigin(0.5,0.5);
        this.body.setSize(35,35);


        //////// Hit box Propretie ////////
        HitBoxLeft = scene.physics.add.image(this.body.x,this.body.y,"HitBoxTP");
        HitBoxLeft.body.allowGravity = false;
        HitBoxLeft.setSize(30,30);

        HitBoxRight = scene.physics.add.image(this.body.x,this.body.y,"HitBoxTP");
        HitBoxRight.body.allowGravity = false;
        HitBoxRight.setSize(30,30);

        HitBoxUp = scene.physics.add.image(this.body.x,this.body.y,"HitBoxTP");
        HitBoxUp.body.allowGravity = false;
        HitBoxUp.setSize(30,30);

        HitBoxDown = scene.physics.add.image(this.body.x,this.body.y,"HitBoxTP");
        HitBoxDown.body.allowGravity = false;
        HitBoxDown.setSize(30,30);

        HitBoxLeft.alpha = 0;
        HitBoxUp.alpha = 0;
        HitBoxDown.alpha = 0;
        HitBoxRight.alpha = 0;
                
    }

    HitBoxCollideleft()
    {   
        KunaiHit ="left";
    }

    HitBoxCollideright()
    {   
        KunaiHit ="right";
    }

    HitBoxCollidedown()
    {   
        KunaiHit ="down";
    }

    HitBoxCollideup()
    {   
        KunaiHit ="up";
    }

    HitBoxCollide(scene,kunai)
    {
        //////////////////
        for(let i = 0; i< scene.plateformList.length; i++)
        {
            scene.physics.add.collider(HitBoxLeft, scene.plateformList[i],kunai.HitBoxCollideleft);
        }

        for(let i = 0; i< scene.doorList.length; i++)
        {
            scene.physics.add.collider(HitBoxLeft, scene.doorList[i],kunai.HitBoxCollideleft);
        }
        for(let i = 0; i< scene.door2List.length; i++)
        {
            scene.physics.add.collider(HitBoxLeft, scene.door2List[i],kunai.HitBoxCollideleft);
        }
        for(let i = 0; i< scene.door3List.length; i++)
        {
            scene.physics.add.collider(HitBoxLeft, scene.door3List[i],kunai.HitBoxCollideleft);
        }
        //////////////////
        for(let i = 0; i< scene.plateformList.length; i++)
        {
            scene.physics.add.collider(HitBoxRight, scene.plateformList[i],kunai.HitBoxCollideright);
        }
        for(let i = 0; i< scene.doorList.length; i++)
        {
            scene.physics.add.collider(HitBoxRight, scene.doorList[i],kunai.HitBoxCollideright);
        }
        for(let i = 0; i< scene.door2List.length; i++)
        {
            scene.physics.add.collider(HitBoxRight, scene.door2List[i],kunai.HitBoxCollideright);
        }
        for(let i = 0; i< scene.door3List.length; i++)
        {
            scene.physics.add.collider(HitBoxRight, scene.door3List[i],kunai.HitBoxCollideright);
        }
        //////////////////
        for(let i = 0; i< scene.plateformList.length; i++)
        {
            scene.physics.add.collider(HitBoxUp, scene.plateformList[i],kunai.HitBoxCollideup);
        }
        for(let i = 0; i< scene.doorList.length; i++)
        {
            scene.physics.add.collider(HitBoxUp, scene.doorList[i],kunai.HitBoxCollideup);
        }
        for(let i = 0; i< scene.door2List.length; i++)
        {
            scene.physics.add.collider(HitBoxUp, scene.door2List[i],kunai.HitBoxCollideup);
        }
        for(let i = 0; i< scene.door3List.length; i++)
        {
            scene.physics.add.collider(HitBoxUp, scene.door3List[i],kunai.HitBoxCollideup);
        }
        //////////////////
        for(let i = 0; i< scene.plateformList.length; i++)
        {
            scene.physics.add.collider(HitBoxDown, scene.plateformList[i],kunai.HitBoxCollidedown);
        }
        for(let i = 0; i< scene.doorList.length; i++)
        {
            scene.physics.add.collider(HitBoxDown, scene.doorList[i],kunai.HitBoxCollidedown);
        }
        for(let i = 0; i< scene.door2List.length; i++)
        {
            scene.physics.add.collider(HitBoxDown, scene.door2List[i],kunai.HitBoxCollidedown);
        }
        for(let i = 0; i< scene.door3List.length; i++)
        {
            scene.physics.add.collider(HitBoxDown, scene.door3List[i],kunai.HitBoxCollidedown);
        }
    }



    HitBoxFollow()
    {
        HitBoxRight.x = this.body.x+50;
        HitBoxRight.y = this.body.y+18;

        HitBoxLeft.x = this.body.x-15;
        HitBoxLeft.y = this.body.y+18;

        HitBoxDown.x = this.body.x+18;
        HitBoxDown.y = this.body.y+50;

        HitBoxUp.x = this.body.x+18;
        HitBoxUp.y = this.body.y-15;
    }


	Shoot(scene) 
    {
        if (this.body) 
        {
            pointer.x += scene.cameras.main.scrollX
            pointer.y += scene.cameras.main.scrollY

            this.dY = ((pointer.y+30) - player.y);
            this.dX = (pointer.x - player.x);

            this.dSpeed = (950 / (Math.abs(this.dY) + Math.abs(this.dX)));

            this.body.setVelocityY(this.dY * this.dSpeed);
            this.body.setVelocityX(this.dX * this.dSpeed);
        }
	}


    FadeOut() 
    {
        this.alpha = this.alpha -0.01 ;        
        
        if(this.alpha == 0)
        {
            this.Destroy();
            sparkle.destroy();
        }
    }


    Destroy() 
    {
        HitBoxLeft.destroy();
        HitBoxRight.destroy();
        HitBoxDown.destroy();
        HitBoxUp.destroy();
        
        this.destroy();
        kunai_throw = false;
        kunai_active = false;
        kunai_touched = false;
        kunaiTP = false;
    }


    KunaiPlatforme(kunai)
    {

        /*if(kunai.body.blocked.right == true);
        {
            KunaiHit = "right";
            console.log(KunaiHit);
        }
        if(kunai.body.blocked.left);
        {
            KunaiHit = "left";
            console.log(KunaiHit);
        }
        
        if(kunai.body.blocked.up);
        {
            KunaiHit = "up";
            console.log(KunaiHit);
        }
        
        
        if(kunai.body.blocked.down);
        {
            KunaiHit = "down";
            console.log(KunaiHit);
        }*/


        kunai.setRotation(KunaiRotaStop);
        kunai.body.setVelocity(0,0);
        kunai_touched = true; /////////////////////////////////////////////////  LLLLLLLAAAAAAA
        kunai.alpha = 1;
    }


    Anim()
    {
        this.setRotation(SwitchTime);
    }

}