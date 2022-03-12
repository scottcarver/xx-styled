/* BGGradControl is meant to be generic, it can be reused any time a background image or radial gradient bckground control is needed */

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BaseControl, Button, IconButton, Placeholder, FocalPointPicker } = wp.components;
const { MediaUpload } = wp.blockEditor;

/* Create a Block Controls wrapper Component */
export default class ImageUploader extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() {}
	render() {
		const { myTitle, linkedAttribute, attributes, setAttributes } = this.props;
		const { bgimage, fgimage, focalPoint } = attributes;

		const onBGImageSelect = function(imageObject) {
			setAttributes({ bgimage: imageObject.sizes.full.url });
		};
		const onFGImageSelect = function(imageObject) {
			setAttributes({ fgimage: imageObject.sizes.full.url });
		};

		const dimensions = {
			width: 200,
			height: 115
		};

		// const myFocalPoint = JSON.parse(focalPoint);
		/*
		const DynamicAttributes = function(imageObject, linkedAttribute) {
			console.log("linked attr is");
			console.log(Object.keys(linkedAttribute)[0]);
			return { [linkedAttribute]: imageObject.sizes.full.url };
		};
		*/

		return (
			<Fragment>
				{/* Foreground Image */}
				<BaseControl id="fg-image" label="Foreground Image">
					<MediaUpload
						// onSelect={(imageObject) => console.log(imageObject)}
						onSelect={onFGImageSelect}
						type="image"
						value={fgimage} // make sure you destructured fgimage from props.attributes!
						render={({ open }) => (
							<Fragment>
								<div class="px-focalpoint">
									{fgimage ? (
										<FocalPointPicker
											url={fgimage}
											value={focalPoint}
											onChange={value => setAttributes({ focalPoint: value })}
											// onChange={focalPoint => setAttributes({ focalPoint })}
										/>
									) : (
										<Placeholder onClick={open} icon="format-image" label="Upload" value={fgimage} />
									)}
								</div>
								<div class="px-simplerow">
									{/* Would be better if classname was applied conditionally instead of this being duplicated */}
									{fgimage ? (
										<Button isDefault onClick={open}>
											Change Image
										</Button>
									) : (
										<Button isDefault onClick={open} className="is-fullwidth">
											Upload Image
										</Button>
									)}
									{/* Show Remove Button only if Image is assigned */}
									{fgimage && (
										<IconButton
											isDefault
											onClick={() => {
												setAttributes({ fgimage: null });
											}}
											icon="no-alt"
											label="Remove"
										>
											Remove
										</IconButton>
									)}
								</div>
							</Fragment>
						)}
					/>
				</BaseControl>
				{/* Background Image */}
				<BaseControl id="bg-image" label="Background Image">
					<MediaUpload
						onSelect={onBGImageSelect}
						type="image"
						value={bgimage} // make sure you destructured bgimage from props.attributes!
						render={({ open }) => (
							<Fragment>
								<div class="px-image">
									{bgimage ? (
										<img src={bgimage} />
									) : (
										<Placeholder onClick={open} icon="format-image" label="Upload" value={bgimage} />
									)}
								</div>
								<div class="px-simplerow">
									{bgimage ? (
										<Button isDefault onClick={open}>
											Change Image
										</Button>
									) : (
										<Button isDefault onClick={open} className="is-fullwidth">
											Upload Image
										</Button>
									)}
									{/* Show Remove Button only if Image is assigned */}
									{bgimage && (
										<IconButton
											isDefault
											onClick={() => {
												setAttributes({ bgimage: null });
											}}
											icon="no-alt"
											label="Remove"
										>
											Remove
										</IconButton>
									)}
								</div>
							</Fragment>
						)}
					/>
				</BaseControl>
			</Fragment>
		);
	}
}
