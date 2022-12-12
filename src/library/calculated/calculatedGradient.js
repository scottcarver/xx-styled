// Returns a computed value for gradient
const calculatedGradient = attributes => {
	// Get all of these variables
	const {
		bgGrad1,
		bgGrad2,
		bgGrad1Start,
		bgGrad2Start,
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
			bgGrad1 +
			" " +
			bgGrad1Start +
			"%, " +
			bgGrad2 +
			" " +
			bgGrad2Start +
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
			bgGrad1 +
			" " +
			bgGrad1Start +
			"%, " +
			bgGrad2 +
			" " +
			bgGrad2Start +
			"%)";
		return gradient;
	}
};

export default calculatedGradient;
