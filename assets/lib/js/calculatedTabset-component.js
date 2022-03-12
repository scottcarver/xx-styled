const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, ButtonGroup, RangeControl } = wp.components;

export default class calculatedTabset2 extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				blockID,
				styleEnabled,
				heightEnabled,
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				backgroundColorCount,
				foregroundColor,
				backgroundColor0,
				backgroundColor1,
				backgroundColor2,
				backgroundColor3,
				backgroundColor1Start,
				backgroundColor2Start,
				backgroundImage,
				backgroundStackFirst,
				backgroundGradientAttachment,
				gradientType,
				gradientLinearAngle,
				gradientAlignRadialHori,
				gradientAlignRadialVert,
				selectionFGColor,
				selectionBGColor,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont
			},
			setAttributes,
			clientID
		} = this.props;

		return <h2>Text</h2>;
	}
}

/*
// Returns the final "background-color"
const calculatedTabset = props => {
	const { bgColorEnabled, bgImageEnabled, bgGradientEnabled, bgGelEnabled, backgroundStackFirst } = props.attributes;
	console.log("before");
	console.log(bgColorEnabled);
	console.log("affer");
	const tabOrder = [];

	if (bgColorEnabled) {
		tabOrder.push({
			name: "bgcolortab",
			title: "Base",
			className: "tab-bgcolor1"
		});
	}
	if (bgGradientEnabled) {
		tabOrder.push({
			name: "bggradienttab",
			title: "Gradient",
			className: "tab-bggradient"
		});
	}

	console.log("stack order " + backgroundStackFirst);

	// Stack Order 1
	if (backgroundStackFirst == "gradient") {
		if (bgImageEnabled) {
			tabOrder.push({
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			});
		}
		if (bgGelEnabled) {
			tabOrder.push({
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			});
		}
		// Stack Order 2
	} else {
		if (bgGelEnabled) {
			tabOrder.push({
				name: "bggeltab",
				title: "Gel",
				className: "tab-bggel"
			});
		}
		if (bgImageEnabled) {
			tabOrder.push({
				name: "bgimagetab",
				title: "Image",
				className: "tab-bgimage"
			});
		}
	}
	console.log("borp");
	console.log(tabOrder);
	return tabOrder;
};

export default calculatedTabset;
*/
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
