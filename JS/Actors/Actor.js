//Will refactor to not just use this  

function Actor (x, y) {
  this.x = x; //The x coordinate of the actor in the current scene.
	this.y = y; //The y coordinate of the actor in the current scene.
	this.width = 0; //The actors width, used for collision detection and rendering if no render method is used.
	this.height = 0; //The actors height, used for collision detection and rendering if no render method is used.

	this.color = '#000000'; //The color drawn if no other rendering method is used

	this.name = ''; // Defined later using a name generator
	this.stats = []; //Array Used to store the actors stats when created 
	this.speed = 0;// This is the speed of the actor
	this.odds = ''; // String for the user to see the odds of this racers
	this.renderMethod = undefined; //If set then used to pick how we render an object.

	
}

//Update the actors position using the prototype of the constructor
Actor.prototype.Update = function() {
	 this.x += this.speed;
}


Actor.prototype.Debug = function() {
	 console.log(this.name +" x: " + this.x + " speed:" + this.speed ) ;
}

Actor.prototype.DebugAll = function() {
	 console.log(this.name +" x: " + this.x + " speed:" + this.speed ) ;
}