// NPM
import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
const { __ } = wp.i18n;
// Local
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';
import './sidebar-poststyles.js';

// Register "Styled Area" Block
registerBlockType('xx/styled', {
	edit: Edit,
	save,
	category: 'design',
	getEditWrapperProps(attributes) { const { blockAlignment } = attributes;},
	getSelectedBlockClientId(attributes) { const { blockID } = attributes;},

});

	/*


const styles = [
	// Mark style as default.
	{
		name: 'default',
		label: __( 'Rounded' ),
		isDefault: true
	},
	{
		name: 'outline',
		label: __( 'Outline' )
	},
	{
		name: 'squared',
		label: __( 'Squared' )
	},
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