// WorePress modules
const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
// import { cover as icon } from '@wordpress/icons';

// Custom Modules
import edit from './edit';
import save from './save';
import icon from './icon';
import './components/PoststylePlugin.js';
import './editor.scss';
import './style.scss';
// Define Category
const category = 'design';

// Register "Styled Area" Block
registerBlockType('xx/styled', {
	edit,
	save,
	icon,
	category
});