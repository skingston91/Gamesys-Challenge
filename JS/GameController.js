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
		player = new Player(2000);
		SetupSound();
	}
	
	function LoadMainMenu(){
			TitleScreen();
	}
	
	function LoadBettingMenu(){
		$('#canvas').hide();
		$('#container').show();
		racers = GenerateRacers(6,canvasWidth,canvasHeight);
		BettingScreen(racers,player);
	}
	
	function StartRace(){
		//racers = GenerateRacers(12,canvasWidth,canvasHeight);
		//PlayRaceMusic("music");
		$('#container').hide();
		$('#canvas').show();
		then = Date.now();
		running = true;
		Main(); 
		
	}
	
		//When we want to stop the game do it here
	function StopGame(){
		running = false;
		Reset();
	}
	
	function Reset(){
			LoadBettingMenu();
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
			var now = Date.now();
			var delta = now - then;

			UpdateGame(delta / 1000);
			RenderGame(context,racers);

			then = now;

			requestAnimationFrame(Main);
			}
		else{
				var sound = soundManager.getSoundById("music")
				MuteOneSound(sound);
		}
	};
	
	// Cross-browser support for requestAnimationFrame
	var w = window;
	requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

	function returnPlayer(){
		return player;		
	}
	
	
	


