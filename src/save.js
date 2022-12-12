// Node modules
import classnames from "classnames";

// WordPress Modules
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

// Custom modules
import calculated from "../src/library/calculated/calculated";

// Export Save Function
export default function save(props) {
	
	// Destructure props
	const {
		attributes: {
			namedStyle,
			styleMode,
			fgHeadlineFont,
			fgCopyFont,
			fgCaptionFont,
			blockID
		}
	} = props;

	// Retrieve Inline CSS using helper function
	const inlineVarCSS =  calculated.calculatedInlineVars(props.attributes);

	// Set classnames (font-classes allow for fine-tuning)
	const classes = classnames(
		"xx-styled",
		"xx-styled--block",
		{[`xx-styled--headlinefont-${fgHeadlineFont}`]: (fgHeadlineFont !== 'inherit' && fgHeadlineFont)},
		{[`xx-styled--copyfont-${fgCopyFont}`]: (fgCopyFont !== 'inherit' && fgCopyFont) },
		{[`xx-styled--captionfont-${fgCaptionFont}`]: (fgCaptionFont !== 'inherit' && fgCaptionFont) }
	);

	// Create a BlockProps Object
	const blockProps = {
		className: classes,
		id: blockID,
		style: styleMode == 'custom' || styleMode == 'named' ? inlineVarCSS : {},
		'data-theme': styleMode == 'named' ? namedStyle : ''
	}
	
	// Save BlockProps and InnerBlocks content
	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
