// Returns the final "background-color"
const calculatedBgColor = attributes => {
	// Get all of these variables
	const { bgColorEnabled, backgroundColor } = attributes;

	if (bgColorEnabled && backgroundColor != null) {
		return backgroundColor;
	} else {
		return false;
		// return "transparent";
	}
};

export default calculatedBgColor;
