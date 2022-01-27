import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import edit from './edit';
import save from './save';
import metadata from './../block.json';

/* Register Block Type with JS using shorthand. 
With block.json, you only need a handle and options object */
registerBlockType('xx/styled', {
	edit,
	save,
});
