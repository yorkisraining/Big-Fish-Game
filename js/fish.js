//mother fish
var momObj = function () {
	this.x;
	this.y;
	this.angle;
	
	this.bigBody = new Image();
	
	this.bigEyeTimer = 0;
	this.bigEyeCount = 0;
	this.bigEyeInterval = 1000;
	
	this.bigTailTimer = 0;
	this.bigTailCount = 0;
	
	this.bigBodyCount = 0;
}

momObj.prototype.init = function() {
	this.x = canWidth *0.5;
	this.y = canHeight *0.5;
	this.angle = 0;
	this.bigBody.src = './img/bigSwim0.png';
}

momObj.prototype.draw = function() {
	//lerp x y 使得趋向目标值
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);
	
	//lerp angle Math.atan2(y,x);目标值和初始值的坐标差
	var deltaY = this.y - my;
	var deltaX = this.x - mx;
	var beta = Math.atan2(deltaY, deltaX);
	this.angle = lerpAngle(beta, this.angle, 0.6); //api返回 -PI~PI
	
	//尾巴计时器
	this.bigTailTimer += deltaTime;
	if (this.bigTailTimer > 50) {
		this.bigTailCount = (this.bigTailCount + 1) %8;
		this.bigTailTimer %= 50;
	}
	//眼睛计时器
	this.bigEyeTimer += deltaTime;
	if (this.bigEyeTimer > this.bigEyeInterval){
		this.bigEyeCount = (this.bigEyeCount + 1) %2;
		this.bigEyeTimer %= this.bigEyeInterval;
		
		if (this.bigEyeCount == 0) {
			this.bigEyeInterval = Math.random() * 1500 + 2000;
		} else {
			this.bigEyeInterval = 100;
		}
	}
	
	
	
	cxt1.save();
	cxt1.translate(this.x, this.y);
	cxt1.rotate(this.angle);
	var bigEyeCount = this.bigEyeCount;
	var bigTailCount = this.bigTailCount;
	var bigBodyCount = this.bigBodyCount;
	if (data.dubble == 1) {
		cxt1.drawImage(bigBodyOrange[bigBodyCount], -bigBodyOrange[bigBodyCount].width*0.5, -bigBodyOrange[bigBodyCount].height*0.5);
	} else {
		cxt1.drawImage(bigBodyBlue[bigBodyCount], -bigBodyBlue[bigBodyCount].width*0.5, -bigBodyBlue[bigBodyCount].height*0.5);
	}
	cxt1.drawImage(bigEye[bigEyeCount], -bigEye[bigEyeCount].width*0.5, -bigEye[bigEyeCount].height*0.5);
	cxt1.drawImage(bigTail[bigTailCount], -bigTail[bigTailCount].width*0.5 + 30, -bigTail[bigTailCount].height*0.5);
	cxt1.restore();
}


//baby fish
var babyObj = function() {
	this.x;
	this.y;
	this.angle;
	
	this.babyBody = new Image();
	
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

babyObj.prototype.init = function() {
	this.x = canWidth *0.5 + 80;
	this.y = canHeight *0.5 + 20;
	this.angle = 0;
}

babyObj.prototype.draw = function() {
	// lerp 大鱼x y
	this.x = lerpDistance(mom.x, this.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);
	//lerp 大鱼角度
	var deltaY = this.y - mom.y;
	var deltaX = this.x - mom.x;
	var beta = Math.atan2(deltaY, deltaX);
	this.angle = lerpAngle(beta, this.angle, 0.6); //api返回 -PI~PI
	
	//尾巴图片计时器
	this.babyTailTimer += deltaTime;
	if (this.babyTailTimer > 50) {
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;
	}
	//眼睛计时器
	this.babyEyeTimer += deltaTime;
	if (this.babyEyeTimer > this.babyEyeInterval) {
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;
		this.babyEyeTimer %= this.babyEyeInterval;
		
		if (this.babyEyeCount == 0) {
			this.babyEyeInterval = Math.random() * 1500 + 2000;
		} else {
			this.babyEyeInterval = 200;
		}
	}
	//身体计时器
	this.babyBodyTimer += deltaTime;
	if (this.babyBodyTimer > 300) {
		this.babyBodyCount ++;
		this.babyBodyTimer %= 300;
		if (this.babyBodyCount > 19) {
			this.babyBodyCount = 19;
			//Gameover
			data.gameOver = true;
		}
	}
	
	cxt1.save()
	cxt1.translate(this.x, this.y);
	cxt1.rotate(this.angle);
	var babyTailCount = this.babyTailCount;
	var babyEyeCount = this.babyEyeCount;
	var babyBodyCount = this.babyBodyCount
	cxt1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width*0.5, -babyBody[babyBodyCount].height*0.5);
	cxt1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width*0.5, -babyEye[babyEyeCount].height*0.5);
	cxt1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width*0.5 + 25, -babyTail[babyTailCount].height*0.5);
	cxt1.restore();
}

