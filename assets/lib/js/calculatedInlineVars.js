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
		selectionFGColor,
		selectionBGColor,
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

	var combinedCss = `
		--backgroundImage: ${bgImageStack};
		--backgroundColor: ${bgColorStack};
		--backgroundSizeSm: ${bgSizeSm};
		--backgroundSizeMd: ${bgSizeMd};
		--backgroundSize: ${bgSize};
		--backgroundPosition: ${bgPosition};
		--backgroundAttachment: ${bgAttachment};
		--backgroundRepeat: ${bgRepeat};
		--foregroundColor: ${foregroundColor};
		--headlineColor: ${headlineColor};
		--linkColor: ${linkColor};
		--dropcapColor: ${dropcapColor};
		--blockquoteColor: ${blockquoteColor};
		--lineartColor: ${lineartColor};
		--selectionFGColor: ${selectionFGColor};
		--selectionBGColor: ${selectionBGColor};
		--foregroundHeadlineFont: ${foregroundHeadlineFont};
		--foregroundCopyFont: ${foregroundCopyFont};
		--foregroundCaptionFont: ${foregroundCaptionFont};
		--spacingMobile: ${spacingMobileStack};
		--spacingTablet: ${spacingTabletStack};
		--spacingDesktop: ${spacingDesktopStack};
	`;

	// Remove Newlines, Tabs are spaces
	var compressedCSS = combinedCss.replaceAll("\n", "").replaceAll("\t", " ");

	// Remove extraneous spaces
	compressedCSS = compressedCSS.replace(/\s+/g, ' ').trim();

	// Return style when enabled
	if(styleEnabled){ return compressedCSS }

	// Otherwise Return False
	return false;
};

export default calculatedInlineVars;
