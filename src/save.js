import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
// Node modules
import classnames from "classnames";
import { Fragment } from '@wordpress/element';
import { InnerBlocks  } from '@wordpress/block-editor';
import OnPageStyle from "../assets/OnPageStyle";


export default function save(props) {
	// const props = useBlockProps.save();

	console.log("save props!", props);
	
	const {
		attributes: {
			blockID,
			heightEnabled,
			styleEnabled,
			foregroundColor,
			backgroundColor0,
			headlineColor,
			linkColor,
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

	const styleObj = { 
		'--foregroundColor': foregroundColor, 
		'--backgroundColor0': backgroundColor0,
		'--headlineColor': headlineColor,
        '--linkColor': linkColor
	};

	// Return the shtuff
	/*
	const blockPropsSavedOb = {
		className: 'xx-styled',
		attributes: {
			styleEnabled,
			foregroundColor,
			backgroundColor0,
			headlineColor,
			linkColor,
			namedStyle
		},
		style: styleEnabled ? styleObj : {},
	}
	*/
	

	return (
		// <div {...useBlockProps.save(blockPropsSavedOb)} data-theme={styleEnabled ? "none" : undoHex(namedStyle) }>
		<div id={blockID} className={classes} style={styleObj}>
			{styleEnabled && <OnPageStyle {...{ setAttributes, ...props, blockID }} /> }
			<InnerBlocks.Content />
		</div>
	);
}
