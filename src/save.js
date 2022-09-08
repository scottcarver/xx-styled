// Node modules
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import classnames from "classnames";
import { InnerBlocks  } from '@wordpress/block-editor';
// Custom Components
import OnPageStyle from "../assets/OnPageStyle";
import InlineStyleVars from "../assets/InlineStyleVars";
// Custom Functions
import calculatedInlineVars from "../assets/lib/js/calculatedInlineVars";


export default function save(props) {
	// const props = useBlockProps.save();

	const inlineVarCSS =  calculatedInlineVars(props.attributes);
	
	console.log("INLINER", inlineVarCSS);

	console.log("save props!", props);
	
	const {
		attributes: {
			blockID,
			namedstyle,
			styleEnabled,
			styleMode,
			heightEnabled,
		},
		setAttributes,
		clientId
	} = props;

	const classes = classnames(
		"xx-styled",
		// `wp-block-xx-styled--${blockID}`,
		{ "wp-block--heightenabled": heightEnabled },
		// `wp-block--headline-${foregroundHeadlineFont}`,
		// `wp-block--copy-${foregroundCopyFont}`,
		// `wp-block--caption-${foregroundCaptionFont}`
	);

	// Return the shtuff
	const blockPropsSavedOb = {
		className: classes,
		style: styleMode == 'custom' || styleMode == 'named' ? inlineVarCSS : {},
		'data-theme': styleMode == 'named' ? namedstyle : ''
	}
	
	return (
		<div {...useBlockProps.save(blockPropsSavedOb)}>
			{/* {styleEnabled && <OnPageStyle mode="css" {...{ setAttributes, ...props, blockID }} /> } */}
			<InnerBlocks.Content />
		</div>
	);
}
