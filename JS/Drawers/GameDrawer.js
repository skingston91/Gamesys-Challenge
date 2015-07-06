//This deals with the rendering of the Game Assets on the canvas
//Steven Kingston 26/06/2015

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "Assets/Backgrounds/background.png";

//List of all our racers Images
var racerImageArray = [];
	
//Move these to own class
function createRacerImageArray()
{
	addImageToArray("ambulance_W.png",racerImageArray);
	addImageToArray("angry.gif",racerImageArray);
	addImageToArray("annoyed.gif",racerImageArray);
	addImageToArray("carBlack1_005.png",racerImageArray);
	addImageToArray("carBlack2_007.png",racerImageArray);
	addImageToArray("carBlack3_006.png",racerImageArray);
	addImageToArray("carBlack5_006.png",racerImageArray);
	addImageToArray("carBlack6_006.png",racerImageArray);
	addImageToArray("carGreen1_006.png",racerImageArray);
	addImageToArray("carGreen4_009.png",racerImageArray);
	addImageToArray("carRed2_006.png",racerImageArray);
	addImageToArray("carRed6_005.png",racerImageArray);
	addImageToArray("carSilver2_007.png",racerImageArray);
	addImageToArray("carSilver6_006.png",racerImageArray);
	addImageToArray("CBR.gif",racerImageArray);
	addImageToArray("confused.gif",racerImageArray);
	addImageToArray("cool.gif",racerImageArray);
	addImageToArray("cry.gif",racerImageArray);
	addImageToArray("cute.gif",racerImageArray);
	addImageToArray("disbelieve.gif",racerImageArray);
	addImageToArray("garbage_W.png",racerImageArray);
	addImageToArray("life.png",racerImageArray);
	addImageToArray("planeGreen2.png",racerImageArray);
	addImageToArray("police_W.png",racerImageArray);
	addImageToArray("taxi_W.png",racerImageArray);
}

//We take the string and then on the load we turn it into an image and store that in its array
function addImageToArray(imageName,array)
{
	var imageObj = new Image();
	imageObj.src = 'Assets/Sprites/' + imageName;
	imageObj.onload = function() {
		array.push(imageObj);
	};
	
}

function getRacerImageArray()
{
	return racerImageArray;
}

////
//This constantly Re-renders the gameUI background over it's self then re renders the actors  
function RenderGame(canvas,listOfActors)
{
		if (bgReady) {
			canvas.drawImage(bgImage, 0, 0);
		}
		
		for(i=0;i < listOfActors.length; i++){
			var racer = listOfActors[i];
				context.font = "12px Helvetica";
				context.fillText(racer.name,racer.x -40,racer.y - 5);
				if(racer.image instanceof HTMLImageElement) // Just incase its not an image element
				{
					canvas.drawImage(racer.image, racer.x, racer.y);
				}
				else
				{
					console.log(racer.image);
				}
				
				
		}
}
