// WordPress modules
const { __ } = wp.i18n;
import { Component, Fragment} from '@wordpress/element';
import { InspectorControls } from '@wordpress/block-editor';

// Custom modules
import StyledPreview from "./StyledPreview/StyledPreview";
import { StyledTypeToggle } from "./StyledTypeToggle";
import { AccordionSavedStyles } from "./AccordionSavedStyles";
import { AccordionForeground } from "./AccordionForeground";
import { AccordionBackground } from "./AccordionBackground";
import {AccordionInterface} from "./AccordionInterface";
import {AccordionDimensions} from "./AccordionDimensions";
import { AccordionTypography } from "./AccordionTypography";

/**
 * Create a Block Controls wrapper Component
 */
export default class StyleControls extends Component {
	constructor() {
		super(...arguments);
	}
	render() {
		return (
			<Fragment>
				<InspectorControls>		
					<StyledTypeToggle {...this.props} />	
					<StyledPreview {...this.props} />
					<AccordionSavedStyles {...this.props} />
					<AccordionForeground {...this.props} />
					<AccordionBackground {...this.props} />
					<AccordionInterface {...this.props} />
					<AccordionDimensions {...this.props} />
					<AccordionTypography {...this.props} />
				</InspectorControls>			
			</Fragment>
		);
	}
}
