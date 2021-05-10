var config = {
    type: Phaser.AUTO,  
    width: 3840,
    height: 2160,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: true
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

//UI
var UILightBlue;
var UILightYellow;

var UIYin;
var UIYang;


//////var joueur//////
var player;
var playerX = 30;
var playerY = 30;
var lastDirection ="left";

//vie//
var playerHealth = 6;

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
var OnplaceKunaiThrow = 70 ;
var SpeedKunaiThrow = 450 ;


var DispawnKunaiThrowSet = 500 ;

var game = new Phaser.Game(config);