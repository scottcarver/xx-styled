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
		styleMode,
		selectionFGColor,
		selectionBGColor,
		backgroundColor,
		backgroundColor3,
		foregroundHeadlineFont,
		foregroundCopyFont,
		foregroundCaptionFont,
		styleEnabled,
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
	
	// console.log("CURIOUS", bgSize);
	var combinedCss = '';

	var fgbgCss = ``;
		// console.log("bgImageStack is", bgImageStack);
		// Include backgroundImage
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
		
		// Include backgroundColor
		if(backgroundColor){ fgbgCss += `--backgroundColor: ${backgroundColor};`; }
		// Foreground Color
		if(foregroundColor){ fgbgCss += `--foregroundColor: ${foregroundColor};`; }
		// Headline Color
		if(headlineColor){ fgbgCss += `--headlineColor: ${headlineColor};`; }
		// Link Color
		if(linkColor){ fgbgCss += `--linkColor: ${linkColor};`; }
		// Dropcap Color
		if(dropcapColor){ fgbgCss += `--dropcapColor: ${dropcapColor};`; }
		// Block Quote Color
		if(blockquoteColor){ fgbgCss += `--blockquoteColor: ${blockquoteColor};`; }
		// Lineart Color
		if(lineartColor){ fgbgCss += `--lineartColor: ${lineartColor};`; }
		// selectionFGr Color
		if(selectionFGColor){ fgbgCss += `--selectionFGColor: ${selectionFGColor};`; }
		// selectionBG Color
		if(selectionBGColor){ fgbgCss += `--selectionBGColor: ${selectionBGColor};`; }

		/*
		fgbgCss +=
		`
		--linkColor: ${linkColor};
		--dropcapColor: ${dropcapColor};
		--blockquoteColor: ${blockquoteColor};
		--lineartColor: ${lineartColor};
		--selectionFGColor: ${selectionFGColor};
		--selectionBGColor: ${selectionBGColor};
	`;
	*/
	//--backgroundColor: ${bgColorStack};

	/*
	var fontCss = `
		--foregroundHeadlineFont: var(--${foregroundHeadlineFont});
		--foregroundCopyFont: var(--${foregroundCopyFont});
		--foregroundCaptionFont: var(--${foregroundCaptionFont});
	`;
	*/

	var fontCss = ``;

	if(foregroundHeadlineFont !== null && foregroundHeadlineFont !== 'inherit'){
		fontCss+=`--foregroundHeadlineFont: var(--${foregroundHeadlineFont});`
	}
	if(foregroundCopyFont !== null && foregroundCopyFont !== 'inherit'){
		fontCss+=`--foregroundCopyFont: var(--${foregroundCopyFont});`
	}
	if(foregroundCaptionFont !== null && foregroundCaptionFont !== 'inherit'){
		fontCss+=`--foregroundCaptionFont: var(--${foregroundCaptionFont});`
	}

	/*
		--spacingMobile: ${spacingMobileStack};
	*/

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
	if(styleEnabled){ return compressedCSS }

	// Otherwise Return False
	return false;
};

// This will be a string of CSS not a React-CSS-Object. This is different from other areas of the app which require
// the use of the React-CSS-object format, such as Edit.js
// console.log("calculatedInlineVars ", calculatedInlineVars);
export default calculatedInlineVars;
