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
			namedstyle 
		},
		className, 
		setAttributes
	} = props;

	
	// Retrieve a CSS Object
	const styleObj = calculated.calculatedStyleObj(props.attributes);

	// Retrieve/Set Classes
	const classes = classnames( className, "xx-styled");

	// Create a BlockProps Object
	const blockProps = useBlockProps( {
		className: classes,
		style: (styleMode == 'custom' || styleMode == 'named' ) ? styleObj : undefined,
		'data-theme': (styleMode == 'named') ? namedstyle : ''
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
