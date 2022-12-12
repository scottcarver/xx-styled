// Custom Functions
import calculatedBgImage from "./calculatedBgImage";
import calculatedBgColor from "./calculatedBgColor";
import calculatedBGIMGSize from "./calculatedBGIMGSize";
import calculatedBgPos from "./calculatedBgPos";
import calculatedBGIMGAtt from "./calculatedBGIMGAtt";
import calculatedBGIMGRepeat from "./calculatedBGIMGRepeat";
import calculatedPadding from "./calculatedPadding";

// Returns the final "background-image", which is a combination of gradient and image
const calculatedInlineVars = attributes => {
	
	// Get all of these variables
	const {
		foregroundColor,
		headlineColor,
		linkColor,
		dropcapColor,
		blockquoteColor,
		lineartColor,
		keyGradient,
		styleMode,
		selectionFGColor,
		selectionBGColor,
		backgroundColor,
		fgHeadlineFont,
		fgCopyFont,
		fgCaptionFont,
		interfaceFGColor,
		interfaceBGColor,
		interfaceKeyColor
	} = attributes;

	const bgImageStack = calculatedBgImage(attributes);
	const bgColorStack = calculatedBgColor(attributes);
	const bgSizeSm = calculatedBGIMGSize(attributes, 'sm');
	const bgSizeMd = calculatedBGIMGSize(attributes, 'md');
	const bgSize = calculatedBGIMGSize(attributes, 'lg');
	const bgPosition = calculatedBgPos(attributes);
	const bgAttachment = calculatedBGIMGAtt(attributes);
	const bgRepeat = calculatedBGIMGRepeat(attributes);
	const spacingMobileStack = calculatedPadding(attributes.spacingMobile);
	const spacingTabletStack = calculatedPadding(attributes.spacingTablet);
	const spacingDesktopStack = calculatedPadding(attributes.spacingDesktop);
	const replaceAll = function (string, search, replace){ return string.split(search).join(replace); } 
	
	var combinedCss = '';

	var fgbgCss = ``;
	
	if(bgImageStack){ 
		fgbgCss += `
		--backgroundImage: ${bgImageStack};
		--backgroundSizeSm: ${bgSizeSm};
		--backgroundSizeMd: ${bgSizeMd};
		--backgroundSize: ${bgSize};
		--backgroundPosition: ${bgPosition};
		--backgroundAttachment: ${bgAttachment};
		--backgroundRepeat: ${bgRepeat};
		`; 
	}
	
	// FG/BG Colors
	if(backgroundColor){ fgbgCss += `--backgroundColor: ${backgroundColor};`; }
	if(foregroundColor){ fgbgCss += `--foregroundColor: ${foregroundColor};`; }
	if(headlineColor){ fgbgCss += `--headlineColor: ${headlineColor};`; }
	if(linkColor){ fgbgCss += `--linkColor: ${linkColor};`; }
	if(dropcapColor){ fgbgCss += `--dropcapColor: ${dropcapColor};`; }
	if(blockquoteColor){ fgbgCss += `--blockquoteColor: ${blockquoteColor};`; }
	if(lineartColor){ fgbgCss += `--lineartColor: ${lineartColor};`; }
	if(keyGradient){ fgbgCss += `--keyGradient: ${keyGradient};`; }
	if(selectionFGColor){ fgbgCss += `--selectionFGColor: ${selectionFGColor};`; }
	if(selectionBGColor){ fgbgCss += `--selectionBGColor: ${selectionBGColor};`; }
	


	// Interface CSS
	var interfaceCss = ``;
	if(interfaceFGColor){ fgbgCss += `--interfaceFGColor: ${interfaceFGColor};`; }
	if(interfaceBGColor){ fgbgCss += `--interfaceBGColor: ${interfaceBGColor};`; }
	if(interfaceKeyColor){ fgbgCss += `--interfaceKeyColor: ${interfaceKeyColor};`; }


	// Typography
	if(fgHeadlineFont !== null && fgHeadlineFont !== 'inherit'){
		interfaceCss+=`--foregroundHeadlineFont: var(--${fgHeadlineFont});`
	}
	if(fgCopyFont !== null && fgCopyFont !== 'inherit'){
		interfaceCss+=`--foregroundCopyFont: var(--${fgCopyFont});`
	}
	if(fgCaptionFont !== null && fgCaptionFont !== 'inherit'){
		interfaceCss+=`--foregroundCaptionFont: var(--${fgCaptionFont});`
	}


	// Font CSS
	var fontCss = ``;

	if(fgHeadlineFont !== null && fgHeadlineFont !== 'inherit'){
		fontCss+=`--foregroundHeadlineFont: var(--${fgHeadlineFont});`
	}
	if(fgCopyFont !== null && fgCopyFont !== 'inherit'){
		fontCss+=`--foregroundCopyFont: var(--${fgCopyFont});`
	}
	if(fgCaptionFont !== null && fgCaptionFont !== 'inherit'){
		fontCss+=`--foregroundCaptionFont: var(--${fgCaptionFont});`
	}


	// Sizing CSS
	var sizingCss = ``;
	if(spacingMobileStack !== "undefined"){ sizingCss+=`--spacingMobile: ${spacingMobileStack};` }
	if(spacingTabletStack !== "undefined"){ sizingCss+=`--spacingTablet: ${spacingTabletStack};` }
	if(spacingDesktopStack !== "undefined"){ sizingCss+=`--spacingDesktop: ${spacingDesktopStack};` }
	
	// Add CSS based on the mode
	if(styleMode == 'custom') { combinedCss += fgbgCss + fontCss + sizingCss; }
	if(styleMode == 'named') { combinedCss += fontCss + sizingCss; }

	// Remove Newlines, Tabs are spaces
	var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");

	// Remove extraneous spaces
	compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();

	// Return style when enabled
	if(styleMode !== 'disabled'){ return compressedCSS }

	// Otherwise Return False
	return false;
};

// This will be a string of CSS not a React-CSS-Object. This is different from other areas of the app which require
// the use of the React-CSS-object format, such as Edit.js
// console.log("calculatedInlineVars ", calculatedInlineVars);
export default calculatedInlineVars;
