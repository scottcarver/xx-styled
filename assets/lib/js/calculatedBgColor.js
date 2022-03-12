// Returns the final "background-color"
const calculatedBgColor = attributes => {
	// Get all of these variables
	const { bgColorEnabled, backgroundColor0 } = attributes;

	if (bgColorEnabled && backgroundColor0 != null) {
		return backgroundColor0;
	} else {
		return "transparent";
	}
};

export default calculatedBgColor;
