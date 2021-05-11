var config = {
    type: Phaser.AUTO,  
    width: 3840,
    height: 2160,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    input:{
        gamepad:true
    },
    scene: [Menu,lvl1],
    scale: {
        zoom: 2
    }
};


//var globale
var gameOver = false;

//control
var left;
var right;
var down;

var space;
var cursors;
var keyQ;
var keyD;
var keyZ;

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


//////var joueur//////
var player;
var playerX = 30;
var playerY = 30;
var lastDirection ="left";

//vie//
var playerHealth = 6;

//Seishin//
var playerSeishin = 6;

//Saut//
var jump = false;

//kunai on place
var kunai3;

var kunaiStand;

var kunai_throw_stand = false;

//Kunai//
var kunai1;
var kunai2;

var kunaiRight;
var kunaiLeft;

var kunai_throw_left = false;
var kunai_throw_right = false;

//Teleportation
var kunai1TP=false;
var kunai2TP=false;
var kunai3TP=false;

//Lightning Attaque
var lightning_attack;

//Door
var door1;
var enemyNumber=0;

//Ennemi
var enemy1;
var enemy2;

var enemyList;
var collideEnemyList;

//Timer
var jumpTime = 0;

var kunaiRightTimer = 0;
var kunaiLeftTimer = 0;
var kunaiStandTimer = 0;
var invincibleTimer=0;



//Equilibrage :
var DispawnKunaiThrowTimer = 250 ;
var OnplaceKunaiThrow = 80 ;
var SpeedKunaiThrow = 500 ;

var DispawnKunaiThrowSet = 500 ;


//Jump//
var jumpSpeed = 550;
var Jump_time = 35;

//run//
var runSpeed =180;



var game = new Phaser.Game(config);