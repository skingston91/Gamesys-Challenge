// These will be the methods for calling the sound played in the games
// Steven Kingston 28/06/2015

//Sets up sound using an Id - taken from their guide
function SetupSound()
{
	soundManager.setup({
  url: '/JS/ExternalFiles/soundmanager2-jsmin.js',
  onready: function() {
   soundManager.createSound({
      id: 'clap',
      url: '../GamesysChallenge/Assets/Sounds/clap.wav'
    });
		
   soundManager.createSound({
	 id: 'music',
	 url: '../GamesysChallenge/Assets/Sounds/BoxCat_Games_-_10_-_Epic_Song.mp3'
	}); 
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});
}

function TestSound()
{
	
	soundManager.createSound({
	 id: 'mySound2',
	 url: '../Assets/Sounds/clap.wav'
	});
	soundManager.play('mySound2');

}

//Basic HTMTL play sound
function PlayTestSound()
{
	var snd = new Audio("../GamesysChallenge/Assets/Sounds/clap.wav"); // buffers automatically when created
	snd.play();

}