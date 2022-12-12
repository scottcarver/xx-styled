
// Node modules
import classnames from "classnames";

// WordPress modules
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { FocalPointPicker, TabPanel, Button, ButtonGroup, RangeControl, ColorPicker } from '@wordpress/components';

// Custom Modules
import BGImgControl from "./BGImgControl";
import CalculatedTabset from "./CalculatedTabset";
import calculatedRgbaString from "../library/calculated/calculatedRgbaString";

/* Create a Block Controls wrapper Component */
export default class BGTabs extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() { }
	render() {
		const {
			attributes: {
				bgGelEnabled,
				bgColorCount,
				backgroundColor,
				bgGrad1,
				bgGrad2,
				backgroundGel,
				bgGrad1Start,
				bgGrad2Start,
				backgroundImage,
				bgGradientAttachment,
				gradientType,
				gradientLinearAngle,
				gradientAlignRadialHori,
				gradientAlignRadialVert,
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

		const bgcolor1classes = classnames(
			"px-colorbox",
			"px-colorbox--marginabove"
		);

		// 
		// 
		// ,
		// 	{ "px-colorbox--paddingbelow": bgColorCount == "gradient" },
		// 	{ "px-colorbox--linebelow": bgColorCount == "gradient" }

		const getBackgroundTab = name => {
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
							<input type="checkbox" id="bgcolorSwatch" name="bgcolorSwatch"></input>
							<label htmlFor="bgcolorSwatch">Palette</label>
							<ColorPalette 
								value={backgroundColor} 
								onChange={onColorChange} 
								enableAlpha={true}
							/>
						</div>

						<div className={bgcolor1classes}>
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
							]}
						>
							{tab => getGradientTab(tab.name)}
						</TabPanel>
					</Fragment>
				);
			}


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
							value={ focalPoint }
							onChange={focalPoint =>
								setAttributes({ focalPoint: focalPoint })
							}
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
								value={backgroundGel}
								onChange={backgroundGel => setAttributes({ backgroundGel })}
							/>
						</div>
						<div className="px-simplerow px-simplerow--padleft">
						{/* Background Image Enabled Toggle */}
						<div className={mycurrentproblem}>
							<ColorPicker
								color={backgroundGel}
								onChangeComplete={value =>
									setAttributes({
										backgroundGel: calculatedRgbaString(value)
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
								color={bgGrad1}
								onChangeComplete={value =>
									setAttributes({
										bgGrad1: calculatedRgbaString(value)
									})
								}
							/>
						</div>
						<div className="px-colorbox px-colorbox--nopicker">
							{/* <ColorIndicator colorValue={selectionFGColor} /> */}
							<input type="checkbox" id="bg1Swatch" name="bg1Swatch"></input>
							<label htmlFor="bg1Swatch">Palette</label>
							<ColorPalette
								value={bgGrad1}
								onChange={bgGrad1 => setAttributes({ bgGrad1 })}
							/>
						</div>
						<div className="px-colorbox">
							<h2>Gradient Color 2</h2>
							<ColorPicker
								color={bgGrad2}
								onChangeComplete={value =>
									setAttributes({
										bgGrad2: calculatedRgbaString(value)
									})
								}
							/>
						</div>
						<div className="px-colorbox px-colorbox--nopicker">
							<input type="checkbox" id="bg2Swatch" name="bg2Swatch"></input>
							<label htmlFor="bg2Swatch">Palette</label>
							<ColorPalette
								value={bgGrad2}
								onChange={bgGrad2 => setAttributes({ bgGrad2 })}
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
								value={bgGrad1Start}
								onChange={bgGrad1Start => {
									setAttributes({
										bgGrad1Start
									});
								}}
								min={-50}
								max={200}
							/>
						</div>
						<div className="px-columnrow">
							<RangeControl
								label={__("Color 2")}
								value={bgGrad2Start}
								onChange={bgGrad2Start => {
									setAttributes({
										bgGrad2Start
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
									isPrimary={bgGradientAttachment === "scroll"}
									onClick={() => {
										setAttributes({
											bgGradientAttachment: "scroll"
										});
									}}
								>
									Scroll
								</Button>
								<Button
									isDefault
									isPrimary={bgGradientAttachment === "fixed"}
									onClick={() => {
										setAttributes({
											bgGradientAttachment: "fixed"
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
		};

		return (
			<Fragment>
				{themTabs.length > 0 && rendermyComponent && (
					<TabPanel className={backgroundTabClasses} activeClass="active-tab" tabs={themTabs}>
						{tab => getBackgroundTab(tab.name)}
					</TabPanel>
				)}
			</Fragment>
		);
	}
}
