/* Internal block libraries */
const { __ } = wp.i18n;
import { FormToggle } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

// Custom Fucntions
import calculatedBgImage from "./lib/js/calculatedBgImage";
import calculatedBgColor from "./lib/js/calculatedBgColor";
import calculatedBGIMGSize from "./lib/js/calculatedBGIMGSize";
import calculatedBgPos from "./lib/js/calculatedBgPos";
import calculatedBGIMGAtt from "./lib/js/calculatedBGIMGAtt";
import calculatedBGIMGRepeat from "./lib/js/calculatedBGIMGRepeat";

/* Create a Block Controls wrapper Component */
/**
 * Class
 */

function replaceAll(string, search, replace) {
	return string.split(search).join(replace);
}
  
export default class InlineStyleVars extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				styleEnabled,
				babygradient,
				dropcapColor,
				bgColorEnabled,
				blockID,
				bgImage,
				headlineColor,
				foregroundColor,
				linkColor,
				backgroundColor3,
				selectionFGColor,
				selectionBGColor,
				spacingMobile,
				spacingTablet,
				spacingDesktop
			},
			setAttributes
		} = this.props;

		const toggleStyleEnabled = () => setAttributes({ styleEnabled: !styleEnabled });

		// boop
		const bgImageStack = calculatedBgImage(this.props.attributes);
		const bgColorStack = calculatedBgColor(this.props.attributes);
		const bgSize = calculatedBGIMGSize(this.props.attributes, 'lg');
		const bgPosition = calculatedBgPos(this.props.attributes);
		const bgAttachment = calculatedBGIMGAtt(this.props.attributes);
		const bgRepeat = calculatedBGIMGRepeat(this.props.attributes);


		// body[data-color='custom'] 
		// body[data-color='custom'] 
        const styleObj = { 
            '--backgroundImage': bgImageStack,
            '--foregroundColor': foregroundColor, 
            '--backgroundColor': backgroundColor,
            '--headlineColor': headlineColor,
            '--linkColor': linkColor
        };

        // console.log('meep' );
		return styleObj
	}
}
