import calculated from "./calculated";



// Returns an object containing CSS values, this is used inside the editor 
const calculatedStyleObj = attributes => {

	const { 
		styleMode, 
		foregroundColor, 
		headlineColor, 
		linkColor, 
		dropcapColor, 
		captionColor,
		blockquoteColor, 
		selectionFGColor, 
		selectionBGColor, 
		lineartColor, 
		keyGradient,
		fgHeadlineFont, 
		fgCopyFont, 
		fgCaptionFont, 
		interfaceFGColor,
		interfaceBGColor,
		interfaceKeyColor
	
	} = attributes;

    const bgImageStack = calculated.calculatedBgImage(attributes);
	const bgColorStack = calculated.calculatedBgColor(attributes);
	const bgSizeSm = calculated.calculatedBGIMGSize(attributes, 'sm');
	const bgSizeMd = calculated.calculatedBGIMGSize(attributes, 'md');
	const bgSize = calculated.calculatedBGIMGSize(attributes, 'lg');
	const bgPosition = calculated.calculatedBgPos(attributes);
	const bgAttachment = calculated.calculatedBGIMGAtt(attributes);
	const bgRepeat = calculated.calculatedBGIMGRepeat(attributes);
	const spacingMobileStack = calculated.calculatedPadding(attributes.spacingMobile);
	const spacingTabletStack = calculated.calculatedPadding(attributes.spacingTablet);
	const spacingDesktopStack = calculated.calculatedPadding(attributes.spacingDesktop);
	
    
    // Default Obj
	let styleObj = {'--backgroundColor': "red"}

 
	const fgbgObj = { 
		// Background
		'--backgroundColor': bgColorStack,
		// Foreground
		'--foregroundColor': foregroundColor, 
		'--headlineColor': headlineColor,
		'--linkColor': linkColor,
		'--dropcapColor': dropcapColor,
		'--blockquoteColor': blockquoteColor,
		'--captionColor': captionColor,
		'--selectionFGColor': selectionFGColor,
		'--selectionBGColor': selectionBGColor,
		'--lineartColor':lineartColor,
		'--keyGradient':keyGradient,
	};

 
	// Add Background Image properties as a group (depends on stack)
	if(bgImageStack && bgImageStack != 'none'){
		fgbgObj['--backgroundImage'] = bgImageStack;
		fgbgObj['--backgroundSizeSm'] = bgSizeSm;
		fgbgObj['--backgroundSizeMd'] = bgSizeMd;
		fgbgObj['--backgroundSize'] = bgSize;
		fgbgObj['--backgroundPosition'] = bgPosition;
		fgbgObj['--backgroundAttachment'] = bgAttachment;
		fgbgObj['--backgroundRepeat'] = bgRepeat;
	}

	// None option
	if(bgImageStack && bgImageStack == 'none'){
		fgbgObj['--backgroundImage'] = bgImageStack;
	}

	// Build Up Interface Support
	const interfaceObj = {
		'--interfaceFGColor': interfaceFGColor, 
		'--interfaceBGColor': interfaceBGColor,
		'--interfaceKeyColor': interfaceKeyColor,
	}
    

	// Build Up Typography Support
	const typographyObj = {}
	
	// Selectively add Font Objects to respect "inherit" option
	if(fgHeadlineFont && fgHeadlineFont !== 'inherit'){
		typographyObj['--foregroundHeadlineFont'] = 'var(--'+fgHeadlineFont+')';
	}
	if(fgCopyFont !== null && fgCopyFont !== 'inherit'){
		typographyObj['--foregroundCopyFont'] = 'var(--'+fgCopyFont+')';
	}
	if(fgCaptionFont !== null && fgCaptionFont !== 'inherit'){
		typographyObj['--foregroundCaptionFont'] = 'var(--'+fgCaptionFont+')';
	}

    // Build Up Sizing Support
	const sizingObj = { }

	// Mobile, Tablet, Desktop. This prevents empty vals from being saved
	if(spacingMobileStack !== "undefined"){ sizingObj['--spacingMobile'] = spacingMobileStack; }
	if(spacingTabletStack !== "undefined"){ sizingObj['--spacingTablet'] = spacingTabletStack; }
	if(spacingDesktopStack !== "undefined"){ sizingObj['--spacingDesktop'] = spacingDesktopStack; }

	// Selectively spread values into the styleObj based on the styleMode
	// This prevents unnecessary values from being saved and displayed
	if(styleMode === 'named'){ styleObj = { ...typographyObj, ...sizingObj } }
	if(styleMode === 'custom'){ styleObj = {...fgbgObj, ...typographyObj, ...sizingObj, ...interfaceObj } }
  
    // Return formatted Style Object
    return styleObj;
};

export default calculatedStyleObj;
