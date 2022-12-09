// Returns a computed value for gradient
const calculatedImg = attributes => {
	// Get all of these variables
	const { backgroundImage } = attributes;
	// Return a Linear Gradient
	return "url(" + backgroundImage + ")";
};

export default calculatedImg;
