// WorePress modules
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';

// Custom Modules
import edit from './edit';
import save from './save';
import icon from './icon';
import './components/PoststylePlugin.js';
import './editor.scss';
import './style.scss';

// Register "Styled Area" Block
registerBlockType('xx/styled', {
	edit,
	save,
	// icon,
	category: 'design',
	getEditWrapperProps(attributes) { const { blockAlignment } = attributes;},
	getSelectedBlockClientId(attributes) { const { blockID } = attributes;},
});

