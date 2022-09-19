/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

// Node modules
import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import "./styled-preview.scss";
import "./styled-tile.scss";

const {
	TabPanel,
	Button,
	ButtonGroup,
	RangeControl,
	IconButton,
	Placeholder,
	ColorIndicator,
	ColorPicker
} = wp.components;

// My helper code
import BGImgControl from "./../BGImgControl";
import BGGradControl from "./../BGGradControl";
// import BGCurrentTabset from "./BGCurrentTabset"; // Component

import calculatedTabset from "./../lib/js/calculatedTabset"; // Function Component
import ColorObgtoRgbaString from "./../lib/js/ColorObgtoRgbaString";


import calculatedBgImage from "./../lib/js/calculatedBgImage";
import calculatedGradient from "./../lib/js/calculatedGradient";
// import calculatedBgColor from "./../lib/js/calculatedBgColor";
// import calculatedBGIMGSize from "./../lib/js/calculatedBGIMGSize";
// import calculatedBgPos from "./../lib/js/calculatedBgPos";
// import calculatedBGIMGAtt from "./../lib/js/calculatedBGIMGAtt";
// import calculatedBGIMGRepeat from "./../lib/js/calculatedBGIMGRepeat";

// const bgColorStack = calculatedBgColor(this.props.attributes);
// const bgSize = calculatedBGIMGSize(this.props.attributes, 'sm'); // sm, md, lg
// const bgPosition = calculatedBgPos(this.props.attributes);
// const bgAttachment = calculatedBGIMGAtt(this.props.attributes);
// const bgRepeat = calculatedBGIMGRepeat(this.props.attributes);

/* Create a Block Controls wrapper Component */
export default class StyledPreview extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() { }
	render() {
		const {
			positionVert,
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
				headlineColor,
				linkColor,
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
			setAttributes
		} = this.props;

		const bgImageStack = calculatedBgImage(this.props.attributes);
		var combinedCss = ` 
			.fgtext{
				color: ${foregroundColor};
				font-family: ${foregroundCopyFont}
			}
			.fgtext h1{
				color: ${headlineColor};
				font-family: ${foregroundHeadlineFont}
			}
			.fgtext p{
				color: ${foregroundColor};
				
			}
			.fgtext a{
				color: ${linkColor};
			}
			.fgcolor{
				background: ${backgroundColor3};
				// outline: solid 1px red;
			}
			.bgimage{
				background-image: url(${backgroundImage});
			}
			.gradient{
				background: ${calculatedGradient(this.props.attributes)};
			}
			.base{
				background: ${backgroundColor0};
			}
		`;
		var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");
		// Remove extraneous spaces
		compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();
		
        return (
            <Fragment>
				<div className="px-sidepanel">
					<div className="px-simplerow px-simplerow--padleft px-simplerow--padtop px-simplerow--padbottom">
						<strong>Preview:</strong>
					</div>
				</div>
				<div className="px-sidepanel">
					<div className="px-simplerow px-simplerow--padbottom">
						{/* Styled Preview */}
						<div className={`styled-preview ${backgroundStackFirst=="gradient" ? "styled-preview--gradientfirst" : ""}`} data-viewtype="stack">
							<div className="cube">
								<div className="layer layer-1 fgtext textual">
									<h1>Foreground Text</h1>
									<p>Lorem Ipsum Preview <a href="#">Stuffs</a> halibut</p>
								</div>
								<div className={`layer layer-2 ${bgGelEnabled ? "fgcolor" : ""}`}></div>
								<div className={`layer layer-3 ${bgImageEnabled ? "bgimage" : ""}`}></div>
								<div className={`layer layer-4 ${bgGradientEnabled ? "gradient" : ""}`}></div>
								<div className={`layer layer-5 ${bgColorEnabled ? "base" : ""}`}></div>
							</div>
						</div>

						<style type="text/css" dangerouslySetInnerHTML={{ __html: compressedCSS }} />
					</div>
				</div>
              
            </Fragment>
        );
    
	}
}
