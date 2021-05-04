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
var up;
var down;

var space;
var cursors;

//////var joueur//////
var player;
var playerX = 30;
var playerY = 30;
var lastDirection ="left";


var game = new Phaser.Game(config);