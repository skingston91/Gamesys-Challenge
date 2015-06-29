// This will define all the methods regarding the Gambling aspects 
// Steven Kingston 27/06/2015

// When the bet on that racer is pressed check they have the money and remove from their funds then add the Bet to the
// racer 
function IncrementBet(racer){
		var player = returnPlayer();
		if(player.money >= 100){
			player.money -= 100;
			racer.currentBet += 100;
		}
	}		

//	Decrease the bet on the racer
function DecrecmentBet(racer){
		var player = returnPlayer();
		if(racer.currentBet >= 100){
			player.money += 100;
			racer.currentBet -= 100;
		}
}

//Reset Bets from all racers 
function ResetBets(racers){
	var player = returnPlayer();
	for(var i = 0; i < racers.length; i++){
			var racer = racers[i];
			var racerBet = racer.currentBet;
			racer.currentBet = 0
			player.money += racerBet;
	}
}

//Add the Winnings after calculation to the player
function AddWinnings(racer){
	var winnings = CalculateWinnings(racer);
	var player = returnPlayer();
	player.money += winnings;
}

//Calculate the winnings from the racer data
function CalculateWinnings(racer){
		return racer.currentBet * racer.oddsValue;
}
