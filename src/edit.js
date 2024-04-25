// Node modules
import classnames from "classnames";

// WordPress modules
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks} from '@wordpress/block-editor';
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
			blockID,
			clientUUID,
		},
		clientId,
		className, 
		setAttributes
	} = props;

	console.log("clientId was: " + clientId);
	
	// This will be set upon initial creation, then saved
	if(!clientUUID){
		console.log("no unique id was set");
		setAttributes({
			clientUUID: clientId
		});
	}
	
	// Retrieve a CSS Object
	const styleObj = calculated.calculatedStyleObj(props.attributes);

	// Retrieve/Set Classes
	const classes = classnames(
		clientId,
		"xx-styled",
		"xx-styled--block",
		{[`xx-styled--headlinefont-${fgHeadlineFont}`]: (fgHeadlineFont !== 'inherit' && fgHeadlineFont)},
		{[`xx-styled--copyfont-${fgCopyFont}`]: (fgCopyFont !== 'inherit' && fgCopyFont) },
		{[`xx-styled--captionfont-${fgCaptionFont}`]: (fgCaptionFont !== 'inherit' && fgCaptionFont) }
	);

	// Create a BlockProps Object
	const blockProps = useBlockProps( {
		className: classes,
		id: "yep",
		style: (styleMode == 'custom' || styleMode == 'named' ) ? styleObj : undefined,
		'data-theme': (styleMode == 'named') ? namedStyle : ''
	});
	
	//id: blockID,
	
	return (
		<Fragment>
			{/* Apply BlockProps */}
			<div {...blockProps}>

				{/* Admin Padding Preview */}
				<AdminStyle {...props } />

				{/* Sidebar Controls */}
				<StyleControls {...props} />

				{/* Inner Blocks */}
				<InnerBlocks />
			</div>
		</Fragment>
	);
}
