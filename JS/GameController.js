// GameController is the master file which has access to the other files in the game and calls their methods
// Steven Kingston 26/06/15
  
$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	

	Initialise();
	//Initialise the game starting at the menu
	function Initialise()
	{
		ClearScreen(context,width,height)
	}
	
	function StartGame()
	{
		
	}
	
	function UpdateGame()
	{
	
	}
	
	function ExitGame()
	{
		ShowMenu(context,width,height);
	}
	
	
})