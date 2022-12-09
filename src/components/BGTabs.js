/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

// Node modules
import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { FocalPointPicker } from '@wordpress/components';


const {
	TabPanel,
	Button,
	ButtonGroup,
	RangeControl,
	IconButton,
	Placeholder,
	ColorIndicator,
	ColorPicker
} = wp.components;

// My helper code
import BGImgControl from "./BGImgControl";
import BGGradControl from "../../assets/BGGradControl";

import CalculatedTabset from "./CalculatedTabset"; // Function Component
import calculatedRgbaString from "../library/calculated/calculatedRgbaString";

/* Create a Block Controls wrapper Component */
export default class BGTabs extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() { }
	render() {
		const {
			positionVert,
			attributes: {
				blockID,
				styleEnabled,
				heightEnabled,
				bgColorEnabled,
				bgGradientEnabled,
				bgImageEnabled,
				bgGelEnabled,
				backgroundColorCount,
				foregroundColor,
				backgroundColor,
				backgroundColor1,
				backgroundColor2,
				backgroundColor3,
				backgroundColor1Start,
				backgroundColor2Start,
				backgroundImage,
				backgroundStackFirst,
				backgroundGradientAttachment,
				gradientType,
				gradientLinearAngle,
				gradientAlignRadialHori,
				gradientAlignRadialVert,
				selectionFGColor,
				selectionBGColor,
				foregroundHeadlineFont,
				foregroundCopyFont,
				foregroundCaptionFont,
				focalPoint
			},
			setAttributes
		} = this.props;

		const rendermyComponent = true;
		const themTabs = CalculatedTabset(this.props);
		const backgroundTabClasses = classnames("px-tabwrap px-tabwrap--margintop", { 
			"px-tabwrap--centered": themTabs.length > 0,
			"px-tabwrap--single": themTabs.length === 1,
		});

		const onImageSelect = imageObject => setAttributes({ backgroundImage: imageObject.sizes.full.url });
		const onColorChange = function(colorValue){
			console.log( "changed to", colorValue);
			setAttributes({ backgroundColor: colorValue });
		}
		/*
		const onSelect = tabName => {
			console.log("Selecting tab", tabName);
        };
        */

		const bgcolor1classes = classnames(
			"px-colorbox",
			"px-colorbox--marginabove",
			{ "px-colorbox--paddingbelow": backgroundColorCount == "gradient" },
			{ "px-colorbox--linebelow": backgroundColorCount == "gradient" }
		);

		const getBackgroundTab = name => {
			// console.log("got here!");
			// Help Tab
			if (name == "bghelptab") {
				return (
					<Fragment>
						<h1>Halp</h1>
					</Fragment>
				);
			}
			// Color Tab
			if (name == "bgcolortab") {
				return (
					<Fragment>
						<div className="px-colorbox">
							<h2>Color</h2>
							{/* <ColorIndicator colorValue={foregroundColor} /> */}
							<input type="checkbox" id="bgcolorSwatch" name="bgcolorSwatch"></input>
							<label htmlFor="bgcolorSwatch">Palette</label>
							<ColorPalette 
								value={backgroundColor} 
								// onChange={backgroundColor => setAttributes({ backgroundColor })} 
								onChange={onColorChange} 
								enableAlpha={true}
								// clearable={false}
							/>
						</div>

						<div className={bgcolor1classes}>
							{/* <h2>Color</h2>
							<ColorIndicator colorValue={backgroundColor} />
							<ColorPalette
								enableAlpha
								value={backgroundColor}
								onChange={backgroundColor => setAttributes({ backgroundColor })}
							/> */}
							<ColorPicker
								color={backgroundColor}
								onChangeComplete={value => setAttributes({ backgroundColor: value.hex })}
								
							/>
						</div>
					</Fragment>
				);
			}

			// Gradient Tab
			if (name == "bggradienttab") {
				return (
					<Fragment>
						{/* Gradient Enabled Toggle */}
						<div className="px-simplerow px-simplerow--shortheadline">
							<h2 style={{ textAlign: "center" }}>Gradient Type</h2>
						</div>

						<div className="px-buttongroup px-buttongroup--split">
							<ButtonGroup aria-label={__("Column Layout")}>
								<Button
									isDefault
									isPrimary={gradientType === "linear"}
									onClick={() => {  setAttributes({ gradientType: "linear" }); }}
								>
									Linear
								</Button>
								<Button
									isDefault
									isPrimary={gradientType === "radial"}
									onClick={() => { setAttributes({ gradientType: "radial" }); }}
								>
									Radial
								</Button>
							</ButtonGroup>
						</div>

						<div className="px-simplerow">
							<h2 style={{ textAlign: "center" }}>Gradient Settings</h2>
						</div>

						{/* Tab that includes Gradient Settings */}
						<TabPanel
							className="px-tabwrap px-tabwrap--centered"
							activeClass="active-tab"
							initialTabName="gradcolortab"
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
					</Fragment>
				);
			}

			const dimensions = {
				width: 400,
				height: 100,
			};

			

			// Image Tab
			if (name == "bgimagetab") {
				return (
					
					<Fragment>
						{/* Background Image Enabled Toggle */}
						{backgroundImage && (
						<Fragment>
						<div className="px-simplerow px-simplerow--shortheadline">
							<h2>Background Image</h2>
						</div>

						<FocalPointPicker
							url={ backgroundImage }
							// dimensions={ dimensions }
							value={ focalPoint }
							onChange={focalPoint =>
								setAttributes({
									focalPoint: focalPoint
								})
							}
							// onChange={ ( focalPoint ) => setFocalPoint( { focalPoint } ) }
						/>
						</Fragment>
						)}
						<div className="px-simplerow px-simplerow--mediaupload">
						{!backgroundImage && (
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								onSelect={onImageSelect}
								value={backgroundImage}
								render={({ open }) => <Button onClick={open}>
									<span>Select Image</span>
								</Button>}
							/>
						</MediaUploadCheck>
						)}
						{backgroundImage && (
						<button className="clear-button" onClick={event =>
								setAttributes({
									backgroundImage: null
								})
							}>Remove Image</button>
							)}
						</div>

						{backgroundImage && (
							<BGImgControl {...{ setAttributes, ...this.props }} />
						)}
					

						{/* END BACKGROUND IMAGE TAB */}
					</Fragment>
				);
			}

			const mycurrentproblem = classnames("px-statusbox", {
				"px-statusbox--disabled": !bgGelEnabled
			});
			// BG Gel Tab
			if (name == "bggeltab") {
				return (
					<Fragment>
						<div className="px-colorbox px-colorbox--paddingbelow px-colorbox--linebelow">
							<h2>Background Gel</h2>
							{/* <ColorIndicator colorValue={selectionFGColor} /> */}
							<input type="checkbox" id="bg3Swatch" name="bg3Swatch"></input>
							<label htmlFor="bg3Swatch">Palette</label>
							<ColorPalette
								value={backgroundColor3}
								onChange={backgroundColor3 => setAttributes({ backgroundColor3 })}
							/>
						</div>
						<div className="px-simplerow px-simplerow--padleft">
						{/* Background Image Enabled Toggle */}
						<div className={mycurrentproblem}>
							<ColorPicker
								color={backgroundColor3}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor3: calculatedRgbaString(value)
									})
								}
							/>
						</div>
						</div>
					
						{/* END BACKGROUND IMAGE TAB */}
					</Fragment>
				);
			}
		};

		const getGradientTab = name => {
			// Color Tab
			if (name == "gradcolortab") {
				return (
					<Fragment>
				
						<div className="px-colorbox">
							<h2>Gradient Color 1</h2>
							<ColorPicker
								color={backgroundColor1}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor1: calculatedRgbaString(value)
									})
								}
							/>
						</div>
						<div className="px-colorbox px-colorbox--nopicker">
							{/* <ColorIndicator colorValue={selectionFGColor} /> */}
							<input type="checkbox" id="bg1Swatch" name="bg1Swatch"></input>
							<label htmlFor="bg1Swatch">Palette</label>
							<ColorPalette
								value={backgroundColor1}
								onChange={backgroundColor1 => setAttributes({ backgroundColor1 })}
							/>
						</div>
						<div className="px-colorbox">
							<h2>Gradient Color 2</h2>
							<ColorPicker
								color={backgroundColor2}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor2: calculatedRgbaString(value)
									})
								}
							/>
						</div>
						<div className="px-colorbox px-colorbox--nopicker">
							<input type="checkbox" id="bg2Swatch" name="bg2Swatch"></input>
							<label htmlFor="bg2Swatch">Palette</label>
							<ColorPalette
								value={backgroundColor2}
								onChange={backgroundColor2 => setAttributes({ backgroundColor2 })}
							/>
						</div>
					</Fragment>
				);
			}

			// Gradient Tab
			if (name == "gradsettingstab") {
				return (
					<Fragment>
						<div className="px-simplerow">
							<h2>Start Position</h2>
						</div>
						<div className="px-columnrow">
							<RangeControl
								label={__("Color 1")}
								value={backgroundColor1Start}
								onChange={backgroundColor1Start => {
									setAttributes({
										backgroundColor1Start
									});
								}}
								min={-50}
								max={200}
							/>
						</div>
						<div className="px-columnrow">
							<RangeControl
								label={__("Color 2")}
								value={backgroundColor2Start}
								onChange={backgroundColor2Start => {
									setAttributes({
										backgroundColor2Start
									});
								}}
								min={-50}
								max={200}
							/>
						</div>

						{gradientType === "linear" && (
							<div className="px-columnrow">
								<RangeControl
									label={__("Angle")}
									value={gradientLinearAngle}
									onChange={gradientLinearAngle => {
										setAttributes({
											gradientLinearAngle
										});
									}}
									min={0}
									max={365}
								/>
							</div>
						)}

						{/* Radial Gradient Controls*/}
						{gradientType === "radial" && (
							<Fragment>
								<div className="px-simplerow">
									<h2>Alignment</h2>
								</div>

								<div className="px-columnrow">
									<RangeControl
										label={__("From Top")}
										value={gradientAlignRadialVert}
										onChange={gradientAlignRadialVert => {
											setAttributes({
												gradientAlignRadialVert
											});
										}}
										min={-50}
										max={200}
									/>
								</div>

								<div className="px-columnrow">
									<RangeControl
										label={__("From Left")}
										value={gradientAlignRadialHori}
										onChange={gradientAlignRadialHori => {
											setAttributes({
												gradientAlignRadialHori
											});
										}}
										min={-50}
										max={200}
									/>
								</div>
							</Fragment>
						)}

						{/* BACKGROUND ATTACHMENT */}
						<div className="px-simplerow px-simplerow--shortheadline">
							<h2>Background Attachment</h2>
						</div>
						<div className="px-buttongroup">
							<ButtonGroup aria-label={__("Column Layout")}>
								<Button
									isDefault
									isPrimary={backgroundGradientAttachment === "scroll"}
									onClick={() => {
										setAttributes({
											backgroundGradientAttachment: "scroll"
										});
									}}
								>
									Scroll
								</Button>
								<Button
									isDefault
									isPrimary={backgroundGradientAttachment === "fixed"}
									onClick={() => {
										setAttributes({
											backgroundGradientAttachment: "fixed"
										});
									}}
								>
									Fixed
								</Button>
							</ButtonGroup>
						</div>
					</Fragment>
				);
			}
			{
				/* 
			// Image Tab
			if (name == "gradbgtab") {
				return (
					<Fragment>
						<BGGradControl {...{ setAttributes, ...this.props }} />
					</Fragment>
				);
			}
			*/
			}
		};

		return (
			<Fragment>
				{/* BACKGROUND Tabs
				<div className="px-simplerow px-simplerow--shortheadline">
					<h2>Background Tabs!</h2>
				</div>
                 */}
				{themTabs.length > 0 && rendermyComponent && (
					<TabPanel className={backgroundTabClasses} activeClass="active-tab" tabs={themTabs}>
						{tab => getBackgroundTab(tab.name)}
					</TabPanel>
				)}
			</Fragment>
		);
	}
}
