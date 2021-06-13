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
    scene: [Menu,lvl1],
};


//var globale
var gameOver = false;

//Song
var musiclvl;
var songKunai;
var songStormTpKunai;
var songStormTpMark;
var songStormLightning; 


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

//Se baisser//
var playerCrouch;
var crouching;


//Mark
var mark;
var mark_throw = false;
var mark_active = false;
var mark_touched = false;
var markUnlock = true;

//Kunai//
var kunai;

var kunai_throw = false;
var kunai_active = false;
var kunai_touched = false;
var kunaiUnlock = true;
var KunaiHit = "up";
var HitBoxLeft;
var HitBoxRight;
var HitBoxDown;
var HitBoxUp;

var KunaiRotaStop=0;


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
var restartDoor3; 
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


//Jump//
var jumpSpeed = 700;
var jump_time_Max = 1;

//run//
var runSpeed =300;

//
var game = new Phaser.Game(config);