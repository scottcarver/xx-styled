/* BGImgControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, ButtonGroup, RangeControl } = wp.components;

/* Create a Block Controls wrapper Component */
export default class BGImgControl extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			positionVert,
			attributes: {
				backgroundImageSize,
				backgroundImageSizeCustom,
				backgroundImageRepeat,
				backgroundImageAttachment,
				backgroundImageAlignVert,
				backgroundImageAlignHori,
				backgroundImageAlignVertCustom,
				backgroundImageAlignHoriCustom
			},
			setAttributes
		} = this.props;

		return (
			<Fragment>
				{/* BACKGROUND SIZE */}
				<div class="px-simplerow  px-simplerow--shortheadline">
					<h2>Background Size</h2>
				</div>
				<div class="px-buttongroup px-buttongroup--small">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isPrimary={backgroundImageSize === "cover"}
							onClick={() => {
								setAttributes({ backgroundImageSize: "cover" });
							}}
						>
							Cover
						</Button>
						<Button
							isPrimary={backgroundImageSize === "contain"}
							onClick={() => {
								setAttributes({ backgroundImageSize: "contain" });
							}}
						>
							Contain
						</Button>
						<Button
							isPrimary={backgroundImageSize === "auto"}
							onClick={() => {
								setAttributes({ backgroundImageSize: "auto" });
							}}
						>
							Auto
						</Button>
						<Button
							isPrimary={backgroundImageSize === "custom"}
							onClick={() => {
								setAttributes({ backgroundImageSize: "custom" });
							}}
						>
							Custom
						</Button>
					</ButtonGroup>
				</div>

				{/* Only show custom size conditionally */}
				{backgroundImageSize === "custom" && (
					<div class="px-columnrow px-columnrow--nolabel px-columnrow--spaceabove">
						<RangeControl
							label={__("Custom")}
							value={backgroundImageSizeCustom}
							onChange={backgroundImageSizeCustom => {
								setAttributes({
									backgroundImageSizeCustom
								});
							}}
							min={0}
							max={200}
						/>
					</div>
				)}

				{/* BACKGROUND REPEAT */}
				<div class="px-simplerow px-simplerow--shortheadline">
					<h2>Background Repeat</h2>
				</div>
				<div class="px-buttongroup px-buttongroup--small">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isPrimary={backgroundImageRepeat === "no-repeat"}
							onClick={() => {
								setAttributes({
									backgroundImageRepeat: "no-repeat"
								});
							}}
						>
							No
						</Button>
						<Button
							isPrimary={backgroundImageRepeat === "repeat"}
							onClick={() => {
								setAttributes({
									backgroundImageRepeat: "repeat"
								});
							}}
						>
							Yes
						</Button>
						<Button
							isPrimary={backgroundImageRepeat === "repeat-x"}
							onClick={() => {
								setAttributes({
									backgroundImageRepeat: "repeat-x"
								});
							}}
						>
							Repeat-x
						</Button>
						<Button
							isPrimary={backgroundImageRepeat === "repeat-y"}
							onClick={() => {
								setAttributes({
									backgroundImageRepeat: "repeat-y"
								});
							}}
						>
							Repeat-y
						</Button>
					</ButtonGroup>
				</div>

				{/* BACKGROUND ATTACHMENT */}
				<div class="px-simplerow px-simplerow--shortheadline">
					<h2>Background Attachment</h2>
				</div>
				<div class="px-buttongroup">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isPrimary={backgroundImageAttachment === "scroll"}
							onClick={() => {
								setAttributes({
									backgroundImageAttachment: "scroll"
								});
							}}
						>
							Scroll
						</Button>
						<Button
							isPrimary={backgroundImageAttachment === "fixed"}
							onClick={() => {
								setAttributes({
									backgroundImageAttachment: "fixed"
								});
							}}
						>
							Fixed
						</Button>
					</ButtonGroup>
				</div>

				{/* BACKGROUND POSITION */}
				<div class="px-simplerow px-simplerow--shortheadline">
					<h2>Background Position</h2>
					{this.props.position}
				</div>
				<div class="px-sidepanel">
					{/* Vertical Toggle */}
					<div class="px-simplerow">
						<label>Vertical</label>
					</div>
					<div class="px-buttongroup px-buttongroup--small">
						<ButtonGroup aria-label={__("Column Layout")}>
							<Button
								isPrimary={backgroundImageAlignVert === "top"}
								onClick={() => {
									setAttributes({ backgroundImageAlignVert: "top" });
								}}
							>
								Top
							</Button>
							<Button
								isPrimary={backgroundImageAlignVert === "center"}
								onClick={() => {
									setAttributes({ backgroundImageAlignVert: "center" });
								}}
							>
								Center
							</Button>
							<Button
								isPrimary={backgroundImageAlignVert === "bottom"}
								onClick={() => {
									setAttributes({ backgroundImageAlignVert: "bottom" });
								}}
							>
								Bottom
							</Button>
							<Button
								isPrimary={backgroundImageAlignVert === "custom"}
								onClick={() => {
									setAttributes({ backgroundImageAlignVert: "custom" });
								}}
							>
								Custom
							</Button>
						</ButtonGroup>
					</div>

					{/* Show Custom Vertical Control */}
					{backgroundImageAlignVert == "custom" && (
						<div class="px-columnrow px-columnrow--smallspaceabove">
							<RangeControl
								label={__("Custom")}
								value={backgroundImageAlignVertCustom}
								onChange={backgroundImageAlignVertCustom => {
									setAttributes({
										backgroundImageAlignVertCustom
									});
								}}
								min={-50}
								max={200}
							/>
						</div>
					)}

					{/* Horizontal Toggle */}
					<div class="px-simplerow px-simplerow--padtop">
						<label>Horizontal</label>
						<br />
					</div>
					<div class="px-buttongroup px-buttongroup--small">
						<ButtonGroup aria-label={__("Column Layout")}>
							<Button
								isPrimary={backgroundImageAlignHori === "left"}
								onClick={() => {
									setAttributes({ backgroundImageAlignHori: "left" });
								}}
							>
								Left
							</Button>
							<Button
								isPrimary={backgroundImageAlignHori === "center"}
								onClick={() => {
									setAttributes({ backgroundImageAlignHori: "center" });
								}}
							>
								Center
							</Button>
							<Button
								isPrimary={backgroundImageAlignHori === "right"}
								onClick={() => {
									setAttributes({ backgroundImageAlignHori: "right" });
								}}
							>
								Right
							</Button>
							<Button
								isPrimary={backgroundImageAlignHori === "custom"}
								onClick={() => {
									setAttributes({ backgroundImageAlignHori: "custom" });
								}}
							>
								Custom
							</Button>
						</ButtonGroup>
					</div>

					{/* Show Custom Horizontal Control */}
					{backgroundImageAlignHori == "custom" && (
						<div class="px-columnrow px-columnrow--smallspaceabove">
							<RangeControl
								label={__("Custom")}
								value={backgroundImageAlignHoriCustom}
								onChange={backgroundImageAlignHoriCustom => {
									setAttributes({
										backgroundImageAlignHoriCustom
									});
								}}
								min={-50}
								max={200}
							/>
						</div>
					)}
				</div>
			</Fragment>
		);
	}
}
