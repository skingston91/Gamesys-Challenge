// This will control the player Object "class" and the function it needs 
//Steven Kingston 26/06/2015

	function Player (startingMoney) {
		this.money = startingMoney;
		this.name = '';
		
	}

	//Varible to create the player and return it
	function createPlayer(startingMoney){
		var player = new Player(startingMoney);
		return player;
	}
