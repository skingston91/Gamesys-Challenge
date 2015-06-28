// This controls all the methods related to the Drawing of the UI except for the game
// Steven Kingston 26/06/2015

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var canvasWidth = $("#canvas").width();
	var canvasHeight = $("#canvas").height();
	
	var stage;
	var clearLayer;
	var Layer;
	var xPostion;
	var yPostion;
	
	//Screen that shows who the winner was
function WinnerScreen(racer) 
	{
		var x = canvasWidth / 2;
		var y = canvasHeight / 2;
		
		context.fillStyle = "black";
		context.font = "24px Helvetica";
		context.fillText("The Winner was:"  + racer.name,x,y);
	}	

//Show the Title
function TitleScreen() 
	{
		createTitle();
		xPostion = stage.width()/2,
		yPostion = stage.height()/3,
		GenerateMenuButton("Start Game",LoadBettingMenu,xPostion,yPostion);
		yPostion += 60;
		GenerateMenuButton("Mute",MuteCurrentSound,xPostion,yPostion);
	}
		
//Create the Title Text
function createTitle()
	{
		var text = new Kinetic.Text({
			x: stage.width()/2 + 30,
			y: stage.height()/6,
			fontFamily: 'Calibri',
			fontSize: 80,
			text: 'CBR',
			fill: 'black',
			align: 'center'
		});
		layer.add(text);
		stage.add(layer);
	}

//Create Player Status
function createPlayerStatus(money)
	{
		var text = new Kinetic.Text({
			x: stage.width()/3,
			y: stage.height()/4,
			fontFamily: 'Calibri',
			fontSize:30,
			text: 'Player Money:' + money,
			fill: 'black',
			align: 'center'
		});
		layer.add(text);
		stage.add(layer);
	}
	
//Create the Betting function Screen
function BettingScreen(actors,player)
	{
		layer.clear();
		createPlayerStatus(player.money);
	  for(var i = 0; i < listOfActors.length; i++){
			var actor = listOfActors[i];
			
			}
		layer.draw();
	}
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
	
// Will Generate a button
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

//Generate Betting Area for the user 	
function GenerateFullRacerArea(racer)
	{
	
	}
	
// Will Generate an area to show the racer details
function GenerateRacerArea(racer,xPostion,yPostion)
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
		
		bettinglayer.add(rect);
		bettinglayer.add(text);
		stage.add(bettinglayer);
	
	}	