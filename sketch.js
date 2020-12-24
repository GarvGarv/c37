/* Database in firebase looks like this
{
  gameState: 0
  playerCount: 0
  player1: {
    name: "",
  player2: {
    name: "",
  player3: {
    name: "",
  player4: {
    name: "",
  ...
  }
*/
var canvas;
var database;

var gameState = 0; //Wait state
var playerCount;

var player, form, game;
var distance = 0;
var allPlayers;

function setup(){
  var canvas = createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw(){
  if(playerCount ===4){
    game.update(1);
  }
  if(gameState ===1){
    clear();
    game.play();
  }
}