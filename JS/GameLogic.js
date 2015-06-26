//This calculates the maths and game logic behind the scenes 
//Steven Kingston 26/06/2015

//List of all our racers
	var racers = [];
	
//Amount of Stat values e.g speed
  var racerStatsValues = 5;

//Possible Stats Range(the max)
  var maxStatsRange = 100;
	
//Generate the racers here when given an amount to create from
function GenerateRacers(amountOfRacers)
{
	 for(i=0; i < amountOfRacers; i++){
		var height = i + 10;
		var actor = new Actor(height,5);
		actor.name = "Racer" + i; // Hopefully will change this to random name generator
		alert(actor.name);
		actor.stats = GenerateStats(racerStatsValues); // gets us the Racers racing stats (unused currently)
		var racerValue = CalculateStats(actor.stats); // create the one value we will use for the speed
		actor.odds = CalculateOdds(racerValue)	;
		actor.speed = CalculateRacerSpeed(CalculateTrueStats(racerValue));
		alert(actor.speed);
		racers[i] = actor;
  }
	
	return racers;
}

//Will generate an array of random numbers the length we pass it
function GenerateStats(statsRequired)
{
	var statsArray = [];
	for(o = 0; o < statsRequired; o++){
		statsArray[o] = CalculateRandomElement()
	}
	
	return statsArray;
}


//Takes the actors stats and calculates how good they are
function CalculateStats(stats)
{
	//Sets the importance of each of the stats values - will add if I get chance
/* 	var speedValue = 3;
	var luckValue = 2;
  var staminaValue = 1;
	var formValue = 4;
	var fitnessValue = 3; */
	
	var racerValue = 0;
	 for(n=0; n < stats.length; n++){
			racerValue = racerValue + stats[n];
  }
	return racerValue;
}

// Takes a data structure of the actors and compares their values to each other to figure out likelihood of winning **

//For the moment we will do a simple if statement to check what we should say the odds are
function CalculateOdds(racerValue)
{
	var maxPossibleRacerValue = racerStatsValues * maxStatsRange;
	if(racerValue >= maxPossibleRacerValue/2  && racerValue <= maxPossibleRacerValue)
	{
			alert(racerValue);
			return "Looking Good";
	}
	if (racerValue >= 0 && racerValue < maxPossibleRacerValue/2 )
	{
		alert(racerValue);
		return "*Cough";
	}
	else
	{
		alert(racerValue);
		return "MAMMA MIA";
	}
	
}

// Makes a random number between one and 100
function CalculateRandomElement()
{
	return Math.floor((Math.random() * maxStatsRange) + 1);
}

// Adds a random value to the true stats 
function CalculateTrueStats(racerValue)
{
	var randomValue = CalculateRandomElement();
	racerValue = racerValue + randomValue;
	return racerValue;
}

//Takes the Total actorsValue and then figures out its speed across the screen 
function CalculateRacerSpeed(racerValue)
{
	var speed = racerValue/100;
	return speed;
}
