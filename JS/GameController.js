// GameController is the master file which has access to the other files in the game and calls their methods
// Steven Kingston 26/06/15
  
$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	
	Initialise();
	
	var racers;
	var then;
	
	//Initialise the game starting at the menu
	function Initialise()	{
		ClearScreen();
		StartGame();
		
	}
	
	function StartGame()	{
		racers = GenerateRacers(12,width,height);
		then = Date.now();
		Main(); 
	}
	
	function Reset(){
			StartGame();
	}
	
	function UpdateGame()	{
			UpdateActors(racers);
			
	}
	
	function ExitGame()
	{
		ShowMenu(context,width,height);
	}
	
	// The main game loop - taken online
	function Main() {
		var now = Date.now();
		var delta = now - then;

		UpdateGame(delta / 1000);
		RenderGame(context,racers);

		then = now;

		requestAnimationFrame(Main);
	};
	
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
	
})