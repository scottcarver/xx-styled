import classnames from "classnames";

/*  Internal block libraries */
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { BaseControl, Button, IconButton, Placeholder, FocalPointPicker } = wp.components;
const { MediaUpload } = wp.blockEditor;
import "./editor.scss";

/* Create a Block Controls wrapper Component */
export default class ImageUploader extends Component {
	constructor() {
		super(...arguments);
	}
	componentDidMount() {}
	render() {
		// Get references to my attributes from Props
		const { setAttributes, useAttribute, useFocalPoint, useTitle, useSize } = this.props;

		// Get attributes dynamically
		const dynamicImage = this.props.attributes[useAttribute];
		const dynamicFocalPoint = this.props.attributes[useFocalPoint];

		// set attribute dynamically
		const ImageUploadSelect = function(imageObject) {
			setAttributes({ [useAttribute]: imageObject.sizes[useSize].url });
		};
		const FocalPointSelect = function(focalPointData) {
			setAttributes({ [useFocalPoint]: focalPointData });
		};

		return (
			<Fragment>
				{/* Foreground Image */}
				<BaseControl id="fg-image" label={useTitle}>
					<MediaUpload
						onSelect={ImageUploadSelect}
						type="image"
						value={dynamicImage} // make sure you destructured fgimage from props.attributes!
						render={({ open }) => (
							<Fragment>
								<div class="px-focalpoint">
									{dynamicImage ? (
										<FocalPointPicker url={dynamicImage} value={dynamicFocalPoint} onChange={FocalPointSelect} />
									) : (
										<Placeholder onClick={open} icon="format-image" label="Upload" value={dynamicImage} />
									)}
								</div>
								<div class="px-simplerow">
									{/* Would be better if classname was applied conditionally instead of this being duplicated */}
									{dynamicImage ? (
										<Button isDefault onClick={open}>
											Change Image
										</Button>
									) : (
										<Button isDefault onClick={open} className="is-fullwidth">
											Upload Image
										</Button>
									)}
									{/* Show Remove Button only if Image is assigned */}
									{dynamicImage && (
										<IconButton
											isDefault
											onClick={() => {
												setAttributes({ [useAttribute]: null });
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
