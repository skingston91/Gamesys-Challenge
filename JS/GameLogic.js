//This calculates the maths and game logic behind the scenes 
//Steven Kingston 26/06/2015

var racers = [];

//Generate the racers here when given an amount to create from
function GenerateRacers(amountOfRacers)
{
	 for(i=0; i < amountOfRacers; i++){
		var height = i + 10;
		var actor = new Actor(height,5);
		actor.name = "Racer" + i; // Hopefully will change this to random name generator
		alert(actor.name);
		actor.stats = GenerateStats(5); // gets us the Racers racing stats 
		racers[i] = actor;
		
  }
}
//Will generate an array of random numbers the length we pass it
function GenerateStats(statsRequired)
{
	var statsArray = [];
	for(o = 0; o < statsRequired; o++){
		statsArray[o] = CalculateRandomElement()
		alert(statsArray[o]);
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
	
	var actorValue = 0;
	
	 for(i=0; i < stats.length; i++){
			alert(stats[i]);
			actorValue + stats[i];
  }
	
	return actorValue;
	
}

// Takes a data structure of the actors and compares their values to figure out likelihood of winning
function CalculateOdds(racers)
{


}
// Makes a random number between one and 100
function CalculateRandomElement()
{
	return Math.floor((Math.random() * 100) + 1);
}

// Adds a random value to the true stats 
function CalculateTrueStats(actorValue)
{
	var randomValue = CalculateRandomElement();
	actorValue + randomValue;
	return actorValue;
}

//Takes the Total actorsValue and then figures out its speed across the screen 
function CalculateActorSpeed(actorValue)
{
	actorValue = actorValue/100;
	return speed;
}
