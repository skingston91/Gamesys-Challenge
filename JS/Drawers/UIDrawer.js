// This controls all the methods related to the Drawing of the UI except for the game
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
	//Screen that shows who the winner was
function WinnerScreen(racer) 
	{

	}	

//Create the Title Screen
function TitleScreen() 
	{
		createTitle("CBR");
		xPosition = stage.width()/2,
		yPosition = stage.height()/3,
		GenerateMenuButton("Start Game",LoadBettingMenu,xPosition,yPosition);
		yPosition += 60;
		GenerateMenuButton("Mute",MuteCurrentSound,xPosition,yPosition);
	}
		
//Create the Title Text
function createTitle(name)
	{
		var text = new Kinetic.Text({
			x: stage.width()/2,
			y: stage.height()/6,
			fontFamily: 'Calibri',
			fontSize: 80,
			text: name,
			fill: 'black',
			align: 'center'
		});
		layer.add(text);
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
//Create Player Status
function createPlayerStatus(money)
	{
		var text = new Kinetic.Text({
			x: stage.width()/8,
			y: stage.height()/8,
			fontFamily: 'Calibri',
			fontSize:30,
			text: 'Player Money:' + money,
			fill: 'black',
			align: 'center'
		});
		layer.add(text);
		stage.add(layer);
	}
	
//Create the Betting function Screen by iterating through all the racers and creating the buttons for them
function BettingScreen(racers,player)
	{
		layer.removeChildren();
		layer.clear();
		createTitle("Betting Time");
		createPlayerStatus(player.money);
		GenerateMenuButton("Start Race",StartRace,600,250);
		var startXPosition = stage.width()/6;
		var startYPosition = stage.height()/2; // start position of the y 
		var yPosition = startYPosition; // start position of the y 	
	  for(var i = 0; i < racers.length; i++)
		{
			var racer = racers[i];
			xPosition = startXPosition;
			yPosition = yPosition + 55;
			//console.log(stage.height());
			//console.log(startYPosition);
			console.log(racer.name);
			if (yPosition >= stage.height())
			{
				// console.log(yPosition);
				// console.log(racer.name);
				xPosition =+ 600;
				yPosition = startYPosition + 55;
			}
			GenerateFullRacerArea(racer,xPosition,yPosition)
		}
		layer.draw();
	}
	
//Generate Betting Area for the user including the buttons to bet
function GenerateFullRacerArea(racer,xPosition,yPosition)
	{
			GenerateRacerArea(racer.name,xPosition,yPosition);
			GenerateRacerBetButton(racer,IncrementBet,xPosition + 210,yPosition ,"Up")
			GenerateRacerBetButton(racer,DecrecmentBet,xPosition + 260,yPosition,"Down")
	}
	
// Will Generate an area to show the racer details - hopefully image of racer and name and stats
function GenerateRacerArea(name,xPosition,yPosition)
	{
		var rect = new Kinetic.Rect({
			x: xPosition,
			y: yPosition,
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
			fontSize: 15,
			width:rect.getWidth(),
			align: 'center',
			text: name,
			fill: 'black'
		});
		
		layer.add(rect);
		layer.add(text);
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
			strokeWidth: 5
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
		});
		layer.add(rect);
		layer.add(text);
		stage.add(layer);
	
}
