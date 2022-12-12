// Returns the final "background-position"
const calculatedBgPos = attributes => {
	// Get all of these variables
	const {
		focalPoint,
	} = attributes;

	var combined = (focalPoint.x * 100) + "% " + (focalPoint.y * 100) + "%";
	return combined;

};

export default calculatedBgPos;
