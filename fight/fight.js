var fight = {
	start : function(enemyBase = undefined){
		if(enemyBase == undefined){
			enemy = new Char(charBase.enemy);
		} else {
			enemy = new Char(enemyBase);
		}
	}
}

var enemy;