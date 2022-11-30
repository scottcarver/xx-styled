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
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
// const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Button, ButtonGroup, PanelRow, PanelBody, ToggleControl, SelectControl, ComboboxControl } = wp.components;
const { withSelect, withDispatch, useSelect } = wp.data;
const { compose } = wp.compose;
const { __ } = wp.i18n;
import domReady from "@wordpress/dom-ready";
// import "./lib/scss/style.scss";
import "./editor.scss";



function PoststylePlugin(props) {
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

	/*
	const fontOptions = [
		{"label":"Inherit","value":"inherit"},
		{"label":"Serif","value":"serif"},
		{"label":"Sans-Serif","value":"sansserif"},
		{"label":"Monospace","value":"monospace"},
		{"label":"Cursive","value":"cursive"},
		{"label":"Fantasy","value":"fantasy"},
	];
	*/

	const fontOptions = global_named_fonts;

	const stylePresets = [
		{"label":"None","value":"none"},
		{"label":"News","value":"news"},
		{"label":"Magazine","value":"magazine"},
		{"label":"Technical","value":"technical"},
		{"label":"Modern","value":"modern"},
		{"label":"Natural","value":"natural"},
	];

	const PostsDropdownControl = compose(
		// withSelect allows to get posts for our SelectControl and also to get the post meta value
		withSelect( function( select, props ) {
			return {
				posts: select( 'core' ).getEntityRecords( 'postType', 'style', { per_page: -1 } ),
				// metaValue: select( 'core/editor' ).getEditedPostAttribute( 'meta' )[ props.metaKey ],
			}
		} ) )( function( props ) {
			
			// options for SelectControl
			var options = [];
			
			// if posts found
			if( props.posts ) {
				options.push( { value: '', label: 'Default' } );
				props.posts.forEach((post) => { // simple foreach loop
					// console.log(post);
					const dynamicLabel = (post.title.rendered !== '') ? post.title.rendered : 'Style ID ' + post.id;
					console.log("slug, label:", post.generated_slug, dynamicLabel);
					options.push({value:post.generated_slug, label:dynamicLabel});
				});
			} else {
				options.push( { value: postStyleType, label: 'Loading...' } )
			}
	
			return createElement( ComboboxControl,
				{
					label:"Choose a Styled Area",
					placeholder: 'Default',
					value:postStyleType,
					allowReset:true,
					options:options,
					onChange: function( content ) {
						updateMyPostMetaType(content);
						// alert('onchange');
					},
					onInputChange: function( inputValue ) {
						setFilteredOptions(options.filter(option =>
							option.label.toLowerCase().startsWith(inputValue.toLowerCase())
						))
						// alert('oninput');
					},
				
				}
			);
			
	
		}
	
	);
	

	let dynamicOptions = function(){
		return [
			{
				value: "short",
				label: "Short"
			}
		];

	}
		



	domReady(function() {
		/*
		if(typeof(postStyleType) === undefined){
			var postStyleType = '';
		}
		*/
			/*
			jQuery("body").removeClass (function (index, className) {
				return (className.match (/(^|\s)xx-styled\S+/g) || []).join(' ');
			}); */
			// alert('wo');
			// Moved off of
			// alert('someone like u ' + postStyleType);
			var stylestring = '--foregroundHeadlineFont: var(--'+postStyleHeadline+'); --foregroundCopyFont: var(--'+postStyleCopy+'); --foregroundCaptionFont: var(--'+postStyleCaptions+');'
			jQuery("body").addClass('xx-styled--admin').attr('data-theme',postStyleType).attr('style',stylestring);
		

		var fontClass = "wp-headlinefont--" + postStyleHeadline;
		var editorClass = ".edit-post-visual-editor";
		if (myPostMetaKey) {
			// alert('someone like u ' + postStyleType);
			jQuery("body").addClass("wp-admin--gutenbergdebug");
			jQuery(editorClass).attr("data-headline", postStyleHeadline);
			jQuery(editorClass).attr("data-copy", postStyleCopy);
			jQuery(editorClass).attr("data-captions", postStyleCaptions);
		} else {
			// alert('nobody like u ' + postStyleType);
			jQuery("body").removeClass("wp-admin--gutenbergdebug");
			if(postStyleType === null){ jQuery("body").attr('data-theme','');}
		}
	});
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="post-style-sidebar-plugin" icon="art">
				Entry Style
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name="post-style-sidebar-plugin" icon="art" title="Entry Style">
				{/*
				<div className="px-simplerow px-simplerow--first">
					<ToggleControl label="Override Default Styles?" checked={myPostMetaKey} onChange={updateMyPostMetaKey} />
				</div>
				 {myPostMetaKey ? ( */}
					<Fragment>

						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright  px-simplerow--hascomboboxcontrol">
							<PostsDropdownControl /> 
						</div>

						
						<PanelBody title={__("Typography", "pxblocks")} initialOpen={false}>
							<PanelRow>
								{/* Dropdown */}
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
												label="Copy Font Familyx"
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
										<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
											<ComboboxControl
												label="Typographic Themes"
												placeholder= 'Select a Preset'
												allowReset={true}
												options={stylePresets}
												onChange={function(newval){
													if(newval === 'none'){
														updateMyPostMetaHeadline("inherit");
														updateMyPostMetaCopy("inherit");
														updateMyPostMetaCaptions("inherit");
													}
													if(newval === 'news'){
														updateMyPostMetaHeadline("serif");
														updateMyPostMetaCopy("sansserif");
														updateMyPostMetaCaptions("sansserif");
													}
													if(newval === 'magazine'){
														updateMyPostMetaHeadline("sansserif");
														updateMyPostMetaCopy("serif");
														updateMyPostMetaCaptions("sansserif");
													}
													if(newval === 'technical'){
														updateMyPostMetaHeadline("monospace");
														updateMyPostMetaCopy("monospace");
														updateMyPostMetaCaptions("sansserif");
													}
													if(newval === 'modern'){
														updateMyPostMetaHeadline("sansserif");
														updateMyPostMetaCopy("sansserif");
														updateMyPostMetaCaptions("sansserif");
													}
													if(newval === 'natural'){
														updateMyPostMetaHeadline("sansserif");
														updateMyPostMetaCopy("sansserif");
														updateMyPostMetaCaptions("fantasy");
													}
												}}
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
{/* 				
						<div className="px-simplerow px-simplerow--flatbottom px-simplerow--flatheadline">
							<h2>Headline Font</h2>
						</div>
						<div className="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Headline Font")}>
								<Button
									isDefault
									isPrimary={postStyleHeadline === "serif"}
									onClick={() => {
										updateMyPostMetaHeadline("serif");
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleHeadline === "sansserif"}
									onClick={() => {
										updateMyPostMetaHeadline("sansserif");
									}}
								>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleHeadline === "monospace"}
									onClick={() => {
										updateMyPostMetaHeadline("monospace");
									}}
								>
									Monospace
								</Button>
							</ButtonGroup>
						</div>
						<div className="px-simplerow px-simplerow--flatbottom">
							<h2>Copy Font</h2>
						</div>
						<div className="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Copy Font")}>
								<Button
									isDefault
									isPrimary={postStyleCopy === "serif"}
									onClick={() => {
										updateMyPostMetaCopy("serif");
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleCopy === "sansserif"}
									onClick={() => {
										updateMyPostMetaCopy("sansserif");
									}}
								>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleCopy === "monospace"}
									onClick={() => {
										updateMyPostMetaCopy("monospace");
									}}
								>
									Monospace
								</Button>
							</ButtonGroup>
						</div>
						<div className="px-simplerow px-simplerow--flatbottom">
							<h2>Caption Font</h2>
						</div>
						<div className="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Caption Font")}>
								<Button
									isDefault
									isPrimary={postStyleCaptions === "serif"}
									onClick={() => {
										updateMyPostMetaCaptions("serif");
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleCaptions === "sansserif"}
									onClick={() => {
										updateMyPostMetaCaptions("sansserif");
									}}
								>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={postStyleCaptions === "monospace"}
									onClick={() => {
										updateMyPostMetaCaptions("monospace");
									}}
								>
									Monospace
								</Button>
							</ButtonGroup>
						</div> */}

					</Fragment>
			</PluginSidebar>
		</Fragment>
	);
}

const applyWithSelect = withSelect(select => {
	const { getEditedPostAttribute } = select("core/editor");
	const { my_post_meta_key: myPostMetaKey } = getEditedPostAttribute("meta");
	const { my_post_meta_string: myPostMetaString } = getEditedPostAttribute("meta");
	// new
	const { poststylemeta_type: postStyleType } = getEditedPostAttribute("meta");
	const { poststylemeta_headline: postStyleHeadline } = getEditedPostAttribute("meta");
	const { poststylemeta_copy: postStyleCopy } = getEditedPostAttribute("meta");
	const { poststylemeta_captions: postStyleCaptions } = getEditedPostAttribute("meta");


	return {
		myPostMetaKey,
		myPostMetaString,
		postStyleType,
		postStyleHeadline,
		postStyleCopy,
		postStyleCaptions
	};
});

const applyWithDispatch = withDispatch(dispatch => {
	const { editPost } = dispatch("core/editor");
	return {
		updateMyPostMetaKey(value) {
			editPost({ meta: { my_post_meta_key: value } });
		},
		updateMyPostMetaString(value) {
			editPost({ meta: { my_post_meta_string: value } });
		},
		// new
		updateMyPostMetaType(value) {

			//  if(value === null){ jQuery("body").attr('data-theme','');}
			//  alert("boop " + value);
			// Set Type
			editPost({ meta: { poststylemeta_type: value } });

			switch (value) {
				case "default":
					// Set Style
					editPost({ meta: { poststylemeta_headline: "sansserif" } });
					editPost({ meta: { poststylemeta_copy: "serif" } });
					editPost({ meta: { poststylemeta_captions: "monospace" } });
					// code block
					break;
				case "modern":
					// Set Style
					editPost({ meta: { poststylemeta_headline: "serif" } });
					editPost({ meta: { poststylemeta_copy: "serif" } });
					editPost({ meta: { poststylemeta_captions: "serif" } });
					// code block
					break;
				case "classical":
					// Set Style
					editPost({ meta: { poststylemeta_headline: "sansserif" } });
					editPost({ meta: { poststylemeta_copy: "sansserif" } });
					editPost({ meta: { poststylemeta_captions: "sansserif" } });
					// code block
					break;
				case "technical":
					// Set Style
					editPost({ meta: { poststylemeta_headline: "monospace" } });
					editPost({ meta: { poststylemeta_copy: "monospace" } });
					editPost({ meta: { poststylemeta_captions: "monospace" } });
					// code block
					break;
				default:

				// code block
			}

			// alert("boop " + value);
			// editPost({ meta: { poststylemeta_type: value } });
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


if(true){
	registerPlugin("sidebar-poststyle-plugin", {
		render: compose(
			applyWithSelect,
			applyWithDispatch
		)(PoststylePlugin)
	});
}