// Returns the final "background-color"
const calculatedTabset = props => {
	const { bgColorEnabled, bgImageEnabled, bgGradientEnabled, bgGelEnabled, backgroundStackFirst } = props.attributes;
	console.log("before");
	console.log(bgColorEnabled);
	console.log("affer");
	const tabOrder = [];

	if (bgGelEnabled) {
		tabOrder.push({
			name: "bggeltab",
			title: "Gel",
			className: "tab-bggel"
		});
	}

	console.log("stack order " + backgroundStackFirst);

	// Stack Order 1
	if (backgroundStackFirst == "gradient") {
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

	console.log(tabOrder);
	return tabOrder;
};

export default calculatedTabset;

/*

		const fixedTabset = [
			{
				name: "bgcolortab",
				title: "Base",
				className: "tab-bgcolor1"
			},
			{
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			},
			{
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			},
			{
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			}
		];

		const fixedTabsetReversed = [
			{
				name: "bgcolortab",
				title: "Base",
				className: "tab-bgcolor1"
			},
			{
				name: "bggradienttab",
				title: "Gradient",
				className: "tab-bggradient"
			},
			{
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			},
			{
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			}
		];
		*/
