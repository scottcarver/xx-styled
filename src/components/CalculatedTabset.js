// Returns the final "background-color"
// The tabset changes based on the bgStackFirst property
const CalculatedTabset = props => {
	const { bgColorEnabled, bgImageEnabled, bgGradientEnabled, bgGelEnabled, bgStackFirst } = props.attributes;
	
	const tabOrder = [];

	if (bgGelEnabled) {
		tabOrder.push({
			name: "bggeltab",
			title: "Gel",
			className: "tab-bggel"
		});
	}

	// Stack Order 1
	if (bgStackFirst == "gradient") {
		if (bgGradientEnabled) {
			tabOrder.push({
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			});
		}
		if (bgImageEnabled) {
			tabOrder.push({
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			});
		}

		// Stack Order 2
	} else {
		if (bgImageEnabled) {
			tabOrder.push({
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			});
		}
		if (bgGradientEnabled) {
			tabOrder.push({
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			});
		}
	}

	if (bgColorEnabled) {
		tabOrder.push({
			name: "bgcolortab",
			title: "Base",
			className: "tab-bgcolor1"
		});
	}

	//  console.log(tabOrder);
	return tabOrder;
};

export default CalculatedTabset;
