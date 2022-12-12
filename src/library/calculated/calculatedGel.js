// Returns a computed value for gradient
const calculatedGel = attributes => {
	// Get all of these variables
	const { backgroundGel } = attributes;
	// Return a Linear Gradient
	return "linear-gradient(" + backgroundGel + ", " + backgroundGel + ")";
};

export default calculatedGel;
