// Returns a computed value for background-size
const calculatedBGIMGSize = attributes => {
	const {
		bgGelEnabled,
		backgroundStackFirst,
		bgImageEnabled,
		backgroundImage,
		backgroundImageSize,
		backgroundImageSizeCustom,
		bgGradientEnabled
	} = attributes;

	// Store each layer in an array
	const bgLayers = [];
	// Capture output in a string
	let bgLayersString = "";

	// if background enabled
	if (bgGelEnabled) {
		bgLayers.push("cover");
	}

	// Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
	// Gradient Stacks First
	if (backgroundStackFirst == "gradient") {
		if (bgGradientEnabled) {
			bgLayers.push("cover");
		}
		if (bgImageEnabled && backgroundImage) {
			backgroundImageSize == "custom"
				? bgLayers.push(backgroundImageSizeCustom + "%")
				: bgLayers.push(backgroundImageSize);
		}
		// Image stacks first
	} else {
		if (bgImageEnabled && backgroundImage) {
			backgroundImageSize == "custom"
				? bgLayers.push(backgroundImageSizeCustom + "%")
				: bgLayers.push(backgroundImageSize);
		}
		if (bgGradientEnabled) {
			bgLayers.push("cover");
		}
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

	return bgLayersString;
};
export default calculatedBGIMGSize;
