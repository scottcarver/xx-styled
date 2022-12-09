// WorePress modules
import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
const { __ } = wp.i18n;

// Custom Modules
import './editor.scss';
import './style.scss';
import edit from './edit';
import save from './save';
import './components/SidebarPoststyles.js';

// Register "Styled Area" Block
registerBlockType('xx/styled', {
	edit,
	save,
	category: 'design',
	getEditWrapperProps(attributes) { const { blockAlignment } = attributes;},
	getSelectedBlockClientId(attributes) { const { blockID } = attributes;},

});



	/*
const styles = [
	{ name: 'default', label: __( 'Rounded' ), isDefault: true },
	{ name: 'outline', label: __( 'Outline' ) },
	{ name: 'squared', label: __( 'Squared' ) },
]

domReady( function() {

	wp.blocks.registerBlockVariation( 'xx/styled', {
		name: 'blue-light',
		label: 'Itza Light Blu',
		title: 'BG Light Blue',
		category: 'wholesome-blocks',
		attributes: { backgroundColor: '#FF0000' }
	} );
	
	wp.blocks.registerBlockStyle( 'xx/styled', {
		name: 'rounded',
		label: 'Rounded Corners',
	} );
	
} );
*/