
class lvl1 extends Phaser.Scene //
{ 
    constructor()
    {
        super("lvl1"); 
    }

    init(data)
    {
        //dispo partout
    }


    preload ()
    {
    }

    create ()
    {
        cursors = this.input.keyboard.createCursorKeys();

        //  Input Events Reset
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);

        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
        cursors.left.reset();
        cursors.space.reset();


        // chargement de la carte
        this.carteDuNiveau = this.add.tilemap("carte");

        // chargement du jeu de tuiles
        this.tileset = this.carteDuNiveau.addTilesetImage("Tile_Set","Phaser_tuilesdejeu");  
        
        // chargement du calque calque_background
        this.backgroundLayer = this.carteDuNiveau.createStaticLayer("Background",this.tileset,0,0);

        //Plateform Classic
        this.plateformes = this.carteDuNiveau.createStaticLayer("Platform_Classic",this.tileset,0,0);
        this.plateformes.setCollisionByExclusion(-1, true);

        //platform background
        this.plateformes_background = this.carteDuNiveau.createStaticLayer("Platform_Background",this.tileset,0,0);


        //---player
        player = this.physics.add.sprite(playerX, playerY, 'dude').setOrigin(0,0).setOffset(30,25).setSize(60,90,false);

        player.setCollideWorldBounds(true);
        
        
        //---Camera
        this.cameras.main.setSize(1920,1080);
        this.cameras.main.setBounds(1,1,3840,2160);
        this.cameras.main.startFollow(player,true,1,1);

        ///////// UI

        UILightBlue = this.add.image(700, 1025, 'UIBlue').setScrollFactor(0,0).setScale(0.07);

        UILightYellow = this.add.image(1220, 1025, 'UIYellow').setScrollFactor(0,0).setScale(0.07); 


        for(let i=0; i < UIYangList.length; i++)
        {
            UIYangList[i] = this.add.sprite(880-(i*70), 1025, 'UIYang').setScrollFactor(0,0).setScale(0.15);
        }

        for(let i=0; i < UIYinList.length; i++)
        {
            UIYinList[i] = this.add.image(1030+(i*70), 1025, 'UIYin').setScrollFactor(0,0).setScale(0.15);
        }


        this.groupeEnemy = this.physics.add.group({
    
        });

        const groupeEnemyObjects = this.carteDuNiveau.getObjectLayer('didier').objects;

        for(const i of groupeEnemyObjects){
            enemyNumberToUnlock++;
            this.groupeEnemy.create(i.x,i.y, 'ennemi')
            .setOrigin(0.5,0.5)
            .setScale(0.7);
        };

        for (const i of this.groupeEnemy.children.entries) {

            this.physics.add.collider(i,player,PlayerEnemy);
            this.physics.add.collider(this.plateformes,i);
        }

        //Ennemi
        //enemy1 = new Ennemi(this,350,350).setScale(0.7);
        //enemy2 = new Ennemi(this,250,250).setScale(0.7);
        //enemyList = [enemy1,enemy2];

        //door
        door1 = new Porte(this,enemyNumberToUnlock,700,100);

    ///////////Collide///////////

        this.physics.add.collider(player, this.plateformes);

       /* for(let i=0; i < enemyList.length; i++)
        {
            this.physics.add.collider(enemyList[i],player,enemyList[i].PlayerEnemy);
            this.physics.add.collider(this.plateformes, enemyList[i]);
        }*/


        this.physics.add.collider(player, door1);
        this.physics.add.collider(this.plateformes, door1);
        
        
        //la boucle for fait plusieurs collide d'une meme class
        

        //  Input Events Reset
        cursors.left.reset();
        cursors.right.reset();
        cursors.up.reset();
        cursors.down.reset();
        cursors.left.reset();
        cursors.space.reset();
    }
    

//////////////
//////////////
//////////////
//////////////
//////////////      Update
//////////////
//////////////
//////////////
//////////////


    update ()
    {
        if (gameOver == true)
        {
            console.log("gameOver");
            playerHealth = 6;
            playerSeishin = 6;
            gameOver = false;
            //return;
        }

        //Controle Joueur
        keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);     

        UI();

        Controls(); 

        Shifting();

        Jump();

        Lightning();
        
        Crouch();

        


        //kunai on your place
    
        if(kunaiStand==true && kunai_throw_stand ==false)
        {
            
            kunai3 = this.physics.add.image(player.x+45, player.y+90, 'kunai').setGravityY(-500);
            this.physics.add.collider(kunai3,this.plateformes);
            //this.physics.add.collider(kunai3,door1);
            /*for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai3, enemyList[i]);
            }*/

            kunaiStandTimer = 0;
            kunai_throw_stand = true;
        }

        KunaiHere();

        /////////////////////////////Throw a Kunai

        if(kunaiLeft == true && kunai_throw_left==false)
        {
           
            kunai1 = this.physics.add.image(player.x, player.y+15, 'kunai').setVelocityX(-SpeedKunaiThrow).setGravityY(-500); 
            this.physics.add.collider(kunai1,this.plateformes);
            //this.physics.add.collider(kunai1,door1);

            /*for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai1, enemyList[i]);
            }*/

            kunaiLeftTimer =0;
            kunai_throw_left = true;
        }

        if(kunaiRight == true && kunai_throw_right==false)
        {
            kunai2 = this.physics.add.image(player.x+60, player.y+15, 'kunai').setVelocityX(SpeedKunaiThrow).setGravityY(-500);
            this.physics.add.collider(kunai2,this.plateformes);
            //this.physics.add.collider(kunai2,door1);
            /*for(let i=0; i < enemyList.length; i++)
            {
                this.physics.add.collider(kunai2, enemyList[i]);
            }*/

            kunaiRightTimer=0;
            kunai_throw_right = true;
        }
        
        KunaiAndTP();

        Balance();



        //Actualisation de l'ouverture de la porte
        door1.DoorOpen();

        //patern enemy
        /*for(let i=0; i < enemyList.length; i++)
        {
            if(enemyList[i].active == true)
            {
                enemyList[i].Patern();
            }
        }*/
        
       /* if(enemyList[1].active == true)
        {
            enemyList[1].Patern();
        }
*/

        


        //Compteur actualisation ++
        Timer();
    }
}


////////////
