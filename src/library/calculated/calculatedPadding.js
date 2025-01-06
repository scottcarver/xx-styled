// Returns a computed value for gradient
const calculatedPadding = spacingObject => {

    // Return Shorthand if all values match!
    if((spacingObject.top == spacingObject.right) && (spacingObject.top == spacingObject.left) && (spacingObject.top == spacingObject.bottom)){
        return `${spacingObject.top ? spacingObject.top : ''}`;
    }
	// Return 4 point set
    return `${spacingObject.top ? spacingObject.top : '0px'} ${spacingObject.right ? spacingObject.right : '0px'} ${spacingObject.bottom ? spacingObject.bottom : '0px'} ${spacingObject.left ? spacingObject.left : '0px'}`;
};

export default calculatedPadding;
