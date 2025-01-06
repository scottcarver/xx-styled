/*
poststylemeta_type : postStyleType
poststylemeta_headline : postStyleHeadline
poststylemeta_copy : postStyleCopy
poststylemeta_captions : postStyleCaptions
*/

/* Tutorial on dynamic post select https://rudrastyh.com/gutenberg/get-posts-in-dynamic-select-control.html */
/* Most of the ideas were taken from here Lifted from here https://github.com/HardeepAsrani/gutenberg-boilerplate/blob/master/src/sidebar.js */
const { createElement, Fragment } = wp.element;
import { registerPlugin } from '@wordpress/plugins';
// import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/editor';
// const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
// const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editor;
const { Button, ButtonGroup, PanelRow, PanelBody, ToggleControl, SelectControl, ComboboxControl } = wp.components;
const { withSelect, withDispatch, useSelect } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;
import domReady from "@wordpress/dom-ready";
// import "./lib/scss/style.scss";
import "../editor.scss";



function BlockVariations(props) {
	const {
		myPostMetaKey,
		updateMyPostMetaKey,
		updateMyPostMetaType,
		updateMyPostMetaHeadline,
		updateMyPostMetaCopy,
		updateMyPostMetaCaptions,
		postStyleType,
		postStyleHeadline,
		postStyleCopy,
		postStyleCaptions,
		setAttributes
	} = props;


	domReady(function() {
        alert('domready');
	});


	return(
		<Fragment>
			Beep
		</Fragment>
	);
}


/*
const styles = [
	{ name: 'default', label: __( 'Rounded' ), isDefault: true },
	{ name: 'outline', label: __( 'Outline' ) },
	{ name: 'squared', label: __( 'Squared' ) },
]
*/
domReady( function() {


	wp.blocks.registerBlockVariation( 'xx/styled', {
		name: 'blue-light',
		label: 'Itza Light Blu',
		title: 'BG Light Blue',
		category: 'wholesome-blocks',
		attributes: { backgroundColor: '#FF0000' },
		// isDefault: true
	} );
	
	/*
	wp.blocks.registerBlockStyle( 'xx/styled', {
		name: 'rounded',
		label: 'Rounded Corners',
	} );
	*/
} );
