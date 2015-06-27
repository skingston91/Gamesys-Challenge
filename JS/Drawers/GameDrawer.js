//This will deal with the rendering of the Game Assets on the canvas
//Steven Kingston 26/06/2015

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "Assets/Backgrounds/background.png";

// Racer image
var racerReady = false;
var racerImage = new Image();
racerImage.onload = function () {
	racerReady = true;
};
racerImage.src = "Assets/Sprites/carSilver6_006.png";

function RenderGame(canvas,listOfActors)
{
	if (bgReady) {
		canvas.drawImage(bgImage, 0, 0);
	}
	
	for(i=0;i < listOfActors.length; i++){
		if (racerReady) {
			var racer = listOfActors[i];
			//racer.Debug();
			canvas.drawImage(racerImage, racer.x, racer.y);
		}
	}
	
} 