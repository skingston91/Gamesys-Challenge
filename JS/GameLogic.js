//This calculates the maths and game logic behind the scenes 
//Steven Kingston 26/06/2015

//List of all our racers
	var racers = [];
	
//Amount of Stat values e.g speed
  var racerStatsValues = 5;

//Possible Stats Range(the max)
  var maxStatsRange = 100;
	
//Generate the racers here when given an amount to create from
function GenerateRacers(amountOfRacers,canvasWidth,canvasHeight)
{
	 canvasHeight -= 30;
	 for(var i=0; i < amountOfRacers; i++){
		var x = canvasWidth - 100;
		var y = canvasHeight -(i * 60)
		var actor = new Actor(x,y);
		actor.name = findName(); // Random Name Generator
		actor.stats = GenerateStats(racerStatsValues); // generates us the Racers racing stats 
		actor.racerValue = CalculateStats(actor.stats); // create the one value we will use eventually for the speed
		CalculateOdds(actor);//figure out the racers chance of winning and add them to the actor
		actor.speed = CalculateRacerSpeed(CalculateTrueStats(actor.racerValue));
		imageArray = getRacerImageArray();
		actor.image = imageArray[CalculateRandomElement(imageArray.length)];
		//console.log(actor.image);
		racers[i] = actor;
		
  }
	
	return racers;
}

//Will generate an array of random numbers the length we pass it
function GenerateStats(statsRequired)
{
	var statsArray = [];
	for(var i = 0; i < statsRequired; i++){
		statsArray[i] = CalculateRandomElement(maxStatsRange)
	}
	
	return statsArray;
}


//Takes the racers stats and calculates how good they are
function CalculateStats(stats)
{
	//Sets the importance of each of the stats values - will add if I get chance
/* 	var speedValue = 3;
	var luckValue = 2;
  var staminaValue = 1;
	var formValue = 4;
	var fitnessValue = 3; */
	
	var racerValue = 0;
	 for(var i =0; i < stats.length; i++){
			racerValue = racerValue + stats[i];
  }
	return racerValue;
	
}

// Should takes a data structure of the actors and compares their values to each other to figure out likelihood of winning **
//For the moment we will do a simple if statement to check what we should say the odds are
function CalculateOdds(racer)
{
	var maxPossibleRacerValue = racerStatsValues * maxStatsRange; // create what the best possible values should be 
	if(racer.racerValue >= maxPossibleRacerValue/2  && racer.racerValue <= maxPossibleRacerValue)
	{
			racer.oddsValue = 1.1;
			racer.odds = "Looking Good";
	}
	if (racer.racerValue >= 0 && racer.racerValue < maxPossibleRacerValue/2 )
	{
		racer.oddsValue = 1.5;
		racer.odds = "Not so Good";
	}
	else
	{
		racer.oddsValue = 2;
		racer.odds = "MAMMA MIA";
	}
	
}

// Makes a random number between one and maxRange
function CalculateRandomElement(maxRange){
	var randomNumber = Math.floor((Math.random() * maxRange) + 1);
	return randomNumber;
}

// Adds a random value to the true stats 
function CalculateTrueStats(racerValue){
	var randomValue = CalculateRandomElement(maxStatsRange); 
	racerValue += randomValue;
	return racerValue;
}

//Takes the Total RacerValue and then figures out its speed across the screen 
function CalculateRacerSpeed(racerValue){
	var speed = racerValue/100;
	return speed;
}

//The method which runs through our actors and calls the update method
function UpdateActors(listOfActors)
{
		 for(var i = 0; i < listOfActors.length; i++){
				var actor = listOfActors[i];
				actor.Update();
				
				if(actor.x <= 70)//(Currently Hard coded finish line
				{
					StopGame();
					//soundManager.play("clap");
					AddWinnings(actor);// pass the racer through to figure out winnings and then add to the player money
					WinnerInformation(actor);
				}
  }
}

// Return Winner of the racer
function ReturnWinner(racer){
	 return racer;
}
