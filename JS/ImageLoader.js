// This is the code used to load images into the Game 
// Steven Kingston 07/07/2015

//We take the string and then on the load we turn it into an image and store that in its array
function addImageToArray(location,imageName,array)
{
	var imageObj = new Image();
	imageObj.src = location + imageName;
	imageObj.onload = function() {
		array.push(imageObj);
	};
}

//Untested
//Return Loaded Image
function loadImage(location,imageName)
{
	var imageObj = new Image();
	imageObj.src = location + imageName;
	imageObj.onload = function() {
		return imageObj;
	};
}