/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

// Node modules
import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import "./styled-preview.scss";

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

        return (
            <Fragment>
				<div className="px-sidepanel">
				<div className="px-simplerow px-simplerow--padleft px-simplerow--padbottom"><strong>Preview:</strong></div>
				</div>
                <div className="styled-preview" data-viewtype="stack">
                    <div className="cube">
                        <div className="layer layer-1 fgtext textual">
							<h1>Foreground Text</h1>
							<p>Lorem Ipsum Preview <a href="#">Stuffs</a> halibut <button>Yoink!</button></p>
                        </div>
                        <div className="layer layer-2 fgcolor" style={{"color":"red"}}></div>
                        <div className="layer layer-3 bgimage"></div>
                        <div className="layer layer-4 bgcolor"></div>
						<div className="layer layer-5 bgcolor2"></div>
                    </div>
                </div>
            </Fragment>
        );
    
	}
}
