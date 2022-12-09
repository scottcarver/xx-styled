// Node modules
import classnames from "classnames";

/** Internal block libraries
 */

import BGTabs from "./BGTabs";
import StyledPreview from "./StyledPreview/StyledPreview";
import {AccordionInterface} from "./AccordionInterface";

const { __ } = wp.i18n;
import { Component, Fragment} from '@wordpress/element';
import { ColorPalette} from '@wordpress/block-editor';
import { __experimentalBoxControl as BoxControl, GradientPicker} from '@wordpress/components';
// This uses the old syntax and maybe needs updated to @wordpress
const {
	PanelBody, // this is new in this demo
	PanelRow, // this is new in this demo
	TabPanel,
	Button,
	ButtonGroup,
	FormToggle,
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

const gradients=[
    {
      gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
      name: 'Vivid cyan blue to vivid purple',
      slug: 'vivid-cyan-blue-to-vivid-purple'
    },
    {
      gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
      name: 'Light green cyan to vivid green cyan',
      slug: 'light-green-cyan-to-vivid-green-cyan'
    },
    {
      gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
      name: 'Luminous vivid amber to luminous vivid orange',
      slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
    },
    {
      gradient: 'linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)',
      name: 'Luminous vivid orange to vivid red',
      slug: 'luminous-vivid-orange-to-vivid-red'
    },
    {
      gradient: 'linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)',
      name: 'Very light gray to cyan bluish gray',
      slug: 'very-light-gray-to-cyan-bluish-gray'
    },
    {
      gradient: 'linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)',
      name: 'Cool to warm spectrum',
      slug: 'cool-to-warm-spectrum'
    }
];

const fontOptions = global_named_fonts;

const stylePresets = [
	{"label":"None","value":"none"},
	{"label":"News","value":"news"},
	{"label":"Magazine","value":"magazine"},
	{"label":"Technical","value":"technical"},
	{"label":"Modern","value":"modern"},
	{"label":"Natural","value":"natural"},
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
				namedstyle,
				styleEnabled,
				styleMode,
				heightEnabled,
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				backgroundStackFirst,
				headlineColor,
				foregroundColor,
				linkColor,
				dropcapColor,
				blockquoteColor,
				lineartColor,
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
			'black-bg' : { 'backgroundColor': '#000000', 'foregroundColor': '#FFFFFF' },
			'red-bg' : { 'backgroundColor': '#FF0000', 'foregroundColor': '#0000FF' },
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
			

		const getForegroundTab = name => {
			
			if (name == "fgcolor") {
				return (
					<Fragment>
						<div className="px-colorbox">
							<h2>Headline</h2>
							<input type="checkbox" id="headlineSwatch" name="headlineSwatch"></input>
							<label htmlFor="headlineSwatch">Palette</label>
							<ColorPalette value={headlineColor} onChange={headlineColor => setAttributes({ headlineColor })} />
						</div>
						<div className="px-colorbox">
							<h2>Text</h2>
							<input type="checkbox" id="textSwatch" name="textSwatch"></input>
							<label htmlFor="textSwatch">Palette</label>
							<ColorPalette value={foregroundColor} onChange={foregroundColor => setAttributes({ foregroundColor })} />
						</div>
						<div className="px-colorbox">
							<h2>Link</h2>
							<input type="checkbox" id="linkSwatch" name="linkSwatch"></input>
							<label htmlFor="linkSwatch">Palette</label>
							<ColorPalette value={linkColor} onChange={linkColor => setAttributes({ linkColor })} />
						</div>
						<div className="px-colorbox">
							<h2>Block Quote</h2>
							<input type="checkbox" id="blockquoteSwatch" name="blockquoteSwatch"></input>
							<label htmlFor="blockquoteSwatch">Palette</label>
							<ColorPalette value={blockquoteColor} onChange={blockquoteColor => setAttributes({ blockquoteColor })} />
						</div>
						<div className="px-colorbox">
							<h2>Dropcap</h2>
							<input type="checkbox" id="dropcapSwatch" name="dropcapSwatch"></input>
							<label htmlFor="dropcapSwatch">Palette</label>
							<ColorPalette value={dropcapColor} onChange={dropcapColor => setAttributes({ dropcapColor })} />
						</div>
						<div className="px-colorbox">
							<h2>Lineart</h2>
							<input type="checkbox" id="lineartSwatch" name="lineartSwatch"></input>
							<label htmlFor="lineartSwatch">Palette</label>
							<ColorPalette value={lineartColor} onChange={lineartColor => setAttributes({ lineartColor })} />
						</div>
					</Fragment>
				);
			}
			if (name == "fgselection") {
				return (
					<Fragment>
						<div className="px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow">
							<h2>Selected Text</h2>
							<input type="checkbox" id="selectionfgSwatch" name="selectionfgSwatch"></input>
							<label htmlFor="selectionfgSwatch">Palette</label>
							<ColorPalette
								value={selectionFGColor}
								onChange={selectionFGColor => setAttributes({ selectionFGColor })}
							/>
						</div>
						<div className="px-colorbox px-colorbox--marginabove">
							<h2>Selected Text BG</h2>
							<input type="checkbox" id="selectionbgSwatch" name="selectionbgSwatch"></input>
							<label htmlFor="selectionbgSwatch">Palette</label>
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
						<div className="px-simplerow px-simplerow--flatbottom px-simplerow--flatheadline">
							<h2>Headline Font</h2>
						</div>
						<div className="px-buttongroup px-buttongroup--small">
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
									isPrimary={foregroundHeadlineFont === "sansserif"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "sansserif" });
									}}
								>
									Sans
								</Button>
								<Button
									isDefault
									isPrimary={foregroundHeadlineFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "monospace" });
									}}
								>
									Mono
								</Button>
								<Button
									isDefault
									isPrimary={foregroundHeadlineFont === "custom"}
									onClick={() => {
										setAttributes({ foregroundHeadlineFont: "custom" });
									}}
								>
									Custom
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
									isPrimary={foregroundCopyFont === "serif"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "serif" });
									}}
								>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "sansserif"}
									onClick={() => { setAttributes({ foregroundCopyFont: "sansserif" }); }}
								>
									Sans
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "monospace" });
									}}
								>
									Mono
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCopyFont === "custom"}
									onClick={() => {
										setAttributes({ foregroundCopyFont: "custom" });
									}}
								>
									Custom
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
									isPrimary={foregroundCaptionFont === "serif"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "serif" });
									}}>
									Serif
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "sansserif"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "sansserif" });
									}}>
									Sans
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "monospace"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "monospace" });
									}}>
									Mono
								</Button>
								<Button
									isDefault
									isPrimary={foregroundCaptionFont === "custom"}
									onClick={() => {
										setAttributes({ foregroundCaptionFont: "custom" });
									}}>
									 Custom
								</Button>
							</ButtonGroup>
						</div>
					</Fragment>
				);
			}
		};

		return (
			<Fragment>

				{/* <div className="px-simplerow px-simplerow--first">
					<label htmlFor="styleenabled-form-toggle">{__("Enable Styles?", "pxblocks")}</label>
					<FormToggle
						id="styleenabled-form-toggle"
						label={__("Enable Style?", "pxblocks")}
						checked={!styleEnabled}
						onChange={toggleStyleEnabled}
					/>
				</div> */}

				<div id="styledarea-toggle" className="px-buttongroup px-buttongroup--centered px-buttongroup--padbottom">
					<ButtonGroup aria-label={__("Style Mode")}>
						<Button
							isDefault
							isPrimary={styleMode === "disabled"}
							onClick={() => {
								setAttributes({ styleMode: "disabled" });
								setAttributes({ styleEnabled: false });
							}}>
							Disabled
						</Button>
						<Button
							isDefault
							isPrimary={styleMode === "named"}
							onClick={() => {
								setAttributes({ styleMode: "named" });
								setAttributes({ styleEnabled: true });
							}}>
							Named
						</Button>
						<Button
							isDefault
							isPrimary={styleMode === "custom"}
							onClick={() => {
								setAttributes({ styleMode: "custom" });
								setAttributes({ styleEnabled: true });
							}}>
							Custom
						</Button>
					</ButtonGroup>
				</div>
			

				{styleMode=='named' && (
					<Fragment>
						<PanelBody title={__("Saved Styles", "pxblocks")}  className="panel-savedstyles" initialOpen={true}>
							{/*  icon="welcome-widgets-menus" */}
							<PanelRow>
								<div className="px-sidepanel">
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft px-simplerow--padright px-simplerow--hascomboboxcontrol">
										<ComboboxControl
											label="Select a Style"
											placeholder= 'Default'
											value={namedstyle}
											allowReset={true}
											options={global_named_styles}
											onChange={(newval) => setAttributes({ namedstyle: newval })}
											onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
												option.label.toLowerCase().startsWith(newval.toLowerCase())
											))}
										/>
									</div>

									<div className="px-simplerow px-simplerow--hasstyletiles">
										{global_named_styles.map((option) => (
											// className={"style-tile " + "style-tile--active"}
											// className={`styled-tile ${namedstyle == option.value ? "styled-tile--active" : ""}`} 
											<div className={`styled-tile ${namedstyle == option.value ? "styled-tile--active" : ""}`}
											key={option.value}>
												<button className={"xx-styled"} data-theme={option.value} onClick={() => setAttributes({ namedstyle: option.value })} style={{padding:"0px 20px 0px 10px"}} aria-label={"select style " + option.value}>
													<h3>Aa</h3>
													<p>Lorem Ipsum eget tortor risus.</p>
													<span></span><span></span><span></span><span></span>
												</button>
												{option.label}
											</div>
										))}
									</div>
									{/* 						
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--padleft">
										<a href="post-new.php?post_type=style" style={{padding: "5px"}}>+ Create New Style</a>	
									</div> */}
								</div>
							</PanelRow>
						</PanelBody>
					</Fragment>
				)}
			
				  
			{styleMode=='custom' && (
					

			<Fragment>
			
				<StyledPreview {...{ setAttributes, ...this.props }} />

				<PanelBody title={__("Foreground", "pxblocks")}  className="panel-foreground" initialOpen={false}>
					{/*  icon="welcome-widgets-menus" */}
					<PanelRow>
						
						{/* Tab that includes Foreground Settings */}
						<div className="px-sidepanel">
						<TabPanel
							className="px-tabwrap px-tabwrap--centered px-tabwrap--margintop"
							activeclassName="active-tab"
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
								// {
								// 	name: "fgfont",
								// 	title: "Typography",
								// 	className: "tab-three"
								// }
							]}
						>
							{tab => getForegroundTab(tab.name)}
						</TabPanel>
						</div>
					</PanelRow>
				</PanelBody>
				
				<PanelBody title={__("Background", "pxblocks")} className="panel-background" initialOpen={false}>
					{/*  icon="format-image" */}
					<PanelRow>
						<div className="px-sidepanel">
							<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
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
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="gradient-styleenabled-form-toggle">{__("Gradient", "pxblocks")}</label>
										<FormToggle
											id="gradient-styleenabled-form-toggle"
											label={__("Gradient", "pxblocks")}
											checked={bgGradientEnabled}
											onChange={toggleGradientEnabled}
										/>
									</div>
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
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
									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
										<label htmlFor="bgimage-styleenabled-form-toggle">{__("Image", "pxblocks")}</label>
										<FormToggle
											id="bgimage-styleenabled-form-toggle"
											label={__("Image", "pxblocks")}
											checked={bgImageEnabled}
											onChange={toggleImageEnabled}
										/>
									</div>

									<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
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
							<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
								<label htmlFor="bg-styleenabled-form-toggle">{__("Base Color", "pxblocks")}</label>
								<FormToggle
									id="bg-styleenabled-form-toggle"
									label={__("Base Color", "pxblocks")}
									checked={bgColorEnabled}
									onChange={toggleBgColorEnabled}
								/>
							</div>
							{bgGradientEnabled && bgImageEnabled && (
								<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
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

						</div>
					</PanelRow>
				</PanelBody>

			</Fragment>
			)}

			{/* <AccordionInterface attributes={this.props.attributes} setAttributes={this.props.setAttributes} />					 */}
			<AccordionInterface {...this.props} />

			
			
			{(styleMode =='named' || styleMode =='custom') && (
			<Fragment>
				<PanelBody title={__("Dimensions", "pxblocks")} className="panel-dimensions" initialOpen={false}>
					  {/* <PanelRow>
					  <div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom">
							  <label htmlFor="heightenabled-form-toggle">{__("Height Enabled", "pxblocks")}</label>
							  <FormToggle
								  id="heightenabled-form-toggle"
								  label={__("Styles Enabled", "pxblocks")}
								  checked={heightEnabled}
								  onChange={toggleHeightEnabled}
							  />
						  </div>
					  </PanelRow> */}
					  <PanelRow>
					  <div className="px-sidepanel px-sidepanel--grey">
						  <div className="px-simplerow px-simplerow--padtop px-simplerow--borderbottom px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Mobile Spacing"
								  values={spacingMobile}
								  sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingMobile: newdata }); }} 
							  />
						  </div>
						  <div className="px-simplerow px-simplerow--borderbottom px-simplerow--marginbottom px-simplerow--margintop  px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Tablet Spacing (992+)"
								  values={spacingTablet}
								  sides={ [ 'top', 'bottom', 'left', 'right'  ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingTablet: newdata }); }} 
							  />
						  </div>
						  <div className="px-simplerow  px-simplerow--paddingcontrol">
							  <BoxControl 
								  label="Desktop Spacing (1200+)"
								  values={spacingDesktop}
								  sides={ [ 'top',  'bottom', 'left', 'right' ] } 
								  resetValues={ { top: '0',bottom: '0', left:'0', right:'0' }} 
								  defaultValues={ { top: '0', bottom: '0', left:'0', right:'0' }} 
								  onChange={(newdata) => { setAttributes({ spacingDesktop: newdata }); }} 
							  />
						  </div>
					  </div>
					  </PanelRow>
				  	</PanelBody> 
					<PanelBody title={__("Typography", "pxblocks")} className="panel-typography" initialOpen={false}>
					<PanelRow>
						{/* Dropdown */}
						{fontOptions.length > 0 && (
							<div className="px-sidepanel">
								<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
									<ComboboxControl
										label="Headline Font Family"
										placeholder= 'Initial'
										value={foregroundHeadlineFont}
										allowReset={true}
										options={fontOptions}
										onChange={(newval) => setAttributes({ foregroundHeadlineFont: newval })}
										onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
											option.label.toLowerCase().startsWith(newval.toLowerCase())
										))}
									/>
								</div>
								<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
									<ComboboxControl
										label="Copy Font Family"
										placeholder= 'Initial'
										value={foregroundCopyFont}
										allowReset={true}
										options={fontOptions}
										onChange={(newval) => setAttributes({ foregroundCopyFont: newval })}
										onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
											option.label.toLowerCase().startsWith(newval.toLowerCase())
										))}
									/>
								</div>
								<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol">
									<ComboboxControl
										label="Caption Font Family"
										placeholder= 'Initial'
										value={foregroundCaptionFont}
										allowReset={true}
										options={fontOptions}
										onChange={(newval) => setAttributes({ foregroundCaptionFont: newval })}
										onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
											option.label.toLowerCase().startsWith(newval.toLowerCase())
										))}
									/>
								</div>
											{/*
								<div className="px-simplerow px-simplerow--padtop px-simplerow--padbottom px-simplerow--hascomboboxcontrol px-simplerow--hasborderbottom">
									<ComboboxControl
										label="Typographic Themes"
										placeholder= 'Select a Preset'
										allowReset={true}
										options={stylePresets}
										onChange={function(newval){
											if(newval === 'none'){
												setAttributes({ foregroundHeadlineFont: "inherit" });
												setAttributes({ foregroundCopyFont: "inherit" });
												setAttributes({ foregroundCaptionFont: "inherit" });
												setAttributes({ foregroundHeadlineFont: null });
												setAttributes({ foregroundCopyFont: null });
												setAttributes({ foregroundCaptionFont: null });
											}
											if(newval === 'news'){
												setAttributes({ foregroundHeadlineFont: "serif" });
												setAttributes({ foregroundCopyFont: "sansserif" });
												setAttributes({ foregroundCaptionFont: "sansserif" });
											}
											if(newval === 'magazine'){
												setAttributes({ foregroundHeadlineFont: "sansserif" });
												setAttributes({ foregroundCopyFont: "serif" });
												setAttributes({ foregroundCaptionFont: "sansserif" });
											}
											if(newval === 'technical'){
												setAttributes({ foregroundHeadlineFont: "monospace" });
												setAttributes({ foregroundCopyFont: "monospace" });
												setAttributes({ foregroundCaptionFont: "sansserif" });
											}
											if(newval === 'modern'){
												setAttributes({ foregroundHeadlineFont: "monospace" });
												setAttributes({ foregroundCopyFont: "sansserif" });
												setAttributes({ foregroundCaptionFont: "sansserif" });
											}
											if(newval === 'natural'){
												setAttributes({ foregroundHeadlineFont: "cursive" });
												setAttributes({ foregroundCopyFont: "sansserif" });
												setAttributes({ foregroundCaptionFont: "cursive" });
											}
										
										}}
										onInputChange = {(newval) => setFilteredOptions(options.filter(option =>
											option.label.toLowerCase().startsWith(newval.toLowerCase())
										))}
									/>
								</div>
								 */}
							</div>
							
						)}
						{/* Fallback note */}
						{fontOptions.length == 0 && (
							<p> No Font Families defined in theme.json, <a href="https://fullsiteediting.com/lessons/theme-json-typography-options/" target="_blank">read more</a>.</p>
						)}
						
					</PanelRow>
				</PanelBody>
				</Fragment>
			)}
			</Fragment>
		);
	}
}
