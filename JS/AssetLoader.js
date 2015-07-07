//List of all our Background Images for Menus
var menuBackgroundImageArray = [];

// Background image for the Menus
function CreateMenuBackgroundImageArray()
{
	var folder = 'Assets/Backgrounds/'
	addImageToArray(folder, "Background.png",menuBackgroundImageArray);
	console.log(menuBackgroundImageArray);
}

function GetMenuBackgroundImageArray()
{
	return menuBackgroundImageArray;
}	

//List of all our racers Images
var racerImageArray = [];
	
//Move these to own class
function CreateRacerImageArray()
{
	var folder = 'Assets/Sprites/';
	addImageToArray(folder, "ambulance_W.png",racerImageArray);
	addImageToArray(folder, "angry.gif",racerImageArray);
	addImageToArray(folder, "annoyed.gif",racerImageArray);
	addImageToArray(folder, "carBlack1_005.png",racerImageArray);
	addImageToArray(folder, "carBlack2_007.png",racerImageArray);
	addImageToArray(folder, "carBlack3_006.png",racerImageArray);
	addImageToArray(folder, "carBlack5_006.png",racerImageArray);
	addImageToArray(folder, "carBlack6_006.png",racerImageArray);
	addImageToArray(folder, "carGreen1_006.png",racerImageArray);
	addImageToArray(folder, "carGreen4_009.png",racerImageArray);
	addImageToArray(folder, "carRed2_006.png",racerImageArray);
	addImageToArray(folder, "carRed6_005.png",racerImageArray);
	addImageToArray(folder, "carSilver2_007.png",racerImageArray);
	addImageToArray(folder, "carSilver6_006.png",racerImageArray);
	addImageToArray(folder, "CBR.gif",racerImageArray);
	addImageToArray(folder, "confused.gif",racerImageArray);
	addImageToArray(folder, "cool.gif",racerImageArray);
	addImageToArray(folder,"cry.gif",racerImageArray);
	addImageToArray(folder,"cute.gif",racerImageArray);
	addImageToArray(folder,"disbelieve.gif",racerImageArray);
	addImageToArray(folder,"garbage_W.png",racerImageArray);
	addImageToArray(folder,"life.png",racerImageArray);
	addImageToArray(folder,"planeGreen2.png",racerImageArray);
	addImageToArray(folder,"police_W.png",racerImageArray);
	addImageToArray(folder,"taxi_W.png",racerImageArray);
}
function GetRacerImageArray()
{
	return racerImageArray;
}

//List of all our Background Images for Races
var raceBackgroundImageArray = [];

// Background image for the races
function CreateRaceBackgroundImageArray()
{
	var folder = 'Assets/Backgrounds/'
	addImageToArray(folder, "Background.png",raceBackgroundImageArray);
}
function GetRaceBackgroundImageArray()
{
	return raceBackgroundImageArray;
}