/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { Button, ButtonGroup, RangeControl } = wp.components;

/* Create a Block Controls wrapper Component */
export default class BGGradControl extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			positionVert,
			attributes: {
				backgroundGradientSize,
				backgroundGradientSizeCustom,
				backgroundGradientRepeat,
				backgroundGradientAttachment,
				backgroundGradientAlignVert,
				backgroundGradientAlignHori,
				backgroundGradientAlignVertCustom,
				backgroundGradientAlignHoriCustom
			},
			setAttributes
		} = this.props;

		return (
			<Fragment>
				{/* BACKGROUND SIZE */}
				<div class="px-simplerow px-simplerow--shortheadline">
					<h2>Background Size</h2>
				</div>
				<div class="px-buttongroup px-buttongroup--small">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isDefault
							isPrimary={backgroundGradientSize === "cover"}
							onClick={() => {
								setAttributes({ backgroundGradientSize: "cover" });
							}}
						>
							Cover
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientSize === "contain"}
							onClick={() => {
								setAttributes({ backgroundGradientSize: "contain" });
							}}
						>
							Contain
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientSize === "auto"}
							onClick={() => {
								setAttributes({ backgroundGradientSize: "auto" });
							}}
						>
							Auto
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientSize === "custom"}
							onClick={() => {
								setAttributes({ backgroundGradientSize: "custom" });
							}}
						>
							Custom
						</Button>
					</ButtonGroup>
				</div>

				{/* Only show custom size conditionally */}
				{backgroundGradientSize === "custom" && (
					<div class="px-columnrow px-columnrow--nolabel px-columnrow--spaceabove">
						<RangeControl
							label={__("Custom")}
							value={backgroundGradientSizeCustom}
							onChange={backgroundGradientSizeCustom => {
								setAttributes({
									backgroundGradientSizeCustom
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
							isDefault
							isPrimary={backgroundGradientRepeat === "no-repeat"}
							onClick={() => {
								setAttributes({
									backgroundGradientRepeat: "no-repeat"
								});
							}}
						>
							No
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientRepeat === "repeat"}
							onClick={() => {
								setAttributes({
									backgroundGradientRepeat: "repeat"
								});
							}}
						>
							Yes
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientRepeat === "repeat-x"}
							onClick={() => {
								setAttributes({
									backgroundGradientRepeat: "repeat-x"
								});
							}}
						>
							Repeat-x
						</Button>
						<Button
							isDefault
							isPrimary={backgroundGradientRepeat === "repeat-y"}
							onClick={() => {
								setAttributes({
									backgroundGradientRepeat: "repeat-y"
								});
							}}
						>
							Repeat-y
						</Button>
					</ButtonGroup>
				</div>

				{/* BACKGROUND ATTACHMENT 
				<div class="px-simplerow px-simplerow--shortheadline">
					<h2>Background Attachment</h2>
				</div>
				<div class="px-buttongroup px-buttongroup--centered">
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
				</div>*/}

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
								isDefault
								isPrimary={backgroundGradientAlignVert === "top"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignVert: "top" });
								}}
							>
								Top
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignVert === "center"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignVert: "center" });
								}}
							>
								Center
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignVert === "bottom"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignVert: "bottom" });
								}}
							>
								Bottom
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignVert === "custom"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignVert: "custom" });
								}}
							>
								Custom
							</Button>
						</ButtonGroup>
					</div>

					{/* Show Custom Vertical Control */}
					{backgroundGradientAlignVert == "custom" && (
						<div class="px-columnrow px-columnrow--smallspaceabove">
							<RangeControl
								label={__("Custom")}
								value={backgroundGradientAlignVertCustom}
								onChange={backgroundGradientAlignVertCustom => {
									setAttributes({
										backgroundGradientAlignVertCustom
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
								isDefault
								isPrimary={backgroundGradientAlignHori === "left"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignHori: "left" });
								}}
							>
								Left
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignHori === "center"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignHori: "center" });
								}}
							>
								Center
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignHori === "right"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignHori: "right" });
								}}
							>
								Right
							</Button>
							<Button
								isDefault
								isPrimary={backgroundGradientAlignHori === "custom"}
								onClick={() => {
									setAttributes({ backgroundGradientAlignHori: "custom" });
								}}
							>
								Custom
							</Button>
						</ButtonGroup>
					</div>

					{/* Show Custom Horizontal Control */}
					{backgroundGradientAlignHori == "custom" && (
						<div class="px-columnrow px-columnrow--smallspaceabove">
							<RangeControl
								label={__("Custom")}
								value={backgroundGradientAlignHoriCustom}
								onChange={backgroundGradientAlignHoriCustom => {
									setAttributes({
										backgroundGradientAlignHoriCustom
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
