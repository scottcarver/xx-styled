// Node modules
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import classnames from "classnames";
// Custom CSS
import './editor.scss';
// Custom Components
import StyleControls from "../assets/styleControls";
import OnPageStyle from "../assets/OnPageStyle";
import AdminStyle from "../assets/AdminStyle";
import InlineStyleVars from "../assets/InlineStyleVars";
// Custom Functions
import calculatedBgImage from "../assets/lib/js/calculatedBgImage";
import calculatedBgColor from "../assets/lib/js/calculatedBgColor";
import calculatedBGIMGSize from "../assets/lib/js/calculatedBGIMGSize";
import calculatedBgPos from "../assets/lib/js/calculatedBgPos";
import calculatedBGIMGAtt from "../assets/lib/js/calculatedBGIMGAtt";
import calculatedBGIMGRepeat from "../assets/lib/js/calculatedBGIMGRepeat";
import calculatedInlineVars from "../assets/lib/js/calculatedInlineVars";
import calculatedPadding from "../assets/lib/js/calculatedPadding";

export default function Edit(props) {

	const inlineVarCSS =  calculatedInlineVars(props.attributes);

//	const props = useBlockProps();
	console.log("edit INLINE props", inlineVarCSS);
	const {
		attributes: {
			styleEnabled,
			styleMode,
			blockID,
			namedstyle,
			heightEnabled,
			foregroundColor,
			blockAlignment,
			highContrast,
			foregroundHeadlineFont,
			foregroundCopyFont,
			foregroundCaptionFont,
			headlineColor,
			selectionFGColor,
			selectionBGColor,
			linkColor,
			dropcapColor,
			blockquoteColor,
			lineartColor,
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

	console.log("styleMode", styleMode);



	const classes = classnames(
		className,
		"xx-styled",
		// `wp-block-xx-styled--${blockID}`,
		{ "wp-block--heightenabled": heightEnabled },
		// `wp-block--headline-${foregroundHeadlineFont}`,
		// `wp-block--copy-${foregroundCopyFont}`,
		// `wp-block--caption-${foregroundCaptionFont}`
	);

	// alignfull
	
	// boop
	const bgImageStack = calculatedBgImage(props.attributes);
	const bgColorStack = calculatedBgColor(props.attributes);
	// const bgSize = calculatedBGIMGSize(props.attributes);
	const bgSizeSm = calculatedBGIMGSize(props.attributes, 'sm');
	const bgSizeMd = calculatedBGIMGSize(props.attributes, 'md');
	const bgSize = calculatedBGIMGSize(props.attributes, 'lg');
	const bgPosition = calculatedBgPos(props.attributes);
	const bgAttachment = calculatedBGIMGAtt(props.attributes);
	const bgRepeat = calculatedBGIMGRepeat(props.attributes);
	const spacingMobileStack = calculatedPadding(props.attributes.spacingMobile);
	const spacingTabletStack = calculatedPadding(props.attributes.spacingTablet);
	const spacingDesktopStack = calculatedPadding(props.attributes.spacingDesktop);
	

	// Default Obj
	let styleObj = {}

	const fgbgObj = { 
		// Background
		'--backgroundImage': bgImageStack,
		'--backgroundColor': bgColorStack,
		'--backgroundSizeSm': bgSizeSm,
		'--backgroundSizeMd': bgSizeMd,
		'--backgroundSize': bgSize,
		'--backgroundPosition': bgPosition,
		'--backgroundAttachment': bgAttachment,
		'--backgroundRepeat': bgRepeat,
		// Foreground
		'--foregroundColor': foregroundColor, 
		'--headlineColor': headlineColor,
		'--linkColor': linkColor,
		'--dropcapColor': dropcapColor,
		'--blockquoteColor': blockquoteColor,
		'--selectionFGColor': selectionFGColor,
		'--selectionBGColor': selectionBGColor,
		'--lineartColor':lineartColor,
	};

	const typographyObj = { }
	// Selectively add Font Objects
	if(foregroundHeadlineFont !== null && foregroundHeadlineFont !== 'inherit'){
		typographyObj['--foregroundHeadlineFont'] = 'var(--'+foregroundHeadlineFont+')';
	}
	if(foregroundCopyFont !== null && foregroundCopyFont !== 'inherit'){
		typographyObj['--foregroundCopyFont'] = 'var(--'+foregroundCopyFont+')';
	}
	if(foregroundCaptionFont !== null && foregroundCaptionFont !== 'inherit'){
		typographyObj['--foregroundCaptionFont'] = 'var(--'+foregroundCaptionFont+')';
	}

	const sizingObj = { 
		// Spacing
		'--spacingMobile': spacingMobileStack,
		'--spacingTablet': spacingTabletStack,
		'--spacingDesktop': spacingDesktopStack,
	}

	if(styleMode === 'named'){
		styleObj = {
			...typographyObj,
			...sizingObj,
		}
	}
	if(styleMode === 'custom'){
	styleObj = {
			...fgbgObj,
			...typographyObj,
			...sizingObj,
		}
	}

	console.log('what is styleObj? ', styleObj);

	// if(styleMode === 'named')}{
	// 	let styleObj = {}
	// }

	// console.log("inlineVarCSS", inlineVarCSS);

	// Allow all Types except self-nesting
	const allBlocks = wp.blocks.getBlockTypes();
	const bannedBlocks =  ['xx/styled'];
	let enabledBlocks = [];
	for (let i = 0; i < allBlocks.length; i++) {
		let currentBlock = allBlocks[i].name;
		 if(!bannedBlocks.includes(currentBlock)){enabledBlocks.push(currentBlock); }
	} 
	
	
	const blockProps = useBlockProps( {
		className: classes,
		id: blockID,
		style: (styleMode == 'custom' || styleMode == 'named' ) ? styleObj : undefined,
		'data-theme': (styleMode == 'named') ? namedstyle : ''
	});

	
	return (
		<div {...blockProps}>
		
			{/* Admin Padding Preview */}
			{styleMode=="custom" && ( <AdminStyle {...{ setAttributes, ...props }} /> )}

			{/* Sidebar */}
			<InspectorControls><StyleControls {...{ setAttributes, ...props }} /></InspectorControls>
			
			{/* Inline CSS {styleEnabled && ( <OnPageStyle {...{ setAttributes, ...props }} /> )} */}
				
			{/* Inner Blocks */}
			<InnerBlocks allowedBlocks={ enabledBlocks } />
		</div>
	);
}
