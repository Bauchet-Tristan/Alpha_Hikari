var config = {
    type: Phaser.AUTO,
    width: 960,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    input:{
        gamepad:true
    },
    scene: [Menu,lvl1,lvl2],
    scale: {
        zoom: 2
    }
};

//this.player=0; //sa c'est pour les variable locale dans les scene

//this.droitText = this.add.text(20,20,(''), { fontSize: '22px', fill: '#FFF' }).setScrollFactor(0);
//this.droitText.setText('Droit = ' + this.droit);

//plateformes.setCollisionByProperty({ estSolide: true });



//temporaire 
var xAxis;
var yAxis;

var paddle;
var paddleConnected=false;


//var globale
var gameOver = false;
var tp=false;

var left;
var right;
var up;
var down;
var space;
var cursors;

//////var joueur//////
var player;
var lastDirection ="left";
var playerY=100;
var playerX=70;
var winText;

//vie
var vie = 1;
var invulnerable=200;
var vieDrop;
//Ui
var lifeFullUI;
var lifeMidUI;
var lifeLowUI;
var lifeOutUI;

//Money
var moneyUI;
var moneyDrop;
var money = 0;
var moneyTexte;
var money1 =true;

//Armes
var knifeUI;
var knife;
var knifeUnlock = false;
var knives;
var timerknives = 200;
var knivesOut = false;

//Key-door
var keyUI
var key;
var key1=true;
var door;
var door1=false;
var door2=false;
var keyNumber=0;

//enemie
var wolf;
var timeMove=0;
var wolfDead1=false;
var wolfDead2=false;
var wolf1=true;

//Ghost
var ghost;
var ghostTexte;
var ghostTalk=false;
var affichageTexte=1;


var game = new Phaser.Game(config);