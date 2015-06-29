// This controls all the methods related to the Drawing of the UI Menu System
// Steven Kingston 26/06/2015

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var canvasWidth = $("#canvas").width();
	var canvasHeight = $("#canvas").height();
	
	var stage;
	var layer;
	var xPosition;
	var yPosition;
	var odds;
	var playerStatText;
//This is the area we will be using for the UI 
function createKineticArea()
	{
		stage = new Kinetic.Stage({
					container: 'container',
					width: canvasWidth,
					height: canvasHeight
				});
		layer = new Kinetic.Layer();
	} 	
	
//Create the Title Screen
function TitleScreen() 
	{
		AddBorder();
		createText("CBR",stage.width()/3+30,stage.height()/6,80);
		createText("Crusty Burrito Racing",stage.width()/3-70,stage.height()/6 + 80,50);
		xPosition = stage.width()/3,
		yPosition = stage.height()/2,
		GenerateMenuButton("Start Game",LoadBettingMenu,xPosition,yPosition);
		yPosition += 60;
		//GenerateMenuButton("Mute",MuteCurrentSound,xPosition,yPosition);
	}
	
	//Create the Betting function Screen by iterating through all the racers and creating the buttons for them
	// Along with player information and Titles
function BettingScreen(racers)
	{
		layer.removeChildren(); // Remove all the previous layers
		layer.clear();
		AddBorder();
		var player = returnPlayer();
		createText("Betting Time",stage.width()/3,stage.height()/6,80);
		createPlayerStatus(player.money);
		GenerateMenuButton("Start Race",StartRace,600,500);
		var startXPosition = stage.width()/8;
		var startYPosition = stage.height()/3; // Store the initial height of the column
		var yPosition = startYPosition; // start position of the y 	
	  for(var i = 0; i < racers.length; i++)
		{
			var racer = racers[i];
			xPosition = startXPosition;
			yPosition = yPosition + 55;
			if (yPosition >= stage.height())
			{
				xPosition =+ 600;
				yPosition = startYPosition + 55;
			}
			GenerateFullRacerArea(racer,xPosition,yPosition)
		}
		layer.draw();
	}
	
//Generic Method that gets called to add text on to the stage ready to be rendered
function createText(value,xPosition,yPosition,size)
	{
		var text = new Kinetic.Text({
			x: xPosition,
			y: yPosition,
			fontFamily: 'Calibri',
			fontSize: size,
			text: value,
			fill: 'black',
			align: 'center'
		});
		layer.add(text);
		stage.add(layer);
	}

// Adds a Border when called to the screen
function AddBorder()
{
	var border = new Kinetic.Rect({
		width: stage.getWidth(),
		height: stage.getHeight(),
		stroke: 'black',
		strokeWidth: 4, //Border Size in Pixels
	});
		layer.add(border);
		stage.add(layer);
}
// Will Generate a button with text which can call a function passed to it
function GenerateMenuButton(Text,calledfunction,xPostion,yPostion)
	{
		var rect = new Kinetic.Rect({
			x: xPostion,
			y: yPostion,
			width:200,
			height:50,
			fill:'White',
			stroke: 'Black',
			strokeWidth: 5
		});
		
		var text = new Kinetic.Text({
			x: rect.getX(),
			y: rect.getY() + 15,
			fontFamily: 'Calibri',
			fontSize: 20,
			width:rect.getWidth(),
			align: 'center',
			text: Text,
			fill: 'black'
		});
		
		rect.on('mousedown', function() {
			calledfunction();
		});
		
		layer.add(rect);
		layer.add(text);
		stage.add(layer);
	
	}
//Create the text to show how much the player currently has
function createPlayerStatus()
	{
		layer.remove(playerStatText);
		var player = returnPlayer();
		playerStatText = new Kinetic.Text({
			x: stage.width()/9,
			y: stage.height()/9,
			fontFamily: 'Calibri',
			fontSize:30,
			text: 'Player Money: £' + player.money,
			fill: 'black',
			align: 'center'
		});
		layer.add(playerStatText);
		stage.add(layer);
	}
	
//Generate Betting Area for the user including the buttons to bet
function GenerateFullRacerArea(racer,xPosition,yPosition)
	{
			GenerateRacerArea(racer,xPosition,yPosition);
			GenerateRacerBetButton(racer,IncrementBet,xPosition + 210,yPosition ,"Up")
			GenerateRacerBetButton(racer,DecrecmentBet,xPosition + 270,yPosition,"Down")
			createText("Bet: £" + racer.currentBet,xPosition + 340,yPosition + 10,20);
			
	}
	
// Will Generate an area to show the racer details - hopefully get time to add Image of racer
function GenerateRacerArea(racer,xPosition,yPosition)
	{
		var rect = new Kinetic.Rect({
			x: xPosition,
			y: yPosition,
			width:200,
			height:50,
			fill:'White',
			stroke: 'Black',
			strokeWidth: 4
		});
		
		var text = new Kinetic.Text({
			x: rect.getX(),
			y: rect.getY() + 15,
			fontFamily: 'Calibri',
			fontSize: 15,
			width:rect.getWidth(),
			align: 'center',
			text: racer.name,
			fill: 'black'
		});
		
		odds = new Kinetic.Text({
			x: rect.getX(),
			y: rect.getY() + 30,
			fontFamily: 'Calibri',
			fontSize: 13,
			width:rect.getWidth(),
			align: 'center',
			text: "Odds: " + racer.odds,
			fill: 'black'
		});
		
		
		layer.add(rect);
		layer.add(text);
		layer.add(odds);
		stage.add(layer);
	
	}	
	
// These define the buttons for the buttons we use for increasing and decreasing betting 
function GenerateRacerBetButton(racer,calledfunction,xPosition,yPosition,buttonText)
{
		var rect = new Kinetic.Rect({
			x: xPosition,
			y: yPosition,
			width:50,
			height:50,
			fill:'White',
			stroke: 'Black',
			strokeWidth: 4
		});
		
		var text = new Kinetic.Text({
			x: rect.getX(),
			y: rect.getY() + 15,
			fontFamily: 'Calibri',
			fontSize: 20,
			width:rect.getWidth(),
			align: 'center',
			text: buttonText,
			fill: 'black'
		});
		
		var text = new Kinetic.Text({
			x: rect.getX(),
			y: rect.getY() + 15,
			fontFamily: 'Calibri',
			fontSize: 20,
			width:rect.getWidth(),
			align: 'center',
			text: buttonText,
			fill: 'black'
		});
		
		rect.on('mousedown', function() {
			calledfunction(racer);
			createPlayerStatus();
			BettingScreen(racers,player); // THIS IS REALLY TERRIBLE AS READDING and RE-DRAWING EVERYTHING
		});
		layer.add(rect);
		layer.add(text);
		stage.add(layer);
	
}

// Writes in Text on screen of the winner of the race
function WinnerInformation(racer) 
	{
		var value = CalculateWinnings(racer);
		createText("Racer: "+ racer.name+ " Won",stage.width()/2 + 100,stage.height()/2,20)
		if (racer.currentBet != 0)
		{
			createText("You got: £" + value,stage.width()/2 + 100,stage.height()/2 + 50,20)
		}
		//alert("Racer: "+ racer.name + " Won You got " + value);
	}	