var fruitObj = function() {
	this.alive = [];
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.fruitType = [];
	this.spd = [];
	this.aneNO = [];
}

fruitObj.prototype.num = 15;

fruitObj.prototype.init = function() {
	for ( var i=0; i<this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i]= 0;
		this.l[i] = 0;
		this.fruitType[i] = "";
		this.spd[i] = Math.random() * 0.01 + 0.005;
		this.aneNO[i] = 0;
	}
	this.orange.src = './img/fruit.png';
	this.blue.src = './img/blue.png';
}

fruitObj.prototype.draw = function() {
	
	for ( var i=0; i<this.num; i++) {
		//draw;
//find an ane; grow; fly up;
		if (this.fruitType[i] == 'blue') {
			var pic = this.blue;
		} else {
			var pic = this.orange;
		}
		if (this.alive) {
			if (this.l[i] <= 14) {
				var NO = this.aneNO[i];
				this.x[i] = ane.headx[NO]; 
				this.y[i] = ane.heady[NO];
				this.l[i] += this.spd[i] * deltaTime;
			} else {
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			cxt2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if (this.y[i] < 10) {
				this.alive[i] = false;
			}
		}
	}
}

fruitObj.prototype.born = function(i) {
	this.aneNO[i] = Math.floor(Math.random()*ane.num);
	this.l[i] = 0;
	if ( Math.random() < 0.2) {
		this.fruitType[i] = 'blue';
	} else {
		this.fruitType[i] = 'orange';
	}
	this.alive[i] = true;
}

fruitObj.prototype.dead = function(i) {
	this.alive[i] = false;
}

function fruitMoniter() {
	var num = 0;
	for ( var i=0; i<fruit.num; i++) {
		
		if (fruit.alive[i]) {
			num++
		} else if(num<15) {
			//send a fruit;
			sendFruit();
			return;
		}
	}
}

function sendFruit() {
	for ( var i=0; i<fruit.num; i++) {
		if (!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
