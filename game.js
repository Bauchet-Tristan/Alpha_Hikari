var config = {
    type: Phaser.AUTO,  
    width: 1920,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1400 },
            debug: true
        }
    },
    input:{
        gamepad:true
    },
    fps: {
        target: 120,
        forceSetTimeOut: true
    },
    scene: [Menu,lvl1,lvl_tuto,lvl_boss,ResetBoss,Story1,lvl2,Story2,Story3,Story4],
};


//var globale
var gameOver = false;

//Song
var musiclvl;
var songKunai;
var songStormTpKunai;
var songStormTpMark;
var songStormLightning; 

var musicEffectConfig ={
    mute: false,
    volume: 0.8,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}

var musiclvlConfig ={
    mute: false,
    volume: 0.25,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0
}

this.storyConfigYindol ={
    mute: false,
    volume: 2,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}

this.storyConfig ={
    mute: false,
    volume: 22,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: false,
    delay: 0
}


//Cloud
var alea;

var cloud1;
var cloud2;
var cloud3;
var cloud4;

var movingCloud = 0;

//control
var pointer;
var kunai_Throwing;

var leftButton;
var rightButton;
var downButton;

var jumpButton;
var cursors;
var keyQ;
var keyD;
var keyZ;
var keyS;
var keyA;

//UI
var UILightBlue;
var UILightYellow;

var UIYinListVide =[UIYin1Vide,UIYin2Vide,UIYin3Vide,UIYin4Vide,UIYin5Vide,UIYin6Vide];
var UIYin1Vide;
var UIYin2Vide;
var UIYin3Vide;
var UIYin4Vide;
var UIYin5Vide;
var UIYin6Vide;

var UIYangListVide =[UIYang1Vide,UIYang2Vide,UIYang3Vide,UIYang4Vide,UIYang5Vide,UIYang6Vide];//Vie
var UIYang1Vide;
var UIYang2Vide;
var UIYang3Vide;
var UIYang4Vide;
var UIYang5Vide;
var UIYang6Vide;

//plein
var UIYinList =[UIYin1,UIYin2,UIYin3,UIYin4,UIYin5,UIYin6];//Energie
var UIYin1;
var UIYin2;
var UIYin3;
var UIYin4;
var UIYin5;
var UIYin6;

var UIYangList =[UIYang1,UIYang2,UIYang3,UIYang4,UIYang5,UIYang6];//Vie
var UIYang1;
var UIYang2;
var UIYang3;
var UIYang4;
var UIYang5;
var UIYang6;

//UX
var sparkle;
var sparkle2;

//////var joueur//////
var player;
var playerX = 50;
var playerY = 2200;
var lastDirection ="left";

//Deplacement//
var runLeft;
var runRight;
var idle;

//Vie//
var playerHealth = 6;

//Seishin//
var playerSeishin = 6;

//Saut//
var jump = false;
var jumpRelease =true;

//Se baisser//
var playerCrouch;
var crouching;


//Mark
var mark;
var mark_throw = false;
var mark_active = false;
var mark_touched = false;
var markUnlock = true;

var markOUT = false;

//Kunai//
var kunai;

var kunai_throw = false;
var kunai_active = false;
var kunai_touched = false;
var kunaiUnlock = true;
var KunaiHitV = "up";
var KunaiHitH = "right";
var HitBoxLeft;
var HitBoxRight;
var HitBoxDown;
var HitBoxUp;
var KunaiRotaStop=0;

var kunaiOUT = false;

//Teleportation
var kunaiTP=false;
var markTP=false;

//Lightning Attaque
var lightning_attack;

//keys
var keyNumber = 0;
var keyNumber2 = 0;
var keyNumber3 = 0;

//Door
var enemyNumberToUnlock=0;
var restartDoor3=0; 
var SwitchDoor3Open = 0;


//bonus1
var bonus1State = "unactive";


//bonus2
var bonus2State = "unactive";


//Timer
var jumpTime = 0;

var kunaiTimer = 0;
var kunaiTimerTouched = 0;
var markTimer = 0;

var invincibleTimer=0;

var bonus1Cooldown = 400;
var bonus2Cooldown = 400;

var SwitchTime = 180;



////////////// Equilibrage: //////////////

//kunai Mark
var kunaiTimerMax = 0;
var kunaiTimerTouchedMax = 0;
var markTimerMax = 0;
var kunaiSpeed = 950;

//Jump//
var jumpSpeed = 700;
var jump_time_Max = 1;

//run//
var runSpeed =300;

//Switch Door destroy //
var SwitchX = 535;
var SwitchY = 600;

var SwitchX2 = 0;
var SwitchY2 = 0;


//
var game = new Phaser.Game(config);