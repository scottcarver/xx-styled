// Returns a computed value for gradient
const calculatedGel = attributes => {
	// Get all of these variables
	const { backgroundColor3 } = attributes;
	// Return a Linear Gradient
	return "linear-gradient(" + backgroundColor3 + ", " + backgroundColor3 + ")";
};

export default calculatedGel;
