// GameController is the master file which has access to the other files in the game and calls their methods
// Steven Kingston 26/06/15
  
$(document).ready(function(){
	//Canvas stuff
	var canvas = $("#canvas")[0];
	var context = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	

	init();
	//Initialise the game
	function init()
	{
		paintBorder(context,width,height);
	}
	
	})