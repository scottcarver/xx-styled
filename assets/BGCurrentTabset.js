/* BGImgControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, ButtonGroup, RangeControl } = wp.components;

/* Create a Block Controls wrapper Component */
export default class BGCurrentTabset extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			positionVert,
			attributes: { bgColorEnabled, bgImageEnabled, bgGradientEnabled, bgGelEnabled, backgroundStackFirst },
			setAttributes
		} = this.props;

		const crunchedTabs = function() {
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

		return crunchedTabs;
	}
}
