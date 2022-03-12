// Returns a computed value for gradient
const calculatedPadding = spacingObject => {
	// Return a Linear Gradient
    return `${spacingObject.top} ${spacingObject.right} ${spacingObject.bottom} ${spacingObject.left}`;
};

export default calculatedPadding;
