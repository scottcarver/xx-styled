// WorePress modules
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';

// Custom Modules
import './editor.scss';
import './style.scss';
import edit from './edit';
import save from './save';
import './components/PoststylePlugin.js';
// import './components/BlockVariations.js';

// Register "Styled Area" Block
registerBlockType('xx/styled', {
	edit,
	save,
	category: 'design',
	getEditWrapperProps(attributes) { const { blockAlignment } = attributes;},
	getSelectedBlockClientId(attributes) { const { blockID } = attributes;},
});

