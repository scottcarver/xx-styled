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
			namedstyle,
			styleMode,
			foregroundHeadlineFont,
			foregroundCopyFont,
			foregroundCaptionFont
		}
	} = props;

	// Retrieve Inline CSS using helper function
	const inlineVarCSS =  calculated.calculatedInlineVars(props.attributes);

	// Set classnames (font-classes allow for fine-tuning)
	const classes = classnames(
		"xx-styled",
		{[`xx-styled--headlinefont-${foregroundHeadlineFont}`]: foregroundHeadlineFont !== 'inherit' },
		{[`xx-styled--copyfont-${foregroundCopyFont}`]: foregroundCopyFont !== 'inherit' },
		{[`xx-styled--captionfont-${foregroundCaptionFont}`]: foregroundCaptionFont !== 'inherit' }
	);

	// Create a BlockProps Object
	const blockProps = {
		className: classes,
		style: styleMode == 'custom' || styleMode == 'named' ? inlineVarCSS : {},
		'data-theme': styleMode == 'named' ? namedstyle : ''
	}
	
	// Save BlockProps and InnerBlocks content
	return (
		<div {...useBlockProps.save(blockProps)}>
			<InnerBlocks.Content />
		</div>
	);
}
