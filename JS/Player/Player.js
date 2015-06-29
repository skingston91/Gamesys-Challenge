// This will control the player Object "class" and the functions it needs 
//Steven Kingston 26/06/2015

//Creates a player with starting money
	function Player (startingMoney) {
		this.money = startingMoney;
		this.name = '';
		
	}

	//Variable to create the player and return it
	function createPlayer(startingMoney){
		var player = new Player(startingMoney);
		return player;
	}
	