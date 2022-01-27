import { __ } from '@wordpress/i18n';
import {  InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import undoHex from './library/undoHex';

export default function save({
	attributes: {
        blockID,
		styleEnabled,
		foregroundColor,
		backgroundColor0,
		headlineColor,
        linkColor,
		namedStyle
    }, 
}){
	
	const styleObj = { 
		'--foregroundColor': foregroundColor, 
		'--backgroundColor0': backgroundColor0,
		'--headlineColor': headlineColor,
        '--linkColor': linkColor
	};
	
	
	// Return the shtuff
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

	return (
		<div {...useBlockProps.save(blockPropsSavedOb)} data-theme={styleEnabled ? "none" : undoHex(namedStyle) }>
			<InnerBlocks.Content />
		</div>
	);
}
