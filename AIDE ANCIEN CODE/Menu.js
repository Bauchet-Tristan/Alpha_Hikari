
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
        this.change=0;
        this.load.spritesheet('dude', 'assets/dude2.png', { frameWidth: 17, frameHeight: 21 });
        this.load.spritesheet('wolf', 'assets/wolf.png', { frameWidth: 211, frameHeight: 106 });
        
        this.load.image("GhostTexte",'assets/GhostTexte.png');
        this.load.image("Ghost",'assets/Ghost.png');
        this.load.image("MoneyUI",'assets/MoneyUI.png');
        this.load.image("Money",'assets/Money.png');
        this.load.image("LifeFull",'assets/LifeFull.png');
        this.load.image("LifeMid",'assets/LifeMid.png');
        this.load.image("LifeLow",'assets/LifeLow.png');
        this.load.image("LifeOut",'assets/LifeOut.png');
        this.load.image("knife","assets/Knife.png");
        this.load.image("knifeUI","assets/KnifeInventory.png");
        this.load.image("key","assets/Key.png");
        this.load.image("keyUI","assets/KeyInventory.png");
        this.load.image("door","assets/Door.png");
    }

    create()
    {
        
        this.add.text(20,20, "Menu");  

        ///////////les anims
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 12, end: 15 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dude', { start: 16, end: 17 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 8, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'down',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'up',
            frames: this.anims.generateFrameNumbers('dude', { start: 4, end: 7 }),
            frameRate: 10,
            repeat: -1
        });

        //////animation Wolf//////
        this.anims.create({
            key: 'WolfLeft',
            frames: this.anims.generateFrameNumbers('wolf', { start: 0, end: 11 }),
            frameRate: 10,
            repeat: -1
        });
    
        this.anims.create({
            key: 'WolfRight',
            frames: this.anims.generateFrameNumbers('wolf', { start: 12, end: 23 }),
            frameRate: 10,
            repeat: -1
        });
    }

    update()
    {
        this.scene.start("lvl1");
    }

}


function PlayerGhost()
{
    ghostTalk = true;
    affichageTexte = 0;
}

function PlayerMoney()
{
    moneyDrop.disableBody(true,true);
    money++;
    moneyTexte.setText(money);
}
   
function PlayerVie()
{
    vieDrop.disableBody(true, true);
    vie++;
}

function Tplvl()
{
    tp=true;
} 


function KnifePlayer()
{
    knifeUnlock = true;
    knife.disableBody(true,true);
    knifeUI.setAlpha(1);
}

function KnivesThrow()
{
    knives.setScale(1.8);
    if(lastDirection =="left" && knivesOut==false)
    {
        knives.rotation +=3.15;

        knives.body.setSize(29,15);
        knives.body.setOffset(6,7);

        knives.setVelocityX(-400);    
    }
    else if(lastDirection =="right"&& knivesOut==false)
    {
        knives.setVelocityX(400); 
        knives.body.setSize(29,15);
        knives.body.setOffset(6,7);
    }
    else if(lastDirection =="up"&& knivesOut==false)
    {
        knives.rotation +=-1.55;
        knives.body.setSize(15,22);
        knives.body.setOffset(12,4);
        knives.setVelocityY(-400); 
    }
    else if(lastDirection =="down"&& knivesOut==false)
    {
        knives.rotation += 1.55;
        knives.body.setSize(17,22);
        knives.body.setOffset(12,4);
        knives.setVelocityY(400); 
    }

    knivesOut = true;
}

function KeyAffichage()
{
    if(keyNumber>=1)
    {
        keyUI.setAlpha(1);
    }
    else{
        keyUI.setAlpha(0);
    }
}

function PlayerDoor()
{
    if(keyNumber>=1)
    {
        door1=true;
        keyNumber=0;
    }    
}

function PlayerDoor2()
{
    if(keyNumber>=1)
    {
        door2=true;
        keyNumber=0;
    }    
}


function PlayerKey()
{
    key.disableBody(true,true);
    keyNumber++;
}

function KnivesDisable()
{
    knives.disableBody(true,true);
    knivesOut = false;
}

function KnivesWolf()
{
    KnivesDisable();
    wolf1=false;
    wolf.disableBody(true,true);
    wolfDead =true;
}


function Wolf()
{
    ///////////////////////////////////////////////////////  Ennemie  ////////////////////////////////////////////////////////////

    // Ennemi patern
    
    timeMove = timeMove+1;
    wolf.setVelocityY(0);
    if(timeMove <= 150)
    {
        wolf.anims.play('WolfLeft',true);
        wolf.setVelocityX(-400);
    }
    else if(timeMove > 150 && timeMove <=300 )
    {
        wolf.anims.play('WolfRight',true);
        wolf.setVelocityX(400);
    }
    else
    {
        timeMove =  0;
    }
}

function PlayerWolf()
{   
    LoseLife();
}

function LoseLife()
{   
    if(invulnerable >= 200)
    {
        invulnerable = 0;
    }
    if(invulnerable==0)
    {
        vie = vie-1;
    }      
}

function Life()
{   
    if(vie<=0)
    {
        lifeOutUI.setAlpha(1);
        gameOver=true;
    }
    else
    {
        lifeOutUI.setAlpha(0);
    }

    if(vie==1)
    {
        lifeLowUI.setAlpha(1);
    }
    else
    {
        lifeLowUI.setAlpha(0);
    }

    if(vie==2)
    {
        lifeMidUI.setAlpha(1);
    }
    else{
        lifeMidUI.setAlpha(0);
    }


    if(vie>=3)
    {
        lifeFullUI.setAlpha(1);
    }
    else
    {
        lifeFullUI.setAlpha(0);
    }
}

////////////

