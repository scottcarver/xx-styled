/* BGImgControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
// const { Button, ButtonGroup, RangeControl } = wp.components;
import { __experimentalUnitControl as UnitControl,  Button, ButtonGroup, RangeControl } from '@wordpress/components';
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
				bgImageSize,
				bgImageSizeSm,
				bgImageSizeMd,
				bgImageRepeat,
				bgImageAttachment
			},
			setAttributes
		} = this.props;

		let defaultUnits = [
			{
			default: 33,
			label: '%',
			value: '%'
			},
			{
			default: 33,
			label: 'vw',
			value: 'vw'
			},
			{
			default: 20,
			label: 'vh',
			value: 'vh'
			},
			{
			default: 500,
			label: 'px',
			value: 'px'
			}
		];

		return (
			<Fragment>
				{/* BACKGROUND SIZE */}
				<div className="px-simplerow  px-simplerow--shortheadline">
					<h2>Background Size</h2>
				</div>
				<div className="px-buttongroup px-buttongroup--small">
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
					<Fragment>



						<div className="px-triptych">
							<div>
								<UnitControl
									label="Small"
									onChange={(newdata) => { setAttributes({ bgImageSizeSm: newdata }); }} 
									value={bgImageSizeSm}
									units={defaultUnits}
								/>
							</div>
							<div>
								<UnitControl
									label="Medium"
									onChange={(newdata) => { setAttributes({ bgImageSizeMd: newdata }); }} 
									value={bgImageSizeMd}
									units={defaultUnits}
								/>
							</div>
							<div>
								<UnitControl
									label="Large"
									onChange={(newdata) => { setAttributes({ bgImageSize: newdata }); }} 
									value={bgImageSize}
									units={defaultUnits}
								/>
							</div>
						</div>
{/* 						
						Two
						<div className="px-columnrow px-columnrow--nolabel px-columnrow--spaceabove">
							<RangeControl
								label={__("Custom")}
								value={bgImageSize}
								onChange={bgImageSize => {
									setAttributes({
										bgImageSize
									});
								}}
								min={0}
								max={200}
							/>
						</div>
						Three */}
					</Fragment>
				)}

				{/* BACKGROUND REPEAT */}
				<div className="px-simplerow px-simplerow--shortheadline">
					<h2>Background Repeat</h2>
				</div>
				<div className="px-buttongroup px-buttongroup--small">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isPrimary={bgImageRepeat === "no-repeat"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "no-repeat"
								});
							}}
						>
							No
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat"
								});
							}}
						>
							Yes
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat-x"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat-x"
								});
							}}
						>
							Repeat-x
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat-y"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat-y"
								});
							}}
						>
							Repeat-y
						</Button>
					</ButtonGroup>
				</div>

				{/* BACKGROUND ATTACHMENT */}
				<div className="px-simplerow px-simplerow--shortheadline">
					<h2>Background Attachment</h2>
				</div>
				<div className="px-buttongroup">
					<ButtonGroup aria-label={__("Column Layout")}>
						<Button
							isPrimary={bgImageAttachment === "scroll"}
							onClick={() => {
								setAttributes({
									bgImageAttachment: "scroll"
								});
							}}
						>
							Scroll
						</Button>
						<Button
							isPrimary={bgImageAttachment === "fixed"}
							onClick={() => {
								setAttributes({
									bgImageAttachment: "fixed"
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
}
