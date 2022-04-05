// Returns a computed value for background-size
const calculatedBGIMGSize = (attributes, key) => {

	console.log("key is", key);


	const {
		bgGelEnabled,
		backgroundStackFirst,
		bgImageEnabled,
		backgroundImage,
		backgroundImageSize,
		backgroundImageSizeCustomSm,
		backgroundImageSizeCustomMd,
		backgroundImageSizeCustom,
		bgGradientEnabled
	} = attributes;

	let activeData = backgroundImageSizeCustom;
	if(key == 'sm'){ activeData = backgroundImageSizeCustomSm;}
	if(key == 'md'){ activeData = backgroundImageSizeCustomMd;}


	// Store each layer in an array
	const bgLayers = [];
	// Capture output in a string
	
	let bgLayersString = "";

	// if background enabled
	if (bgGelEnabled) {
		bgLayers.push("cover");
	}

	console.log('backgroundImageSizeCustom', activeData);

	// Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
	// Gradient Stacks First
	if (backgroundStackFirst == "gradient") {
		if (bgGradientEnabled) { bgLayers.push("cover"); }
		if (bgImageEnabled && backgroundImage) {
			backgroundImageSize == "custom" ? bgLayers.push(activeData) : bgLayers.push(backgroundImageSize);
		}
		// Image stacks first
	} else {
		if (bgImageEnabled && backgroundImage) {
			backgroundImageSize == "custom" ? bgLayers.push(activeData) : bgLayers.push(backgroundImageSize);
		}
		if (bgGradientEnabled) { bgLayers.push("cover"); }
	}

	// Concatenate a style string
	for (var i = 0; i < bgLayers.length; i++) {
		bgLayersString += bgLayers[i];
		// Adding commas, but not on the last
		if (i < bgLayers.length - 1) {
			bgLayersString += ", ";
		}
	}

	// When no styles are available, return 'none'
	if (bgLayers.length == 0) {
		bgLayersString += "auto";
	}


	let bgLayerObject =  {
		'sm' : bgLayersString,
		'md' : bgLayersString,
		'lg' : bgLayersString,
	}
	

	// return bgLayerObject;
	return bgLayersString;
};
export default calculatedBGIMGSize;
