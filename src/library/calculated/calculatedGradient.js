// Returns a computed value for gradient
const calculatedGradient = attributes => {
	// Get all of these variables
	const {
		backgroundGrad1,
		backgroundGrad2,
		backgroundGrad1Start,
		backgroundGrad2Start,
		gradientType,
		gradientLinearAngle,
		gradientAlignRadialHori,
		gradientAlignRadialVert
	} = attributes;
	// Return a Linear Gradient
	if (gradientType == "linear") {
		return (
			"linear-gradient(" +
			gradientLinearAngle +
			"deg, " +
			backgroundGrad1 +
			" " +
			backgroundGrad1Start +
			"%, " +
			backgroundGrad2 +
			" " +
			backgroundGrad2Start +
			"%)"
		);
	}
	// Return a Radial Gradient
	if (gradientType == "radial") {
		var gradient =
			"radial-gradient(circle at " +
			gradientAlignRadialHori +
			"% " +
			gradientAlignRadialVert +
			"%, " +
			backgroundGrad1 +
			" " +
			backgroundGrad1Start +
			"%, " +
			backgroundGrad2 +
			" " +
			backgroundGrad2Start +
			"%)";
		return gradient;
	}
};

export default calculatedGradient;
