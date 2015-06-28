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
	var running;
	var player;
	})
	
	//Initialise the game starting at the menu
	function Initialise()	{
		ClearMenuScreen();
		TitleScreen();
		player = new Player(2000);
		SetupSound();
		LoadBettingMenu();
		TestTitleScreen();
		//StartRace();
	}
	
	function LoadMainMenu(){
	
	}
	
	function LoadBettingMenu(){
		racers = GenerateRacers(12,width,height);
	}
	
	function StartRace(){
		PlayRaceMusic("music");
		then = Date.now();
		running = true;
		Main(); 
		
	}
	
		//When we want to stop the game do it here
	function StopGame(){
		running = false;
	}
	
	function Reset(){
			StartGame();
	}
	
	function UpdateGame()	{
			UpdateActors(racers);
	}
	
	function ExitGame()
	{
		StopGame();
		ShowMenu(context,width,height);
	}
	
	// The main game loop - taken online
	function Main() {
		if(running == true){
			//soundManager.play('music');
			var now = Date.now();
			var delta = now - then;

			UpdateGame(delta / 1000);
			RenderGame(context,racers);

			then = now;

			requestAnimationFrame(Main);
			}
	};
	
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	function returnPlayer(){
		return Player;		
	}
	
	
	


