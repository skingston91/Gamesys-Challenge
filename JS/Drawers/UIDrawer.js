// This controls all the methods related to the Drawing of the UI except for the UI

function paintBorder(context,width,height)
	{
		context.fillStyle = "white";
		context.fillRect(0, 0, width, height);
		context.strokeStyle = "black";
		context.strokeRect(0, 0, width, height);
	}

	//Paint the background
	function paintBackground()
	{
	
	}
