
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
// Node modules
import classnames from "classnames";
import { Fragment } from '@wordpress/element';
// const { InnerBlocks  } = '@wp/blockEditor';
import StyleControls from "../assets/styleControls";
import OnPageStyle from "../assets/OnPageStyle";

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
			<Fragment>
				<div className='badoop' style={{position:'absolute',width:'100%',height:'100%', top:0, left:0, maxWidth:"none"}}>
					<div className='subbadoop' style={{border:"dashed 1px black",height:"100%"}}>
						badoop
					</div>
				</div>
				<InspectorControls>
					<StyleControls {...{ setAttributes, ...props }} />
				</InspectorControls>
				{styleEnabled && ( 
					<OnPageStyle {...{ setAttributes, ...props }} /> 
				)}
				<InnerBlocks />
			</Fragment>
		</div>
	);
}
