// Returns a computed value for gradient
const calculatedGradient = attributes => {
	// Get all of these variables
	const {
		backgroundColor1,
		backgroundColor2,
		backgroundColor1Start,
		backgroundColor2Start,
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
			backgroundColor1 +
			" " +
			backgroundColor1Start +
			"%, " +
			backgroundColor2 +
			" " +
			backgroundColor2Start +
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
			backgroundColor1 +
			" " +
			backgroundColor1Start +
			"%, " +
			backgroundColor2 +
			" " +
			backgroundColor2Start +
			"%)";
		return gradient;
	}
};

export default calculatedGradient;
