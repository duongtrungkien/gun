var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var human1X = 0;
var human1Y = 190;
var human2X = 580;
var human2Y = 190;
var box1 =[];
var box2 =[];
var direction1 = 'right';
var direction2 = 'left';
var helth1 = 10;
var helth2 = 10;


var human1 = {
	x		: human1X,
	y		: human1Y,
	draw	: function () {
		ctx.fillStyle = "blue";
		ctx.fillRect(this.x, this.y ,20 ,20);
		this.y = this.y + 2;

		if (this.y < 0){
			this.y = 0;
		}
		else if (this.y + 20 > canvas.height){
			this.y = canvas.height - 20;
		}
		else if (this.x < 0){
			this.x = 0;
		}
		else if (this.x + 20 > canvas.width){
			this.x = canvas.width - 20;
		}
	}
}
var Bullet1right = function(x, y){
	this.x = x ;
	this.y = y ;

	this.draw = function (){
		this.x = this.x + 3;

		if (this.x < 0){
			var index = box1.indexOf(this);
			box1.splice(index , 1);
		}
		else if (this.x > canvas.width){
			var index = box1.indexOf(this);
			box1.splice(index , 1);
		}
		ctx.fillStyle = "black";
		ctx.fillRect(this.x , this.y , 10 , 10);
	}
}
var Bullet1left = function(x, y){
	this.x = x ;
	this.y = y ;

	this.draw = function (){
		this.x = this.x - 3;

		if (this.x < 0){
			var index = box1.indexOf(this);
			box1.splice(index , 1);
		}
		else if (this.x > canvas.width){
			var index = box1.indexOf(this);
			box1.splice(index , 1);
		}
		ctx.fillStyle = "black";
		ctx.fillRect(this.x , this.y , 10 , 10);
	}
}

var human2 = {
	x 		:human2X,
	y 		:human2Y,
	draw	: function () {
		ctx.fillStyle = "red";
		ctx.fillRect(this.x, this.y, 20, 20);
		this.y = this.y + 2;

		if (this.y < 0){
			this.y = 0;
		}
		else if (this.y + 20 > canvas.height){
			this.y = canvas.height - 20;
		}
		else if (this.x < 0){
			this.y = 0;
		}
		else if (this.x + 20 > canvas.length){
			this.x = canvas.height - 20;
		}
	}
} 

var Bullet2right = function(x, y){
	this.x = x ;
	this.y = y ;

	this.draw = function (){

		this.x = this.x + 3;

		if (this.x < 0){
			var index = box2.indexOf(this);
			box2.splice(index , 1);
		}
		else if (this.x > canvas.width){
			var index = box2.indexOf(this);
			box2.splice(index , 1);
		}
		ctx.fillStyle = "brown";
		ctx.fillRect(this.x , this.y , 10 , 10);
	}
}
var Bullet2left = function(x, y){
	this.x = x ;
	this.y = y ;

	this.draw = function (){

		this.x = this.x - 3;

		if (this.x < 0){
			var index = box2.indexOf(this);
			box2.splice(index , 1);
		}
		else if (this.x > canvas.width){
			var index = box2.indexOf(this);
			box2.splice(index , 1);
		}
		ctx.fillStyle = "brown";
		ctx.fillRect(this.x , this.y , 10 , 10);
	}
}
function drawBullet1 () {
	for (var i = 0; i < box1.length ; i++) {
		var shoot = box1 [i];
		shoot.draw();
	};
}
function drawBullet2 (){
	for (var i = 0; i < box2.length ; i++) {
		var shoot = box2 [i];
		shoot.draw();
	};
}
function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBullet1();
	drawBullet2();
	human1.draw();
	human2.draw();
	drawHelth2();
	drawHelth1();
	checkCollision();
	end();
	setTimeout(function () {
		draw();
	}, 30);
}
checkCollision = function (){
	for (var i = 0 ; i < box1.length ; i++){
		var bullet1 = box1[i];
		if ((bullet1.x + 10 >= human2.x
			&&bullet1.x + 10 <= human2.x + 20
			&&bullet1.y >= human2.y
			&&bullet1.y <= human2.y + 20)
			||(bullet1.x >= human2.x
			&&bullet1.x <= human2.x + 20
			&&bullet1.y >= human2.y
			&&bullet1.y <= human2.y + 20)
			||(bullet1.x >= human2.x
			&&bullet1.x <= human2.x + 20
			&&bullet1.y + 10 >= human2.y 
			&&bullet1.y + 10 <= human2.y + 20)
			||(bullet1.x + 10 >= human2.x
			&&bullet1.x + 10 <= human2.x + 20
			&&bullet1.y + 10 >= human2.y
			&&bullet1.y + 10 <= human2.y + 20) 
			)
		{
			var index = box1.indexOf(bullet1);
			box1.splice(index,1);
			helth2--;
		}
	}
	for (var i = 0 ; i < box2.length ; i++){
		var bullet2 = box2[i];
		if ((bullet2.x + 10 >= human1.x
			&&bullet2.x + 10 <= human1.x + 20
			&&bullet2.y >= human1.y
			&&bullet2.y <= human1.y + 20)
			||(bullet2.x >= human1.x
			&&bullet2.x <= human1.x + 20
			&&bullet2.y >= human1.y
			&&bullet2.y <= human1.y + 20)
			||(bullet2.x >= human1.x
			&&bullet2.x <= human1.x + 20
			&&bullet2.y + 10 >= human1.y 
			&&bullet2.y + 10 <= human1.y + 20)
			||(bullet2.x + 10 >= human1.x
			&&bullet2.x + 10 <= human1.x + 20
			&&bullet2.y + 10 >= human1.y
			&&bullet2.y + 10 <= human1.y + 20) 
			)
		{
			var index = box2.indexOf(bullet2);
			box2.splice(index,1);
			helth1--;
		}
	}
	for (var j = 0 ; j < box1.length ; j++){

		var bullet1 = box1[j];

		for (var i = 0 ; i < box2.length ; i ++){

			var bullet2 = box2[i];

			if ((bullet1.x + 10 >= bullet2.x
			&&bullet1.x + 10 <= bullet2.x + 10
			&&bullet1.y >= bullet2.y
			&&bullet1.y <= bullet2.y + 10)
			||(bullet1.x >= bullet2.x
			&&bullet1.x <= bullet2.x + 10
			&&bullet1.y >= bullet2.y
			&&bullet1.y <= bullet2.y + 10)
			||(bullet1.x >= bullet2.x
			&&bullet1.x <= bullet2.x + 10
			&&bullet1.y + 10 >= bullet2.y 
			&&bullet1.y + 10 <= bullet2.y + 10)
			||(bullet1.x + 10 >= bullet2.x
			&&bullet1.x + 10 <= bullet2.x + 10
			&&bullet1.y + 10 >= bullet2.y
			&&bullet1.y + 10 <= bullet2.y + 10) 
			)
			{
				var index = box1.indexOf(bullet2);
				box2.splice(index,1);
				var index = box2.indexOf(bullet1);
				box1.splice(index,1);
			}
		} 
	}
}
function drawHelth2 () {
	ctx.font = "10px Arial";
	ctx.fillStyle = "red";
	ctx.textBaseline = "top";
	ctx.fillText("Player2:" + helth2, 570, 0)
}
function drawHelth1 () {
	ctx.font = "10px Arial";
	ctx.fillStyle = "blue";
	ctx.textBaseline = "top";
	ctx.fillText("Player1:" + helth1, 30, 0)
}
function end (){
	ctx.fillStyle = "red";
	ctx.textAlign = "center";
	ctx.font = "60px Arial";
	if (helth1 <= 0){
		ctx.fillText("Player2 Win",canvas.width / 2,canvas.height / 2);
		return;
	}
	else if (helth2 <= 0){
		ctx.fillText("Player1 Win",canvas.width / 2, canvas.height / 2);
		return;
	}
}
function control () {
	window.onkeyup = function(e){
		var key = e.keyCode;

		if (key == 38){
			human2.y = human2.y - 50;
		}
		else if (key == 39){
			human2.x = human2.x + 20;
			direction2 = 'right';
		}
		else if (key == 37){
			human2.x = human2.x - 20;
			direction2 = 'left';
		}
		if (key == 87){
			human1.y = human1.y - 50;
		}
		else if (key == 68){
			human1.x = human1.x + 20;
			direction1 = 'right';
		}
		else if (key == 65){
			human1.x= human1.x - 20;
			direction1 = 'left';
		}
		if (key == 97 && direction2 == 'right'){
			var bullet2right = new Bullet2right (human2.x + 5 , human2.y + 5);
			box2.push(bullet2right);
		}
		else if (key == 97 && direction2 == 'left'){
			var bullet2left = new Bullet2left (human2.x + 5 , human2.y + 5);
			box2.push(bullet2left);
		}
		else if (key == 32 && direction1 == 'right'){
			var bullet1right = new Bullet1right (human1.x + 5, human1.y + 5);
			box1.push(bullet1right);
		}
		else if (key == 32 && direction1 == 'left'){
			var bullet1left = new Bullet1left (human1.x + 5, human1.y + 5);
			box1.push(bullet1left);
		}
	}
}
function init () {
	draw();
	control();
}

init();