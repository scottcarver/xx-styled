// Returns a computed value for gradient
const calculatedPadding = spacingObject => {
    // Return Shorthand if all values match!
    if((spacingObject.top == spacingObject.right) && (spacingObject.top == spacingObject.left) && (spacingObject.top == spacingObject.bottom)){
        return `${spacingObject.top}`;
    }
	// Return 4 point set
    return `${spacingObject.top} ${spacingObject.right} ${spacingObject.bottom} ${spacingObject.left}`;
};

export default calculatedPadding;
