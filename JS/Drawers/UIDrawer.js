// This controls all the methods related to the Drawing of the UI except for the game
// Steven Kingston 26/06/2015

	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	
//Paint everything we need at the start
function ShowMenu(context,width,height)
	{
		
	}
	
//Clear the screen to white
function ClearScreen() 
	{
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = "black";
		context.strokeRect(0, 0, width, height);
	}
	
//Screen that shows who the winner was
function WinnerScreen(racer) 
	{
		var x = width / 2;
		var y = height / 2;
		
		context.fillStyle = "black";
		context.font = "24px Helvetica";
		context.fillText("The Winner was:"  + racer.name,x,y);
	}	

//Show the Title
function TitleScreen() 
	{
		var x = width / 3;
		var y = height / 4;
		
		context.fillStyle = "black";
		context.font = "24px Helvetica";
		context.fillText("WACKY RACERS",x,y);
	}	