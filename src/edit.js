
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
// Node modules
import classnames from "classnames";
// const { InnerBlocks  } = '@wp/blockEditor';
import StyleControls from "../assets/styleControls";
import OnPageStyle from "../assets/OnPageStyle";
import AdminStyle from "../assets/AdminStyle";

export default function Edit(props) {
//	const props = useBlockProps();
	console.log("edit props", props);
	const {
		attributes: {
			styleEnabled,
			blockID,
			heightEnabled,
			foregroundColor,
			blockAlignment,
			highContrast,
			foregroundHeadlineFont,
			foregroundCopyFont,
			foregroundCaptionFont,
			spacingMobile,
			spacingTablet,
			spacingDesktop
		},
		className,
		clientId
	} = props;

	const { setAttributes } = props;

	if (blockID == "") {
		setAttributes({ blockID: clientId });
	}

	const classes = classnames(
		className,
		"wp-block--section",
		`wp-block-section--${blockID}`,
		{ "wp-block--heightenabled": heightEnabled },
		`wp-block--headline-${foregroundHeadlineFont}`,
		`wp-block--copy-${foregroundCopyFont}`,
		`wp-block--caption-${foregroundCaptionFont}`
	);

	const styleObj = { 
		'--foregroundColor': foregroundColor
	};

	const blockProps = useBlockProps( {
		className: classes,
		style: styleEnabled ? styleObj : {},
		id: blockID,
		'data-test': 'data attributes'
	});

	return (
		<div {...blockProps}>
			
			{/* Admin Padding Preview */}
			{styleEnabled && ( <AdminStyle {...{ setAttributes, ...props }} /> )}

			{/* Sidebar */}
			<InspectorControls><StyleControls {...{ setAttributes, ...props }} /></InspectorControls>
			
			{/* Inline CSS */}
			{styleEnabled && ( <OnPageStyle {...{ setAttributes, ...props }} /> )}

			{/* Inner Blocks */}
			<InnerBlocks />
		</div>
	);
}
