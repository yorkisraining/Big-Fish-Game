var can1,
	can2,
	cxt1,
	cxt2;
	
var lastTime,
	deltaTime;

var bgPic = new Image;

var canWidth,
	canHeight;

var ane;
var fruit;
var mom;
var baby;

var mx,
	my;
	
var babyTail = [],
	babyEye = [],
	babyBody = [];
	
var bigTail = [],
	bigEye = [],
	bigBodyOrange = [],
	bigBodyBlue = [];

var data;

var wave;

var halo;

var dust;
var dustPic = [];

var btn;

window.onload = function() {
	game();
}

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
	
	bgPic.src = './img/background.jpg';
	
}

function init() {
	can1 = document.getElementById('canvas1');//fishes,dust,ui,circle;
	cxt1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');//background,food,ane;
	cxt2 = can2.getContext('2d');
	canWidth = can1.width;
	canHeight = can1.height;
	
	can1.addEventListener('mousemove', onMouseMove, false);
	btn = document.getElementById("btn");
	btn.style.left = canWidth/2 - 50 + 'px';
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mom = new momObj();
	mom.init();
	
	baby = new babyObj();
	baby.init();
	
	mx = canWidth * 0.5;
	my = canHeight * 0.5;
	
	//baby
	for (var i=0; i<8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = './img/babyTail' + i + '.png';
	}
	for ( var i=0; i<2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = './img/babyEye' + i + '.png';
	}
	for ( var i=0; i<20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = './img/babyFade' + i + '.png';
	}
	
	//mom
	for (var i=0; i<8; i++) {
		bigTail[i] = new Image();
		bigTail[i].src = './img/bigTail' + i + '.png';
	}
	for ( var i=0; i<2; i++) {
		bigEye[i] = new Image();
		bigEye[i].src = './img/bigEye' + i + '.png';
	}
	for ( var i=0; i<8; i++) {
		bigBodyOrange[i] = new Image();
		bigBodyBlue[i] = new Image();
		bigBodyOrange[i].src = './img/bigSwim' + i + '.png';
		bigBodyBlue[i].src = './img/bigSwimBlue' + i + '.png';
	}

	data = new dataObj();
	
	cxt1.font = '26px 微软雅黑';
	cxt1.textAlign = 'center';
	cxt1.shadowBlur = 20;
	cxt1.shadowColor = 'white';
	
	wave = new waveObj();
	wave.init();
	halo = new haloObj();
	halo.init();
	
	dust = new dustObj();
	for (var i=0; i<7; i++) {
		dustPic[i] = new Image();
		dustPic[i].src = './img/dust' + i + '.png';
	}
	dust.init();
}

function gameloop() {
	window.requestAnimationFrame(gameloop);
	var now = Date.now()
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) {
		deltaTime = 40;
	}
	background();
	ane.draw();
	fruit.draw();
	fruitMoniter()
	cxt1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitCollision();
	momBabyCollision();
	baby.draw();
	data.draw();
	wave.draw();
	halo.draw();
	dust.draw();
}

function onMouseMove(e) {
	if (!data.gameOver) {
		if (e.offsetX || e.layerX) {
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
		}
	}
}