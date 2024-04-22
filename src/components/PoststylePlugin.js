/* Note! This was based on a tutorial on dynamic post select https://rudrastyh.com/gutenberg/get-posts-in-dynamic-select-control.html */
/* Many ideas were taken from here lifted from here https://github.com/HardeepAsrani/gutenberg-boilerplate/blob/master/src/sidebar.js */

// WordPress Modules
const { __ } = wp.i18n;
const { createElement, Fragment } = wp.element;
import { registerPlugin } from '@wordpress/plugins';
import domReady from "@wordpress/dom-ready";
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
const { PanelRow, PanelBody, ComboboxControl } = wp.components;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

// Custom Modules
import "../editor.scss";

// PostStyle Sidebar Plugin
function PoststylePlugin(props) {

	const {
		updateMyPostMetaType,
		updateMyPostMetaHeadline,
		updateMyPostMetaCopy,
		updateMyPostMetaCaptions,
		postStyleType,
		postStyleHeadline,
		postStyleCopy,
		postStyleCaptions,
	} = props;

	const fontOptions = (typeof global_named_fonts !== 'undefined') ? global_named_fonts : [];

	const PostsDropdownControl = compose(
		// withSelect allows to collect posts for our SelectControl
		withSelect(function(select, props){
			// It is provided with data from the styled posttype 
			return { posts: select( 'core' ).getEntityRecords( 'postType', 'styled', { per_page: -1 } ), }
		// Results are passed into a new function 
		}))(function(props){
			// Build an array of name/values needed for SelectControl
			var options = [];
			// If there are results
			if( props.posts ) {
				// Add a default label, which resets the field
				options.push({ value: '', label: 'Default' });
				// Add one value/label options per entry
				props.posts.forEach((post) => {
					console.log("a post! ", post);
					const dynamicLabel = (post.title.rendered !== '') ? post.title.rendered : 'Style ID ' + post.id;
					options.push({value:post.slug, label:dynamicLabel});
				});
			// Show a fallback message while loading
			} else {
				options.push( { value: postStyleType, label: 'Loading...' } )
			}
	
			// Create an Element the dynamic ComboControl
			return createElement( ComboboxControl, {
					label:"Choose a Styled Area",
					placeholder: 'Default',
					value:postStyleType,
					allowReset:true,
					options:options,
					onChange: function( content ) { updateMyPostMetaType(content); },
					onInputChange: function(inputValue ) {
						setFilteredOptions(options.filter(option => { option.slug }
					))},
				}
			);
		}
	);
	
	// Add Classes/Styles to the DOM when things load or change
	domReady(function() {
		// var editorClass = ".edit-post-visual-editor";
		// Build font style string based on availability
		var stylestring = '';
		var classstring = 'xx-styled--admin';
		var allstyles = '';
		// var styles = global_named_fonts;
		var types = ['xx-styled--headlinefont', 'xx-styled--copyfont', 'xx-styled--captionfont']
		
		// Build a string of classes that include all font/type combinations
		for (let s = 0; s < fontOptions.length; s++) {
			for (let t = 0; t < types.length; t++) {
				allstyles +=  (types[t] + "-" + fontOptions[s].value + " ");
			 }
		 }
		 

		 // Build strings for style and class tags
		if(postStyleHeadline){ 
			stylestring += '--foregroundHeadlineFont: var(--'+postStyleHeadline+');';
			classstring += ' xx-styled--headlinefont-'+postStyleHeadline; 
		}
		if(postStyleCopy){ 
			stylestring += '--foregroundCopyFont: var(--'+postStyleCopy+');'; 
			classstring += ' xx-styled--copyfont-'+postStyleCopy; 
		}
		if(postStyleCaptions){ 
			stylestring += '--foregroundCaptionFont: var(--'+postStyleCaptions+');'; 
			classstring += ' xx-styled--captionfont-'+postStyleCaptions; 
		}

		// Add/Remove all the Properties!
		jQuery("body").removeClass(allstyles).addClass(classstring).attr('data-theme',postStyleType).attr('style',stylestring);

	});


	return (
		<Fragment>
			{/* Menu Item */}
			<PluginSidebarMoreMenuItem target="post-style-sidebar-plugin" icon="art">
				Entry Style
			</PluginSidebarMoreMenuItem>
			{/* Sidebar Component */}
			<PluginSidebar name="post-style-sidebar-plugin" icon="art" title="Entry Style">
				<Fragment>

					<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright  px-simplerow--hascomboboxcontrol">
						<PostsDropdownControl /> 
					</div>

					<PanelBody title={__("Typography", "pxblocks")} initialOpen={false}>
						<PanelRow>
							{/* Show Dropdowns, if there are available options */}
							{fontOptions.length > 0 && (
								<div className="px-sidepanel">
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
										<ComboboxControl
											label="Headline Font Family"
											placeholder= 'Initial'
											value={postStyleHeadline}
											allowReset={true}
											options={fontOptions}
											onChange={(newval) => updateMyPostMetaHeadline(newval)}
										/>
									</div>
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
										<ComboboxControl
											label="Copy Font Family"
											placeholder= 'Initial'
											value={postStyleCopy}
											allowReset={true}
											options={fontOptions}
											onChange={(newval) => updateMyPostMetaCopy(newval)}
										/>
									</div>
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
										<ComboboxControl
											label="Caption Font Family"
											placeholder= 'Initial'
											value={postStyleCaptions}
											allowReset={true}
											options={fontOptions}
											onChange={(newval) => updateMyPostMetaCaptions(newval)}
										/>
									</div>
								</div>
							)}
							{/* Fallback note */}
							{fontOptions.length == 0 && (
								<p> No Font Families defined in theme.json, <a href="https://fullsiteediting.com/lessons/theme-json-typography-options/" target="_blank">read more</a>.</p>
							)}
						</PanelRow>
					</PanelBody>
				</Fragment>
			</PluginSidebar>
		</Fragment>
	);
}

// Apply With Select
const applyWithSelect = withSelect(select => {
	const { getEditedPostAttribute } = select("core/editor");
	const { poststylemeta_type: postStyleType } = getEditedPostAttribute("meta");
	const { poststylemeta_headline: postStyleHeadline } = getEditedPostAttribute("meta");
	const { poststylemeta_copy: postStyleCopy } = getEditedPostAttribute("meta");
	const { poststylemeta_captions: postStyleCaptions } = getEditedPostAttribute("meta");

	return {
		postStyleType,
		postStyleHeadline,
		postStyleCopy,
		postStyleCaptions
	};
});

// Apply With Dispatch
const applyWithDispatch = withDispatch(dispatch => {
	const { editPost } = dispatch("core/editor");
	return {
		updateMyPostMetaType(value) {
			editPost({ meta: { poststylemeta_type: value } });
		},
		updateMyPostMetaHeadline(value) {
			editPost({ meta: { poststylemeta_headline: value } });
		},
		updateMyPostMetaCopy(value) {
			editPost({ meta: { poststylemeta_copy: value } });
		},
		updateMyPostMetaCaptions(value) {
			editPost({ meta: { poststylemeta_captions: value } });
		}
	};
});

// Run the Sidebar plugin (but not for the 'styled' posttype)
if((typeof global_current_posttype !== 'undefined') && global_current_posttype !== 'styled'){
	registerPlugin("sidebar-poststyle-plugin", {
		render: compose(
			applyWithSelect,
			applyWithDispatch
		)(PoststylePlugin)
	});
}