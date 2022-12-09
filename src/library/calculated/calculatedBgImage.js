// We need to reuese this other function, calculatedGradient
import calculatedGradient from "./calculatedGradient";
import calculatedGel from "./calculatedGel";
import calculatedImg from "./calculatedImg";

// Returns the final "background-image", which is a combination of gradient and image
const calculatedBgImage = attributes => {
	// Get all of these variables
	const {
		bgImageEnabled,
		bgGradientEnabled,
		bgGelEnabled,
		backgroundImage,
		backgroundStackFirst
	} = attributes;

	// Store each layer in an array
	const bgLayers = [];
	// Capture output in a string
	let bgLayersString = "";

	// Push Base Color
	if (bgGelEnabled) {
		bgLayers.push(calculatedGel(attributes));
	}

	// Note: The user can swap layer order of Gradient and Image using the backgroundStackFirst variable

	// Gradient Stacks First!
	if (backgroundStackFirst == "gradient") {
		// Gradient
		if (bgGradientEnabled) {
			bgLayers.push(calculatedGradient(attributes));
		}
		// Image
		if (bgImageEnabled && backgroundImage) {
			bgLayers.push(calculatedImg(attributes));
		}
		// Image Stacks First!
	} else {
		// Image
		if (bgImageEnabled && backgroundImage) {
			bgLayers.push(calculatedImg(attributes));
		}
		// Gradient
		if (bgGradientEnabled) {
			bgLayers.push(calculatedGradient(attributes));
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
		// bgLayersString += "none";
		bgLayersString += "";
	}

	return bgLayersString;
};

export default calculatedBgImage;
