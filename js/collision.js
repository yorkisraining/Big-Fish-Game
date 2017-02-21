//大鱼吃果实的碰撞检测
function momFruitCollision() {
	if (!data.gameOver) {
		for ( var i=0; i<fruit.num; i++) {
			if (fruit.alive[i] ) {
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if (l < 900) {
					//fruit eaten;
					fruit.dead(i);
					data.fruitNum ++;
					mom.bigBodyCount ++;
					if (mom.bigBodyCount > 7)　{
						mom.bigBodyCount = 7;
					}
					if (fruit.fruitType[i] == 'blue') { //blue dubble score
						data.dubble = 2;
					}
					wave.born(fruit.x[i], fruit.y[i]);
				}
			}
		}
	}
}

//大鱼味小鱼的碰撞检测
function momBabyCollision() {
	var l = calLength2(mom.x, mom.y, baby.x, baby.y);
	if (l < 900 && data.fruitNum > 0 && !data.gameOver) {
		//baby recover
		baby.babyBodyCount = 0;
		mom.bigBodyCount = 0;
		//score updare;
		data.addScore();
		halo.born(baby.x, baby.y);
	}
}
