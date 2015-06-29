// Script for dealing with sound and music features such as playing looping music in the background
// Steven Kingston 28/06/2015

// Function to play music 
function PlayRaceMusic(music){
	var sound = soundManager.getSoundById(music);
	sound.play({
		volume: 5,
  });
}

//Plays looping menu music
function PlayTitleMusic(music)
{
	var sound = soundManager.getSoundById(music);
	sound.play({
		volume: 5,
     onfinish: function() {
       loopSound(sound);
     }
  });
}

//Mute all current sounds
function MuteCurrentSound(){
	setTimeout(soundManager.mute, 1000);
}

function UnmuteCurrentSound(){
	setTimeout(soundManager.unmute, 500);
}

//Mute one specific sound
function MuteOneSound(sound){
  setTimeout(sound.mute, 250);
}

//Stop a specific sound from playing
function StopSound(sound){
	var sound = soundManager.getSoundById(sound);
	sound.stop();
}