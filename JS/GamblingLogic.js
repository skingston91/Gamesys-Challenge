// This will define all the methods regarding the Gambling aspects 
// Steven Kingston 27/06/2015

// When the bet on that racer is pressed check they have the money and remove from their funds then add the Bet to the
// racer 
function IncrementBet(player,racer){
		if(player.money >= 100){
			player.money -= 100;
			racer.currentBet += 100;
		}
	}		

//	Decrease the bet on the racer
function DecrecmentBet(player,racer){
		if(racer.money <= 100){
			player.money += 100;
			racer.currentBet -= 100;
		}
}

//Reset Bets from all racers 
function ResetBets(player,racers){
	for(var i = 0; i < racers.length; i++){
			var racer = racers[i];
			var racerBet = racer.currentBet;
			racer.currentBet = 0
			player.money += racerBet;
	}
}

//Add the Winnings after calculation to the player
function AddWinnings(racer){
	var winnings = racer.currentBet * racer.oddsValue;
	var player = returnPlayer();
	player.money += winnings;
}
