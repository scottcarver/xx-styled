/* Internal block libraries */
const { __ } = wp.i18n;
const { Component } = wp.element;
const { FormToggle } = wp.components;

/* Create a Block Controls wrapper Component */
export default class RowHeader extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		const {
			attributes: { styleEnabled, bgColorEnabled },
			setAttributes
		} = this.props;
		const toggleStyleEnabled = () =>
			setAttributes({ styleEnabled: !styleEnabled });

		return (
			<div class="px-simplerow px-simplerow--first">
				<label htmlFor="styleenabled-form-toggle">
					{__("Styles Enabled", "pxblocks")}
				</label>
				<FormToggle
					id="styleenabled-form-toggle"
					label={__("Styles Enabled?", "pxblocks")}
					checked={styleEnabled}
					onChange={toggleStyleEnabled}
				/>
			</div>
		);
	}
}
