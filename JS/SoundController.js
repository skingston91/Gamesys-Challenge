// Script for dealing with sound and music features such as playing looping music in the background
// Steven Kingston 28/06/2015

function PlayRaceMusic(music)
{
	var sound = soundManager.getSoundById(music);
	sound.play({
		volume: 5,
  });
}

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

//Untested features
function MuteCurrentSound()
{
	setTimeout(soundManager.mute, 1000);
}

function UnmuteCurrentSound()
{
	setTimeout(soundManager.unmute, 500);
}

function MuteOneSound(sound)
{
  setTimeout(sound.mute, 250);
}

function StopSound(sound)
{
	var sound = soundManager.getSoundById(music);
	sound.stop();
}