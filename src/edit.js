// Node modules
import classnames from "classnames";

// WordPress modules
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {Fragment } from '@wordpress/element';

// Custom modules
import './editor.scss';
import StyleControls from "./components/StyleControls";
import AdminStyle from "./components/AdminStyle";
import calculated from "../src/library/calculated/calculated";

// Export Edit Function
export default function edit(props) {

	// Destructure props
	const {
		attributes: { 
			styleMode, 
			namedStyle,
			fgHeadlineFont,
			fgCopyFont,
			fgCaptionFont,
			blockID
		},
		className, 
		setAttributes
	} = props;

	
	// Retrieve a CSS Object
	const styleObj = calculated.calculatedStyleObj(props.attributes);

	// Retrieve/Set Classes
	// const classes = classnames( className, "xx-styled");

	console.log("the cycle ", fgHeadlineFont, fgCopyFont, fgCaptionFont);


	const classes = classnames(
		"xx-styled",
		"xx-styled--block",
		{[`xx-styled--headlinefont-${fgHeadlineFont}`]: (fgHeadlineFont !== 'inherit' && fgHeadlineFont)},
		{[`xx-styled--copyfont-${fgCopyFont}`]: (fgCopyFont !== 'inherit' && fgCopyFont) },
		{[`xx-styled--captionfont-${fgCaptionFont}`]: (fgCaptionFont !== 'inherit' && fgCaptionFont) }
	);

	// Create a BlockProps Object
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
		style: (styleMode == 'custom' || styleMode == 'named' ) ? styleObj : undefined,
		'data-theme': (styleMode == 'named') ? namedStyle : ''
	});
	
	
	return (
		<Fragment>
			{/* Apply BlockProps */}
			<div {...blockProps}>

				{/* Admin Padding Preview */}
				{styleMode=="custom" && ( <AdminStyle {...{ setAttributes, ...props }} /> )}

				{/* Sidebar Controls */}
				<InspectorControls><StyleControls {...props} /></InspectorControls>

				{/* Inner Blocks */}
				<InnerBlocks />
			</div>
		</Fragment>
	);
}
