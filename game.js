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
    scene: [Menu,lvl1],
    scale: {
        zoom: 2
    }
};


//var globale
var gameOver = false;

var left;
var right;
var up;
var down;

var space;
var cursors;

//////var joueur//////
var player;
var lastDirection ="left";


var game = new Phaser.Game(config);