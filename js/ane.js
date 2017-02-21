var aneObj = function(){
	// start point, control point, end point 二次贝塞尔曲线
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.angle = 0; //角度
	this.amp = []; //振幅
}

aneObj.prototype.num = 80;
aneObj.prototype.init = function() {
	for ( var i=0; i<this.num; i++) {
		this.rootx[i] = i*16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 250 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 30;
	}
}
aneObj.prototype.draw = function() {
	this.angle += deltaTime * 0.0008;
	var l = Math.sin(this.angle); // [-1,1];
	cxt2.save();
	cxt2.globalAlpha = 0.6;
	cxt2.strokeStyle = '#3b154e';
	cxt2.lineWidth = 25;
	cxt2.lineCap = 'round';
	for ( var i=0; i<this.num; i++) {
		cxt2.beginPath();
		cxt2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i]
		cxt2.quadraticCurveTo(this.rootx[i], canHeight - 80, this.headx[i], this.heady[i]);
		cxt2.stroke();
	}
	cxt2.restore();
}
