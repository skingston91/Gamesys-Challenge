// GameController is the master file which has access to the other files in the game and calls their methods
// Steven Kingston 26/06/15
  
$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var canvasWidth = $("#canvas").width();
	var canvasHeight = $("#canvas").height();
	
	Initialise();
	
	var racers;
	var then;
	var running;
	var player;
	})
	
	//Initialise the game starting at the menu
	function Initialise()	{
	  createKineticArea();
		LoadMainMenu();
		//$("#canvas").hide();
		//$("#canvas").show();
		player = new Player(2000);
		SetupSound();
		//LoadBettingMenu();
		//StartRace();
	}
	
	function LoadMainMenu(){
			TitleScreen();
	}
	
	function LoadBettingMenu(){
		racers = GenerateRacers(12,canvasWidth,canvasHeight);
		BettingScreen(racers,player);
	}
	
	function StartRace(){
		//racers = GenerateRacers(12,canvasWidth,canvasHeight);
		//PlayRaceMusic("music");
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
		ShowMenu(context,canvasWidth,canvasHeight);
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
	
	
	


