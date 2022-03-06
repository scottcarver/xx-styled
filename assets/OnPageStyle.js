/* Internal block libraries */
const { __ } = wp.i18n;
import { FormToggle } from '@wordpress/components';
import { Component, Fragment } from '@wordpress/element';

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
  
export default class OnPageStyle extends Component {
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
		const bgSize = calculatedBGIMGSize(this.props.attributes);
		const bgPosition = calculatedBgPos(this.props.attributes);
		const bgAttachment = calculatedBGIMGAtt(this.props.attributes);
		const bgRepeat = calculatedBGIMGRepeat(this.props.attributes);
		// body[data-color='custom'] 
		// body[data-color='custom'] 
		var combinedCss = ` 
			.wp-block-section--${blockID} { 
				background-image: ${bgImageStack};
				background-color: ${bgColorStack};
				color: ${foregroundColor};
				background-size: ${bgSize};
				background-position: ${bgPosition};
				background-attachment: ${bgAttachment};
				background-repeat: ${bgRepeat};
				padding: ${spacingMobile.top} ${spacingMobile.right} ${spacingMobile.bottom} ${spacingMobile.left};
			}
			

			.wp-block-section--${blockID} *::selection {
				color: ${selectionFGColor};
				background-color: ${selectionBGColor};
			}

			.wp-block-section--${blockID} h1, .wp-block-section--${blockID} h2, .wp-block-section--${blockID} h3,
			.wp-block-section--${blockID} h4, .wp-block-section--${blockID} h5, .wp-block-section--${blockID} h6{
				color: ${headlineColor};
			}

			.wp-block-section--${blockID} a{
				color: ${linkColor};
			}

			.wp-block-section--${blockID} p.has-drop-cap:first-child:first-letter{color: ${dropcapColor};}

			p.has-drop-cap:not(:focus)::first-letter{color: ${dropcapColor};}

			@media(min-width: 992px){
				.wp-block-section--${blockID}{ 
					padding: ${spacingTablet.top} ${spacingTablet.right} ${spacingTablet.bottom} ${spacingTablet.left};
				}
			}
			@media(min-width:1200px){
				.wp-block-section--${blockID}{ 
					padding: ${spacingDesktop.top} ${spacingDesktop.right} ${spacingDesktop.bottom} ${spacingDesktop.left};
				}
			}			
			/* For Admin */
			.wp-block-section--${blockID} .badoop{
				padding: ${spacingMobile.top} ${spacingMobile.right} ${spacingMobile.bottom} ${spacingMobile.left};
			}
			@media(min-width: 992px){
				.wp-block-section--${blockID} .badoop{ 
					padding: ${spacingTablet.top} ${spacingTablet.right} ${spacingTablet.bottom} ${spacingTablet.left};
				}
				.wp-block-section--${blockID} .subbadoop{
					border-color:pink;
				}
			}
			@media(min-width:1200px){
				.wp-block-section--${blockID} .badoop{ 
					padding: ${spacingDesktop.top} ${spacingDesktop.right} ${spacingDesktop.bottom} ${spacingDesktop.left};
				}
				.wp-block-section--${blockID} .subbadoop{
					border-color:yellow;
				}
			}	
		
			
		`;
		
		// Remove Newlines, Tabs are spaces
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();

		return (
				<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
	
		);
	}
}