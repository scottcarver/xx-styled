/*
poststylemeta_type : postStyleType
poststylemeta_headline : postStyleHeadline
poststylemeta_copy : postStyleCopy
poststylemeta_captions : postStyleCaptions
*/

/* Most of the ideas were taken from here Lifted from here https://github.com/HardeepAsrani/gutenberg-boilerplate/blob/master/src/sidebar.js */
const { Fragment } = wp.element;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
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
		postStyleCaptions
	} = props;

	let comboOptions = [
		{
			value: "small",
			label: "Small"
		},
		{
			value: "normal",
			label: "Normal"
		},
		{
			value: "large",
			label: "Large"
		},
		{
			value: "huge",
			label: "Huge"
		},
		{
			value: "billy",
			label: "Billy"
		}
	];

	const Example = () => {

		// Make the data request.
		const data = useSelect((select) => {
			return select('core').getEntityRecords('postType', 'post');
		});
	
		// Display our list of post titles.
		return (
			<ul>
				{data &&
					data.map(({ title: { rendered: postTitle } }) => {
						return <li>{postTitle}</li>;
					})
				}
			</ul>
		);
	};


	domReady(function() {
		var fontClass = "wp-headlinefont--" + postStyleHeadline;
		var editorClass = ".edit-post-visual-editor";
		if (myPostMetaKey) {
			jQuery("body").addClass("wp-admin--gutenbergdebug");
			jQuery(editorClass).attr("data-headline", postStyleHeadline);
			jQuery(editorClass).attr("data-copy", postStyleCopy);
			jQuery(editorClass).attr("data-captions", postStyleCaptions);
		} else {
			jQuery("body").removeClass("wp-admin--gutenbergdebug");
		}
	});
	return (
		<Fragment>
			<PluginSidebarMoreMenuItem target="post-style-sidebar-plugin" icon="admin-customizer">
				Post Styles
			</PluginSidebarMoreMenuItem>
			<PluginSidebar name="post-style-sidebar-plugin" icon="admin-customizer" title="Post Styles">
				<div className="px-simplerow px-simplerow--first">
					<ToggleControl label="Override Default Styles?" checked={myPostMetaKey} onChange={updateMyPostMetaKey} />
				</div>
				{myPostMetaKey ? (
					<Fragment>

<Fragment>
									<div style={{padding :'20px'}}>
										<div className="px-simplerow px-simplerow--hascomboboxcontrol">
<Example />
					<ComboboxControl
					label="Font Size"
					value={postStyleType}
					allowReset={true}
					options={comboOptions}
					onChange={value => {
						updateMyPostMetaType(value);
					}}
					onInputChange={(inputValue) =>
						setFilteredOptions(comboOptions.filter(option =>
								option.label.toLowerCase().startsWith(inputValue.toLowerCase())
							)
						)
					}
				/> 

{/* 
											<SelectControl
												label="Type Styles:"
												value={postStyleType}
												options={[
													{ label: "Default", value: "default" },
													{ label: "Modern", value: "modern" },
													{ label: "Classic", value: "classical" },
													{ label: "Technical", value: "technical" },
													{ label: "Custom", value: "custom" }
												]}
												onChange={value => {
													updateMyPostMetaType(value);
												}}
											/> */}
										</div>
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
													isPrimary={postStyleHeadline === "sans-serif"}
													onClick={() => {
														updateMyPostMetaHeadline("sans-serif");
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
													isPrimary={postStyleCopy === "sans-serif"}
													onClick={() => {
														updateMyPostMetaCopy("sans-serif");
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
													isPrimary={postStyleCaptions === "sans-serif"}
													onClick={() => {
														updateMyPostMetaCaptions("sans-serif");
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
										</div>
									</div>
								</Fragment>


						{/* <PanelBody title={__("Foreground", "pxblocks")} icon="welcome-widgets-menus">
							<PanelRow>
								
							</PanelRow>
						</PanelBody>

						<PanelBody title={__("Background", "pxblocks")} initialOpen={false} icon="welcome-widgets-menus">
							<PanelRow>Create Background Settings for this entire post</PanelRow>
						</PanelBody> */}
					</Fragment>
				) : (
					<p>Global Styles, and Block Styles are Active</p>
				)}
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
			// alert("boop " + value);

			// Set Type
			editPost({ meta: { poststylemeta_type: value } });

			switch (value) {
				case "default":
					// Set Style
					editPost({ meta: { poststylemeta_headline: "sans-serif" } });
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
					editPost({ meta: { poststylemeta_headline: "sans-serif" } });
					editPost({ meta: { poststylemeta_copy: "sans-serif" } });
					editPost({ meta: { poststylemeta_captions: "sans-serif" } });
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



registerPlugin("sidebar-poststyle-plugin", {
	render: compose(
		applyWithSelect,
		applyWithDispatch
	)(PoststylePlugin)
});
