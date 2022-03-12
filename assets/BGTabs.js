/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

// Node modules
import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
import { Component, Fragment } from '@wordpress/element';
import { ColorPalette, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

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
import BGGradControl from "./BGGradControl";
// import BGCurrentTabset from "./BGCurrentTabset"; // Component

import calculatedTabset from "./lib/js/calculatedTabset"; // Function Component
import ColorObgtoRgbaString from "./lib/js/ColorObgtoRgbaString";

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
				backgroundColor0,
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
				foregroundCaptionFont
			},
			setAttributes
		} = this.props;

		const rendermyComponent = true;
		const themTabs = calculatedTabset(this.props);
		const backgroundTabClasses = classnames("px-tabwrap px-tabwrap--margintop", { "px-tabwrap--centered": themTabs.length > 0 });

		const onImageSelect = imageObject => setAttributes({ backgroundImage: imageObject.sizes.full.url });

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
			console.log("got here!");
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
						<div className={bgcolor1classes}>
							<h2>Color</h2>
							<ColorIndicator colorValue={backgroundColor0} />
							<ColorPalette
								enableAlpha
								value={backgroundColor0}
								onChange={backgroundColor0 => setAttributes({ backgroundColor0 })}
							/>
							<ColorPicker
								color={backgroundColor0}
								onChangeComplete={value => setAttributes({ backgroundColor0: value.hex })}
								disableAlpha
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
						<div class="px-simplerow px-simplerow--shortheadline">
							<h2 style={{ textAlign: "center" }}>Gradient Type</h2>
						</div>

						<div class="px-buttongroup px-buttongroup--split">
							<ButtonGroup aria-label={__("Column Layout")}>
								<Button
									isDefault
									isPrimary={gradientType === "linear"}
									onClick={() => {
										setAttributes({ gradientType: "linear" });
									}}
								>
									Linear
								</Button>
								<Button
									isDefault
									isPrimary={gradientType === "radial"}
									onClick={() => {
										setAttributes({ gradientType: "radial" });
									}}
								>
									Radial
								</Button>
							</ButtonGroup>
						</div>

						<div class="px-simplerow">
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

			// Image Tab
			if (name == "bgimagetab") {
				return (
					<Fragment>
						{/* Background Image Enabled Toggle */}

						<div class="px-simplerow px-simplerow--shortheadline">
							<h2>Background Image</h2>
						</div>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={onImageSelect}
								value={backgroundImage}
								render={({ open }) => <Button onClick={open}>Open Media Library</Button>}
							/>
						</MediaUploadCheck>
						{backgroundImage && (
							<Fragment>
								<BGImgControl {...{ setAttributes, ...this.props }} />
							</Fragment>
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
						{/* Background Image Enabled Toggle */}
						<div className={mycurrentproblem}>
							<ColorPicker
								color={backgroundColor3}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor3: ColorObgtoRgbaString(value)
									})
								}
							/>
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
						<div class="px-colorbox">
							<h2>Gradient Color 1</h2>
							<ColorPicker
								color={backgroundColor1}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor1: ColorObgtoRgbaString(value)
									})
								}
							/>
						</div>
						<div class="px-colorbox">
							<h2>Gradient Color 2</h2>
							<ColorPicker
								color={backgroundColor2}
								onChangeComplete={value =>
									setAttributes({
										backgroundColor2: ColorObgtoRgbaString(value)
									})
								}
							/>
						</div>
					</Fragment>
				);
			}

			// Gradient Tab
			if (name == "gradsettingstab") {
				return (
					<Fragment>
						<div class="px-simplerow">
							<h2>Start Position</h2>
						</div>
						<div class="px-columnrow">
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
						<div class="px-columnrow">
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
							<div class="px-columnrow">
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
								<div class="px-simplerow">
									<h2>Alignment</h2>
								</div>

								<div class="px-columnrow">
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

								<div class="px-columnrow">
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
						<div class="px-simplerow px-simplerow--shortheadline">
							<h2>Background Attachment</h2>
						</div>
						<div class="px-buttongroup">
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
				<div class="px-simplerow px-simplerow--shortheadline">
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
