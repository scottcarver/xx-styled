// Node modules
import classnames from "classnames";

//  Import Local Data
import "./lib/scss/style.scss";
import "./lib/scss/editor.scss";
import attributes from "./attributes";
import StyleControls from "./StyleControls";
// import RowHeader from "./rowHeader";
import OnPageStyle from "./OnPageStyle";

// These are used by Edit and Save
import calculatedBGIMGSize from "./lib/js/calculatedBGIMGSize";
import calculatedBGIMGRepeat from "./lib/js/calculatedBGIMGRepeat";
// import calculatedBgImage from "./lib/js/calculatedBgImage";
// import calculatedBgColor from "./lib/js/calculatedBgColor";
import calculatedBgPos from "./lib/js/calculatedBgPos";
import calculatedBGIMGAtt from "./lib/js/calculatedBGIMGAtt";

// Import Global Javascript
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

const { InnerBlocks, InspectorControls } = wp.blockEditor;

const {
	Dashicon,
	Toolbar,
	Button,
	Tooltip,
	PanelBody, // this is new in this demo
	PanelRow, // this is new in this demo
	PanelColor,
	FormToggle // this is new in this demo
} = wp.components;

registerBlockType("px/section", {
	title: __("Section, Deluxe"),
	icon: "welcome-view-site",
	category: "layout",
	keywords: [__("Section"), __("Agency"), __("pxblocks")],

	// Attributes
	attributes,

	/*********** WRAPPER PROPS ************/
	getEditWrapperProps(attributes) {
		const { blockAlignment } = attributes;
		// return { 'data-align': 'full' };

		// console.log('from this body', attributes);
		
	},



	getSelectedBlockClientId(attributes) {
		const { blockID } = attributes;
	},

	/*************** EDIT ***************/
	edit: props => {
		const {
			attributes: {
				blockID,
				styleEnabled,
				heightEnabled,
				foregroundColor,
				blockAlignment,
				highContrast,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont
			},
			className,
			clientId
		} = props;
		const { setAttributes } = props;
		if (blockID == "") {
			setAttributes({ blockID: clientId });
		}

		const classes = classnames(
			className,
			"wp-block--section",
			`wp-block-section--${blockID}`,
			{ "wp-block--heightenabled": heightEnabled },
			`wp-block--headline-${foregroundHeadlineFont}`,
			`wp-block--copy-${foregroundCopyFont}`,
			`wp-block--caption-${foregroundCaptionFont}`
		);

		const enabledBlocks =  [ 'core/image', 'core/paragraph' ];

		if (styleEnabled) {
			return (
				<Fragment>
					<div className={classes}>
						<InspectorControls>
							<StyleControls {...{ setAttributes, ...props }} />
						</InspectorControls>
						<OnPageStyle {...{ setAttributes, ...props }} />
						<InnerBlocks allowedBlocks={ enabledBlocks } />
					</div>
				</Fragment>
			);
		} else {
			return (
				<div id={blockID} className={classes}>
					<Fragment>
						<InspectorControls>
							<StyleControls {...{ setAttributes, ...props }} />
						</InspectorControls>
						<InnerBlocks allowedBlocks={ enabledBlocks } />
					</Fragment>
				</div>
			);
		}
	},

	/*************** SAVE ***************/
	save: props => {
		const {
			attributes: {
				blockID,
				heightEnabled,
				blockAlignment,
				highContrast,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont
			},
			setAttributes,
			clientId
		} = props;

		// "message-body",
		// { "high-contrast": highContrast },
		// `align${blockAlignment}`,

		const classes = classnames(
			"wp-block--section",
			`wp-block-section--${blockID}`,
			{ "wp-block--heightenabled": heightEnabled },
			`wp-block--headline-${foregroundHeadlineFont}`,
			`wp-block--copy-${foregroundCopyFont}`,
			`wp-block--caption-${foregroundCaptionFont}`
		);

		return (
			<Fragment>
				<div className={classes}>
					<OnPageStyle {...{ setAttributes, ...props, blockID }} />
					<InnerBlocks.Content />
				</div>
			</Fragment>
		);
	},
	supports: {
		anchor: true,
		customClassName: false
	}
});
