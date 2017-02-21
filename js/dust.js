var dustObj = function() {
	this.x = [];
	this.y = [];
	this.amp = [];
	this.NO = [];
	this.angle = 0;
}

dustObj.prototype.num = 30;

dustObj.prototype.init = function() {
	for (var i=0; i<this.num; i++) {
		this.x[i] = Math.random() * canWidth;
		this.y[i] = Math.random() * canHeight;
		this.NO[i] = Math.floor(Math.random() * 7); //[0,6)
		this.amp[i] = 20 + Math.random() * this.NO[i];
		this.angle = 0;
	}
}

dustObj.prototype.draw = function() {
	this.angle += deltaTime * 0.0008;
	var l = Math.sin(this.angle);
	for (var i=0; i<this.num; i++) {
		var no = this.NO[i];
		cxt1.drawImage(dustPic[no], this.x[i] + this.amp[i]* l, this.y[i]);
		
	}
}
