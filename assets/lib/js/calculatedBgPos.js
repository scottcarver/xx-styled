// Returns the final "background-position"
const calculatedBgPos = attributes => {
	// Get all of these variables
	const {
		backgroundImageAlignHori,
		backgroundImageAlignVert,
		backgroundImageAlignVertCustom,
		backgroundImageAlignHoriCustom
	} = attributes;
	let hSelect, vSelect;
	// Horizontal
	if (backgroundImageAlignHori == "custom") {
		hSelect = backgroundImageAlignHoriCustom + "%";
	} else {
		hSelect = backgroundImageAlignHori;
	}

	// Vertical
	if (backgroundImageAlignVert == "custom") {
		vSelect = backgroundImageAlignVertCustom + "%";
	} else {
		vSelect = backgroundImageAlignVert;
	}
	//  ${backgroundImageAlignHori} ${backgroundImageAlignVert};
	const composed = hSelect + " " + vSelect;
	console.log(composed);
	return composed;
};

export default calculatedBgPos;
