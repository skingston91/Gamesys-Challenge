// This controls all the methods related to the Drawing of the UI except for the game
// Steven Kingston 26/06/2015


//Paint everything we need at the start
function ShowMenu(context,width,height)
	{
		
	}

function ClearScreen(context,width,height) 
	{
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = "black";
		context.strokeRect(0, 0, width, height);
	}