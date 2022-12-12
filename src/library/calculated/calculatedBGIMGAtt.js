// Returns a computed value for background-size
const calculatedBGIMGAtt = attributes => {
	const {
		bgGelEnabled,
		bgImageEnabled,
		bgImageAttachment,
		backgroundImage,
		bgGradientEnabled,
		bgGradientAttachment,
		backgroundStackFirst
	} = attributes;

	// Store each layer in an array
	const bgLayers = [];
	// Capture output in a string
	let bgLayersString = "";

	// if background enabled
	if (bgGelEnabled) {
		bgLayers.push("scroll");
	}

	// Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable
	// Gradient Stacks First
	if (backgroundStackFirst == "gradient") {
		// Gradient
		if (bgGradientEnabled) {
			bgLayers.push(bgGradientAttachment);
		}
		// Image
		if (bgImageEnabled && backgroundImage) {
			bgLayers.push(bgImageAttachment);
		}
		// Image stacks first
	} else {
		// Image
		if (bgImageEnabled && backgroundImage) {
			bgLayers.push(bgImageAttachment);
		}
		// Gradient
		if (bgGradientEnabled) {
			bgLayers.push(bgGradientAttachment);
		}
	}

	// Concatenate a style string, Adding commas, but not on the last
	for (var i = 0; i < bgLayers.length; i++) {
		bgLayersString += bgLayers[i];
		if (i < bgLayers.length - 1) {
			bgLayersString += ", ";
		}
	}

	// When no styles are available, return 'none'
	if (bgLayers.length == 0) {
		bgLayersString += "scroll";
	}

	return bgLayersString;
};
export default calculatedBGIMGAtt;
