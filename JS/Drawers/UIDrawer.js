// This controls all the methods related to the Drawing of the UI Menu System
// Steven Kingston 26/06/2015

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var canvasWidth = $("#canvas").width();
	var canvasHeight = $("#canvas").height();
	
	var stage;
	var menuLayer;
	var dynamicBettingLayer;
	var baseBettingLayer;
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
		menuLayer = new Kinetic.Layer();
		baseBettingLayer = new Kinetic.Layer();
		dynamicBettingLayer = new Kinetic.Layer();
		
	} 	
	
//Create the Title Screen
function TitleScreen() 
	{
		AddBorder(menuLayer);
		CreateText("CBR",stage.width()/3+30,stage.height()/6,80,menuLayer);
		CreateText("Crusty Burrito Racing",stage.width()/3-70,stage.height()/6 + 80,50,menuLayer);
		xPosition = stage.width()/3,
		yPosition = stage.height()/2,
		GenerateMenuButton("Start Game",LoadBettingMenu,xPosition,yPosition,menuLayer);
		yPosition += 60;
		//GenerateMenuButton("Mute",MuteCurrentSound,xPosition,yPosition);
	}
	
//Create the base of the betting screen for anything thats not dynamic
function DrawBettingScreenBase()
	{
		AddBorder(baseBettingLayer);
		CreateText("Betting Time",stage.width()/3,stage.height()/6,80,baseBettingLayer);
		GenerateMenuButton("Start Race",StartRace,600,500,baseBettingLayer);
		baseBettingLayer.draw();
	}
	
//Create the Betting function Screen by iterating through all the racers and creating the buttons for them
// Along with player information and Titles
function BettingScreen(racers)
	{
		stage.removeChildren(); // Remove all the previous layers
		stage.clear();
		DrawBettingScreenBase();
		DrawDynamicBettingLayer();
	}
	
//Function which draws any of the dynamic content on the page	
function DrawDynamicBettingLayer()
{
		dynamicBettingLayer.removeChildren();
		dynamicBettingLayer.clear();
		var player = returnPlayer();
		CreatePlayerStatus(dynamicBettingLayer);
		
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
		dynamicBettingLayer.draw();
}	
//Generic Method that gets called to add text on to the stage ready to be rendered
function CreateText(value,xPosition,yPosition,size,layer)
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
function AddBorder(layer)
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
function GenerateMenuButton(menuText,calledfunction,xPostion,yPostion,layer)
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
			text: menuText,
			fill: 'black'
		});
		
		rect.on('mousedown', function() {
			calledfunction();
		});
		
		text.on('mousedown', function() {
			calledfunction();
		});
		
		layer.add(rect);
		layer.add(text);
		stage.add(layer);
	
	}
//Create the text to show how much the player currently has
function CreatePlayerStatus(layer)
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
			GenerateRacerArea(racer,xPosition,yPosition,dynamicBettingLayer);
			GenerateRacerBetButton(racer,IncrementBet,xPosition + 210,yPosition ,"Up",dynamicBettingLayer)
			GenerateRacerBetButton(racer,DecrecmentBet,xPosition + 270,yPosition,"Down",dynamicBettingLayer)
			CreateText("Bet: £" + racer.currentBet,xPosition + 340,yPosition + 10,20,dynamicBettingLayer);
			
	}
	
// Will Generate an area to show the racer details - hopefully get time to add Image of racer
function GenerateRacerArea(racer,xPosition,yPosition,layer)
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
		
		var image = new Kinetic.Image({
			x: rect.getX() + 5 ,
			y: rect.getY() + 8,
			image: racer.image,
			width: 33,
			height: 29
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
		layer.add(image);
		layer.add(odds);
		stage.add(layer);
	
	}	
	
// These define the buttons for the buttons we use for increasing and decreasing betting 
function GenerateRacerBetButton(racer,calledfunction,xPosition,yPosition,buttonText,layer)
{
		var rect = new Kinetic.Rect({
			x: xPosition,
			y: yPosition,
			width:55,
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
		
		rect.on('mousedown', function() {
			calledfunction(racer);
			CreatePlayerStatus(layer);
			DrawDynamicBettingLayer();		
		});
		
		text.on('mousedown', function() {
			calledfunction(racer);
			CreatePlayerStatus(layer);
			DrawDynamicBettingLayer();
		});
		
		layer.add(rect);
		layer.add(text);
		stage.add(layer);
	
}

// Writes in Text on screen of the winner of the race
function WinnerInformation(racer) {
		var value = CalculateWinnings(racer);
		CreateText("Racer: "+ racer.name+ " Won",stage.width()/2 + 100,stage.height()/2,20,dynamicBettingLayer)
		if (racer.currentBet != 0)
		{
			CreateText("You got: £" + value,stage.width()/2 + 100,stage.height()/2 + 50,20,dynamicBettingLayer)
		}
	}	
	
function ChangeUIButtonColor(rect,color)
{
	rect.setFill(color);
}	