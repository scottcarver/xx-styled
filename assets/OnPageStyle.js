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
				blockquoteColor,
				backgroundColor0,
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
		const bgSize = calculatedBGIMGSize(this.props.attributes, 'sm'); // sm, md, lg
		const bgPosition = calculatedBgPos(this.props.attributes);
		const bgAttachment = calculatedBGIMGAtt(this.props.attributes);
		const bgRepeat = calculatedBGIMGRepeat(this.props.attributes);


		// body[data-color='custom'] 
		// body[data-color='custom'] 
        const styleObj = { 
            '--backgroundImage': bgImageStack,
			'--backgroundColor': bgColorStack,
			'--backgroundSizeSm': bgSize['sm'],
			'--backgroundSizeMd': bgSize['md'],
			'--backgroundSize': bgSize['lg'],
			'--backgroundPosition': bgPosition,
			'--backgroundAttachment': bgAttachment,
			'--backgroundRepeat': bgRepeat,
            '--foregroundColor': foregroundColor, 
            '--headlineColor': headlineColor,
            '--linkColor': linkColor,
			'--selectionColor': linkColor,
			'--selectionBGColor': linkColor,
        };


		const styleInline = `
			--backgroundImage: ${bgImageStack};
		`;

		// body[data-color='custom'] 
		// body[data-color='custom'] 
		var combinedCss = ` 
			.wp-block-section--${blockID} { 
				background-image: ${bgImageStack};
				background-color: ${bgColorStack};
				color: ${foregroundColor};
				background-size: ${bgSize.lg};
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

			blockquote{
				color:${blockquoteColor};
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
		`;
		
		// Remove Newlines, Tabs are spaces
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();


		/*
		const stringRendered = <div style={styleObj}></div>;
		const words = stringRendered.split('"');
		console.log(words);	*/

		// Vars
		if(this.props.mode == "vars"){
			return( styleObj )
		}
	

		return (
			<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
		);
	}
}
