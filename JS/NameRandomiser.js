// This will generate from an array of names stored in the JS (ideally this should be a separate file loaded in (taken these funny names from a stack overflow)
// Steven Kingston 27/06/2015

var firstNameArray = ["Runny", "Buttercup", "Dinky", "Stinky", "Crusty",
"Greasy","Gidget", "Cheesypoof", "Lumpy", "Wacky", "Tiny", "Flunky",
"Fluffy", "Zippy", "Doofus", "Gobsmacked", "Slimy", "Grimy", "Salamander",
"Oily", "Burrito", "Bumpy", "Loopy", "Snotty", "Irving", "Egbert"];

var middleNameArray =["Waffer", "Lilly","Rugrat","Sand", "Fuzzy","Kitty",
 "Puppy", "Snuggles","Rubber", "Stinky", "Lulu", "Lala", "Sparkle", "Glitter",
 "Silver", "Golden", "Rainbow", "Cloud", "Rain", "Stormy", "Wink", "Sugar",
 "Twinkle", "Star", "Halo", "Angel"];

var lastNameArray = ["Snicker", "Buffalo", "Gross", "Bubble", "Sheep",
 "Corset", "Toilet", "Lizard", "Waffle", "Kumquat", "Burger", "Chimp", "Liver",
 "Gorilla", "Rhino", "Emu", "Pizza", "Toad", "Gerbil", "Pickle", "Tofu", 
"Chicken", "Potato", "Hamster", "Lemur", "Vermin",
"face", "dip", "nose", "brain", "head", "breath", 
"pants", "shorts", "lips", "mouth", "muffin", "butt", "bottom", "elbow", 
"honker", "toes", "buns", "kisser", "squirt", "chunks", 
"brains", "wit", "juice", "shower"];

//Creates a random name using 3 arrays
function findName(){
		var firstName = randomNamePart(firstNameArray);
		var middleName = randomNamePart(middleNameArray);
		var lastName = randomNamePart(lastNameArray);
		
		return firstName + " " + middleName + " " + lastName; 
		
	}
	
//Give it a array and the length then return with a random 
function randomNamePart(array){
		var randomNumber = CalculateRandomElement(array.length-1);
		return array[randomNumber];
	}
