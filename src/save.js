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
			styleEnabled
		},
		setAttributes,
		clientId
	} = props;



	// Return the shtuff
	const blockPropsSavedOb = {
		className: 'xx-styled',
		style: inlineVarCSS,
		'data-theme': styleEnabled ? "none" : "undefined"
	}
	
	return (
		<div {...useBlockProps.save(blockPropsSavedOb)}>
			{/* {styleEnabled && <OnPageStyle mode="css" {...{ setAttributes, ...props, blockID }} /> } */}
			<InnerBlocks.Content />
		</div>
	);
}
