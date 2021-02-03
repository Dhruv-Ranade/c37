var canvas,backgroundImage;
var gameState=0;
var playerCount;

var distance=0;

var database,allPlayers;

var form,player,game;

function setup(){
  database = firebase.database();
  canvas=createCanvas(500,500);

  game=new Game();
  game.getState();
  game.start();

 }

function draw(){
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
  game.play ();
  }
}


