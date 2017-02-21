var waveObj = function() {
	this.x = [];
	this.y = [];
	this.r = [];
	this.alive = [];
}

waveObj.prototype.num = 15;

waveObj.prototype.init = function() {
	for (var i=0; i<this.num; i++) {
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 0;
		this.alive[i] = false;
	}
}

waveObj.prototype.draw = function() {
	cxt1.save();
	cxt1.lineWidth = 2;
	cxt1.shadowBlur = 10;
	cxt1.shadowColor = 'white';
	for (var i=0; i<this.num; i++) {
		if (this.alive[i]) {
			this.r[i] += deltaTime * 0.03;
			if(this.r[i] >40) {
				this.alive[i] = false;
			}
			var alpha = 1 - this.r[i] / 40;
			cxt1.beginPath();
			cxt1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI*2);
			cxt1.closePath();
			cxt1.strokeStyle = 'rgba(255, 255, 255,' + alpha + ')';
			cxt1.stroke();
		}
	}
	cxt1.restore();
}

waveObj.prototype.born = function(x, y) {
	for (var i=0; i<this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.r[i] = 10;
			this.draw();
			return;
		}
	}
}