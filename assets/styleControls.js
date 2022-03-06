// Node modules
import classnames from "classnames";

/** Internal block libraries
 */

import BGTabs from "./BGTabs";
import StyledPreview from "./components/StyledPreview";
import calculatedTabset from "./lib/js/calculatedTabset";

const { __ } = wp.i18n;
import { Component, Fragment, useState } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';
// This uses the old syntax and maybe needs updated to @wordpress
const {
	PanelBody, // this is new in this demo
	PanelRow, // this is new in this demo
	TabPanel,
	Button,
	ButtonGroup,
	FormToggle,
	IconButton,
	Placeholder,
	ColorIndicator,
	BaseControl,
	RangeControl,
	ColorPicker,
	SelectControl,
	CustomGradientPicker,
	ComboboxControl
} = wp.components;

const options = [
    {
        value: 'small',
        label: 'Small',
    },
    {
        value: 'normal',
        label: 'Normal',
    },
    {
        value: 'large',
        label: 'Large',
    },
    {
        value: 'huge',
        label: 'Huge',
    },
];
 


const { withState } = wp.compose;

/**
 * Create a Block Controls wrapper Component
 */
export default class StyleControls extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				blockID,
				namedstyle,
				babygradient,
				styleEnabled,
				heightEnabled,
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				backgroundStackFirst,
				backgroundColorCount,
				backgroundColor0,
				backgroundColor1,
				backgroundColor2,
				backgroundColor3,
				backgroundColor1Start,
				backgroundColor2Start,
				backgroundImage,
				backgroundGradientAttachment,
				gradientType,
				gradientLinearAngle,
				gradientAlignRadialHori,
				gradientAlignRadialVert,
				headlineColor,
				foregroundColor,
				linkColor,
				dropcapColor,
				selectionFGColor,
				selectionBGColor,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont,
				spacingMobile,
				spacingTablet,
				spacingDesktop
			},
			setAttributes,
			clientID
		} = this.props;

		const onSelect = tabName => {
			console.log("Selecting tab", tabName);
		};

		const selectTab = tabName => {
			console.log("Selecting tab", tabName);
		};

		
		const attributeLibrary = {
			'black-bg' : { 'backgroundColor0': '#000000', 'foregroundColor': '#FFFFFF' },
			'red-bg' : { 'backgroundColor0': '#FF0000', 'foregroundColor': '#0000FF' },
			'white-bg' : { 'backgroundColor0': '#FFFFFF', 'foregroundColor': '#000000' }
		}


		// Toggles
		const toggleStyleEnabled = () => setAttributes({ styleEnabled: !styleEnabled });
		const toggleBgColorEnabled = () => { setAttributes({ bgColorEnabled: !bgColorEnabled }); };
		const toggleGradientEnabled = () => { setAttributes({ bgGradientEnabled: !bgGradientEnabled }); };
		const toggleImageEnabled = () => { setAttributes({ bgImageEnabled: !bgImageEnabled }); };
		const toggleGelEnabled = () => { setAttributes({ bgGelEnabled: !bgGelEnabled }); };
		const toggleFgEnabled = () => setAttributes({ foregroundEnabled: !foregroundEnabled });
		const toggleHeightEnabled = () => setAttributes({ heightEnabled: !heightEnabled });
		const toggleBgStack = backgroundStackFirst =>
			function() {
				if (backgroundStackFirst == "image") {
					setAttributes({ backgroundStackFirst: "gradient" });
				}
				if (backgroundStackFirst == "gradient") {
					setAttributes({ backgroundStackFirst: "image" });
				}
			};
		const doStyleChange = (selection) => {
			// alert(selection);
			var obj = attributeLibrary[selection];
			setAttributes(obj);
		}

		const presetcolors = [
			{ name: "red", color: "#f00" },
			{ name: "green", color: "#0f0" },
			{ name: "blue", color: "#00f" },
			{ name: "red1", color: "#ff0" },
			{ name: "red2", color: "#fe0" }
		];

		const presets = {
			selectionText: [
				{ name: "red", color: "#f00" },
				{ name: "green", color: "#0f0" },
				{ name: "blue", color: "#00f" }
			],
			selectionBg: [{ name: "red", color: "#f00" }, { name: "green", color: "#0f0" }, { name: "blue", color: "#00f" }],
			flatBg: [{ name: "red", color: "#f00" }, { name: "blue", color: "#00f" }],
			gradientBg: [{ name: "red", color: "#f00" }, { name: "blue", color: "#00f" }]
		};
		

		const getForegroundTab = name => {
			
			if (name == "fgcolor") {
				return (
					<Fragment>
						<div class="px-colorbox px-colorbox-negmarginabove">
							<h2>Headline</h2>
							<ColorIndicator colorValue={headlineColor} />
							<ColorPalette value={headlineColor} onChange={headlineColor => setAttributes({ headlineColor })} />
						</div>
						<div class="px-colorbox px-colorbox-negmarginabove">
							<h2>Text</h2>
							<ColorIndicator colorValue={foregroundColor} />
							<ColorPalette value={foregroundColor} onChange={foregroundColor => setAttributes({ foregroundColor })} />
						</div>
						<div class="px-colorbox px-colorbox-negmarginabove">
							<h2>Link</h2>
							<ColorIndicator colorValue={linkColor} />
							<ColorPalette value={linkColor} onChange={linkColor => setAttributes({ linkColor })} />
						</div>
						<div class="px-colorbox px-colorbox-negmarginabove">
							<h2>Dropcap</h2>
							<ColorIndicator colorValue={dropcapColor} />
							<ColorPalette value={dropcapColor} onChange={dropcapColor => setAttributes({ dropcapColor })} />
						</div>
					</Fragment>
				);
			}
			if (name == "fgselection") {
				return (
					<Fragment>
						<div class="px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow">
							<h2>Selected Text</h2>
							<ColorIndicator colorValue={selectionFGColor} />
							<ColorPalette
								value={selectionFGColor}
								onChange={selectionFGColor => setAttributes({ selectionFGColor })}
							/>
						</div>
						<div class="px-colorbox px-colorbox--marginabove">
							<h2>Selected Text BG</h2>
							<ColorIndicator colorValue={selectionBGColor} />
							<ColorPalette
								value={selectionBGColor}
								onChange={selectionBGColor => setAttributes({ selectionBGColor })}
							/>
						</div>
					</Fragment>
				);
			}
			if (name == "fgfont") {
				return (
					<Fragment>
						<div class="px-simplerow px-simplerow--flatbottom px-simplerow--flatheadline">
							<h2>Headline Font</h2>
						</div>
						<div class="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Headline Font")}>
								<Button
									isDefault
									isPrimary={foregroundHeadlineFont === "serif"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "serif" });
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundHeadlineFont === "sans-serif"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "sans-serif" });
									}}
								>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundHeadlineFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "monospace" });
									}}
								>
									Monospace
								</Button>
							</ButtonGroup>
						</div>
						<div class="px-simplerow px-simplerow--flatbottom">
							<h2>Copy Font</h2>
						</div>
						<div class="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Copy Font")}>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "serif"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "serif" });
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "sans-serif"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "sans-serif" });
									}}
								>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "monospace" });
									}}
								>
									Monospace
								</Button>
							</ButtonGroup>
						</div>
						<div class="px-simplerow px-simplerow--flatbottom">
							<h2>Caption Font</h2>
						</div>
						<div class="px-buttongroup px-buttongroup--small">
							<ButtonGroup aria-label={__("Caption Font")}>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "serif"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "serif" });
									}}>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "sans-serif"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "sans-serif" });
									}}>
									Sans-Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "monospace" });
									}}>
									Monospace
								</Button>
							</ButtonGroup>
						</div>
					</Fragment>
				);
			}
		};

		/*
		const doshit = function() {
			themTabs = calculatedTabset(this.props);
		};
		
		let choices = [];
		var posts = select( 'core' ).getEntityRecords( 'postType', 'post' );
		console.log("No Joke! ", posts);
		*/

		return (
			<Fragment>

				<div className="px-simplerow px-simplerow--padtop px-simplerow--padleft px-simplerow--padright">

{/* 						
				<ComboboxControl
					label="Font Size"
					value="small"
					options={[
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
						}
					]}
					onInputChange={(inputValue) =>
						setFilteredOptions(
							[
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
								}
							].filter(option =>
								option.label.toLowerCase().startsWith(inputValue.toLowerCase())
							)
						)
					}
				/> */}
					
					<SelectControl
						label={__('Named Styles', 'awhitepixel')}
						options={ [
							{ value: null, label: 'Select a User', disabled: true },
							{ value: 'black-bg', label: 'Black BG'},
							{ value: 'red-bg', label: 'Red BG'},
							{ value: 'white-bg', label: 'White BG'},
						] }
						disabled={styleEnabled}
						// value={'c'}
						onChange={doStyleChange}
						// onChange= { ( selection ) => { doStyleChange } }
						// onChange={(newval) => setAttributes({ 'backgroundColor0': '#cccccc' })}
					/> 
					
				</div>


			
				<div className="px-simplerow px-simplerow--first">
					<label htmlFor="styleenabled-form-toggle">{__("Custom Styles Enabled", "pxblocks")}</label>
					<FormToggle
						id="styleenabled-form-toggle"
						label={__("Custom Styles Enabled?", "pxblocks")}
						checked={styleEnabled}
						onChange={toggleStyleEnabled}
					/>
				</div>

				{styleEnabled && (
					<StyledPreview {...{ setAttributes, ...this.props }} />
				)}
			
			
				<PanelBody title={__("Foreground", "pxblocks")} initialOpen={false} icon="welcome-widgets-menus">
					<PanelRow>
						{/* Tab that includes Foreground Settings */}
						<TabPanel
							className="px-tabwrap px-tabwrap--centered px-tabwrap--margin-top"
							activeClass="active-tab"
							onSelect={onSelect}
							tabs={[
								{
									name: "fgcolor",
									title: "Color",
									className: "tab-one"
								},
								{
									name: "fgselection",
									title: "Selection",
									className: "tab-two"
								},
								{
									name: "fgfont",
									title: "Typography",
									className: "tab-three"
								}
							]}
						>
							{tab => getForegroundTab(tab.name)}
						</TabPanel>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Background", "pxblocks")} initialOpen={false} icon="format-image">
					<PanelRow>
						<div class="px-sidepanel">
							<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
								<label htmlFor="bggel-styleenabled-form-toggle">{__("Gel", "pxblocks")}</label>
								<FormToggle
									id="bggel-styleenabled-form-toggle"
									label={__("Gel", "pxblocks")}
									checked={bgGelEnabled}
									onChange={toggleGelEnabled}
								/>
							</div>
							{/* When Gradient is first, order them that way */}
							{backgroundStackFirst === "gradient" ? (
								<Fragment>
									<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="gradient-styleenabled-form-toggle">{__("Gradient", "pxblocks")}</label>
										<FormToggle
											id="gradient-styleenabled-form-toggle"
											label={__("Gradient", "pxblocks")}
											checked={bgGradientEnabled}
											onChange={toggleGradientEnabled}
										/>
									</div>
									<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="bgimage-styleenabled-form-toggle">{__("Image", "pxblocks")}</label>
										<FormToggle
											id="bgimage-styleenabled-form-toggle"
											label={__("Image", "pxblocks")}
											checked={bgImageEnabled}
											onChange={toggleImageEnabled}
										/>
									</div>
								</Fragment>
							) : (
								<Fragment>
									<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="bgimage-styleenabled-form-toggle">{__("Image", "pxblocks")}</label>
										<FormToggle
											id="bgimage-styleenabled-form-toggle"
											label={__("Image", "pxblocks")}
											checked={bgImageEnabled}
											onChange={toggleImageEnabled}
										/>
									</div>

									<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="gradient-styleenabled-form-toggle">{__("Gradient", "pxblocks")}</label>
										<FormToggle
											id="gradient-styleenabled-form-toggle"
											label={__("Gradient", "pxblocks")}
											checked={bgGradientEnabled}
											onChange={toggleGradientEnabled}
										/>
									</div>
								</Fragment>
							)}
							<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
								<label htmlFor="bg-styleenabled-form-toggle">{__("Base Color", "pxblocks")}</label>
								<FormToggle
									id="bg-styleenabled-form-toggle"
									label={__("Base Color", "pxblocks")}
									checked={bgColorEnabled}
									onChange={toggleBgColorEnabled}
								/>
							</div>
							{bgGradientEnabled && bgImageEnabled && (
								<div class="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
									<label htmlFor="bgimage-stackfirst-form-toggle">{__("Re-Order Gradient & Image", "pxblocks")}</label>
									<FormToggle
										id="bgimage-stackfirst-form-toggle"
										label={__("Image over Gradient?", "pxblocks")}
										checked={backgroundStackFirst == "image"}
										onChange={toggleBgStack(backgroundStackFirst)}
									/>
								</div>
							)}

							<BGTabs {...{ setAttributes, ...this.props }} />

							{/*
								<TabPanel
								className="px-tabwrap px-tabwrap--centered"
								activeClass="active-tab"
								initialTabName="gradcolortab"
								onSelect={onSelect}
									tabs={[
										{
											name: "gradcolortab",
											title: "Colors",
											className: "tab-gradcolor"
										},
										{
											name: "gradsettingstab",
											title: "Settings",
											className: "tab-gradsettings"
										}
										// ,
										// {
										// 	name: "gradbgtab",
										// 	title: "Background",
										// 	className: "tab-gradbg"
										// }
									]}
								>
									{tab => getGradientTab(tab.name)}
								</TabPanel>
								 */}
							{/*
							{backgroundStackFirst == "gradient" && (
								<TabPanel
									className="px-tabwrap px-tabwrap--centered"
									activeClass="active-tab"
									tabs={fixedTabsetReversed}
								>
									{tab => getBackgroundTab(tab.name)}
								</TabPanel>
							)}
							*/}
						</div>
					</PanelRow>
				</PanelBody>
				<PanelBody title={__("Responsive", "pxblocks")} initialOpen={false} icon="image-flip-horizontal">
					<PanelRow>
					<div className="px-sidepanel px-sidepanel--grey">
						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							<label htmlFor="heightenabled-form-toggle">{__("Height Enabled", "pxblocks")}</label>
							<FormToggle
								id="heightenabled-form-toggle"
								label={__("Styles Enabled", "pxblocks")}
								checked={heightEnabled}
								onChange={toggleHeightEnabled}
							/>
						</div>

						{/* <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom" style={{'border':'dashed 1px grey'}}>
							<BoxControl 
								label="Desktop Spacing"
								sides={ [ 'top', 'left', 'right', 'bottom' ] } 
								values={spacingDesktop}
								defaultValues={ {
									top: '50px',
									left: '10%',
									right: '10%',
									bottom: '50px',
								}} 
								onChange={(newdata) => {
									console.log('currentvar', spacingDesktop);
									console.log('newdata', newdata);
									setAttributes({ spacingDesktop: newdata });
								}} 
							/>
						</div> */}
						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							<BoxControl 
								label="Mobile Spacing"
								values={spacingMobile}
								sides={ [ 'top', 'left', 'right', 'bottom' ] } 
								defaultValues={ { top: '50px',left: '10%',right: '10%', bottom: '50px' }} 
								onChange={(newdata) => { setAttributes({ spacingMobile: newdata }); }} 
							/>
						</div>
						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							<BoxControl 
								label="Desktop Tablet"
								values={spacingTablet}
								sides={ [ 'top', 'left', 'right', 'bottom' ] } 
								defaultValues={ { top: '50px',left: '10%',right: '10%', bottom: '50px' }} 
								onChange={(newdata) => { setAttributes({ spacingTablet: newdata }); }} 
							/>
						</div>
						<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							<BoxControl 
								label="Desktop Spacing"
								values={spacingDesktop}
								sides={ [ 'top', 'left', 'right', 'bottom' ] } 
								defaultValues={ { top: '50px',left: '10%',right: '10%', bottom: '50px' }} 
								onChange={(newdata) => { setAttributes({ spacingDesktop: newdata }); }} 
							/>
						</div>
					</div>
					</PanelRow>
				</PanelBody>
			</Fragment>
		);
	}
}

{
	/* 
backgroundImageSize, backgroundImageSizeCustom, backgroundImageRepeat, backgroundImageAttachment, backgroundImageAlignVert, backgroundImageAlignHori, backgroundImageAlignVertCustom, backgroundImageAlignHoriCustom, 
*/
}
