//This deals with the rendering of the Game Assets on the canvas
//Steven Kingston 26/06/2015


////
//This constantly Re-renders the gameUI background over it's self then re renders the actors  
function RenderGame(canvas,listOfActors)
{
		var raceBackgroundImageArray = GetRaceBackgroundImageArray();
		canvas.drawImage(raceBackgroundImageArray[0], 0, 0);
		
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
