//creation de l'ennemi
var imgEnnemy = new Image();   // Crée un nouvel élément Image
imgEnnemy.src = 'img/alien.gif'; // Définit le chemin vers sa source
function enemy(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.speed = 50;
	this.show = function(){
		ctx.drawImage(imgEnnemy,this.x,this.y,this.w,this.h);
	}
	this.move = function(speed){
		this.clear();
		this.y += speed;
		this.show();	
	}
	this.clear = function(){
		ctx.clearRect(this.x,this.y,this.w,this.h);
	}
}
//creation des bullet
function bullet(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.show = function(){
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x,this.y,this.w,this.h);
	}

	this.move = function(){
		this.clear();
		this.y -= 5;
		this.show();
	}
	this.clear = function(){
		ctx.clearRect(this.x,this.y,this.w,this.h);
	}

	this.hits = function(bullet, enemy){
		if(bullet.y < enemy.y + enemy.h +10 && bullet.x < enemy.x + enemy.w && bullet.x > enemy.x - 3){
			return(true);
		}
	}

}
//creation du vaisseau
var imgPlayer = new Image();   // Crée un nouvel élément Image
imgPlayer.src = 'img/ship.png'; // Définit le chemin vers sa source
function player(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.show = function(){
		ctx.drawImage(imgPlayer,this.x,this.y,this.w,this.h);
		if(this.x <= 0) this.x = 0;
		if(this.x >= canvas.width - this.w) this.x = canvas.width - this.w;
	}

	this.move = function(dir){
		this.clear();
		this.x += dir;
		this.show();
	}

	this.clear = function(){
		ctx.clearRect(this.x,this.y,this.w,this.h);

	}
}
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
function game(){
document.getElementById("play").style.visibility= "hidden";
var playerOne = new player(canvas.width/2,canvas.height-20,20,20);
var bullets = [];
var enemies = [];
var enemySpeed = 1;
var score = 0;
var level = 1;
//reconstruction de l'ennemi & position
function drawEnemies(yPos){
for(var i = 0; i < 4; i++){
    var enemyOne = new enemy(i*200,20+yPos,30,30);
	enemies.push(enemyOne);
	enemies[i].show();
}
}

//mise en route du jeu
function update(){
	playerOne.show();
	document.getElementById("scoreText").innerHTML = "Votre Score : " +score;
	//tir et vérification ennemi
	for(var i = 0; i < bullets.length; i++){
		bullets[i].move();
		for(var j = 0; j < enemies.length; j++){
			if(bullets[i].hits(bullets[i],enemies[j])){
			enemies[j].clear();
			bullets[i].clear();
			enemies.splice(j,1);
			score += 100;
			level++;	
		}
	}
	if(bullets[i].y <= 0 ){ 
		bullets[i].clear();
		bullets.splice(i,1);
	}
	}
	if(enemies.length <= 0){
		drawEnemies(20);
		enemySpeed += 1;
	}
	
	window.requestAnimationFrame(update);
}

var enemyMove = setInterval(function(){
	for(var i = 0; i < enemies.length; i++){
	 	enemies[i].move(enemySpeed);
	 	if(enemies[i].y > 400){
	 		lost();
	 		clearInterval(enemyMove);
	 	}
	}
},100);

function lost(){
	setInterval(function(){
	 ctx.fillStyle = "black";
	 ctx.font = "80px Arial";
	 ctx.fillText("GAME OVER",10,200);
	 ctx.font = "24px Arial";
	 ctx.fillText("Votre score: " + score,10,250);
	 ctx.font = "24px Arial";
	 ctx.fillText("Vous avez tué: " + level + " ennemis",10,300);
	},50);
}

//écouteur de touche
window.addEventListener("keydown",function(event){
	if(event.keyCode == 37) {
		playerOne.move(-10);
	}
	if(event.keyCode == 39) {
		playerOne.move(10);
	}
	if(event.keyCode == 32){
		var bulletOne = new bullet(playerOne.x + 7, playerOne.y, 5, 5);
		bullets.push(bulletOne);
	}
});

update();

}