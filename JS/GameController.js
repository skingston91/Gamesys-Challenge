// GameController is the master file which has control of the flow in the game and calls their methods
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
		player = new Player(2000); // create our player stats when we start as only need one player created
		SetupSound(); // Start to load the sound
	}
	// Loads the Title screen UI Drawer Function
	function LoadMainMenu(){
			TitleScreen();
	}
	
	//Switches between the canvas and menu UI and Creates new racers
	function LoadBettingMenu(){
		$('#canvas').hide();
		$('#container').show();
		racers = GenerateRacers(6,canvasWidth,canvasHeight);
		BettingScreen(racers,player);
	}
	
	//Add focus to the canvas game and start the race with current racers by running the logic loop
	function StartRace(){
		PlayRaceMusic("music");
		$('#container').hide();
		$('#canvas').show();
		then = Date.now();
		running = true;
		Main(); 
		
	}
	
		//Stop the Game Logic by changing the bool statement and load up the Beting screen 
	function StopGame(){
		running = false;
		LoadBettingMenu();
	}
	
	//The function that gets called every second which tells the racers to call the update function
	function UpdateGame()	{
			UpdateActors(racers);
	}
	
	// The main game loop - researched online
	function Main() {
		if(running == true){
			var now = Date.now();
			var delta = now - then;

			UpdateGame(delta / 1000); // The actual Logic
			RenderGame(context,racers); // The rendering of actors to the screen

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
	
	
	


