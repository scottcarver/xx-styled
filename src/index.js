import { registerBlockType } from '@wordpress/blocks';
import domReady from '@wordpress/dom-ready';
import './editor.scss';
import './style.scss';
import Edit from './edit';
import save from './save';
// const { PluginDocumentSettingPanel } = wp.editPost;
import './sidebar-poststyles.js';

registerBlockType('xx/styled', {
	edit: Edit,
	save,
	//category: 'wholesome-blocks',
	getEditWrapperProps(attributes) { const { blockAlignment } = attributes;},
	getSelectedBlockClientId(attributes) { const { blockID } = attributes;}
});


domReady( function() {
	wp.blocks.registerBlockVariation( 'xx/styled', {
		name: 'blue-light',
		label: 'Itza Light Blu',
		title: 'BG Light Blue',
		category: 'wholesome-blocks',
		attributes: { backgroundColor0: '#FF0000' }
	} );
} );

