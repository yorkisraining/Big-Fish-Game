var dataObj = function() {
	this.fruitNum = 0;
	this.dubble = 1; //fruit is blue , dubble =2;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.draw = function() {
	var w = can1.width;
	var h = can1.height;
	cxt1.save();
	cxt1.fillStyle = 'white';
	cxt1.fillText('score: ' + this.score, w*0.5, 80);
	cxt1.shadowBlur = 50;
	cxt1.shadowColor = 'white';
	if (this.gameOver) {
		this.alpha += deltaTime * 0.006;
		if (this.alpha > 1) {
			this.alpha = 1;
		}
		cxt1.fillStyle = 'rgba(255, 255, 255,' + this.alpha +')';
		cxt1.fillText('Game Over', w*0.5, h*0.5);
	}
	cxt1.restore();
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 10 * this.dubble;
	this.fruitNum = 0;
	this.dubble = 1;
}
