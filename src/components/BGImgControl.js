/* BGImgControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
import { __experimentalUnitControl as UnitControl,  Button, ButtonGroup} from '@wordpress/components';

/* Create a Block Controls wrapper Component */
export default class BGImgControl extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: {
				bgImageSizeDefault,
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
							isPrimary={bgImageSizeDefault === "cover"}
							onClick={() => {
								setAttributes({ bgImageSizeDefault: "cover" });
							}}>
							Cover
						</Button>
						<Button
							isPrimary={bgImageSizeDefault === "contain"}
							onClick={() => {
								setAttributes({ bgImageSizeDefault: "contain" });
							}}>
							Contain
						</Button>
						<Button
							isPrimary={bgImageSizeDefault === "auto"}
							onClick={() => {
								setAttributes({ bgImageSizeDefault: "auto" });
							}}>
							Auto
						</Button>
						<Button
							isPrimary={bgImageSizeDefault === "custom"}
							onClick={() => {
								setAttributes({ bgImageSizeDefault: "custom" });
							}}>
							Custom
						</Button>
					</ButtonGroup>
				</div>

				{/* Only show custom size conditionally */}
				{bgImageSizeDefault === "custom" && (
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
							}}>
							No
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat"
								});
							}}>
							Yes
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat-x"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat-x"
								});
							}}>
							Repeat-x
						</Button>
						<Button
							isPrimary={bgImageRepeat === "repeat-y"}
							onClick={() => {
								setAttributes({
									bgImageRepeat: "repeat-y"
								});
							}}>
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
							}}>
							Scroll
						</Button>
						<Button
							isPrimary={bgImageAttachment === "fixed"}
							onClick={() => {
								setAttributes({
									bgImageAttachment: "fixed"
								});
							}}>
							Fixed
						</Button>
					</ButtonGroup>
				</div>

			</Fragment>
		);
	}
}
