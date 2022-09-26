/* BLOCK: PX Section */

const attributes = {
	// Unique ID, used for writing unique CSS
	blockID: {
		type: "string",
		default: ""
	},

	// BOOLEAN TOGGLES___________

	// Disable Everything
	styleEnabled: {
		type: "boolean",
		default: true
	},
	// Disable Background Color
	bgColorEnabled: {
		type: "boolean",
		default: true
	},
	// Disable Gradient
	bgGradientEnabled: {
		type: "boolean",
		default: false
	},
	// Disable Image
	bgImageEnabled: {
		type: "boolean",
		default: false
	},
	// Disable Gel
	bgGelEnabled: {
		type: "boolean",
		default: false
	},

	// Height Enabled
	heightEnabled: {
		type: "boolean",
		default: true
	},

	// DELETE THIS
	backgroundColorCount: {
		type: "string",
		default: "flat"
	},

	// SETTINGS ___________
	// What order should Image / Gradient appear?
	backgroundStackFirst: {
		type: "string",
		default: "image"
	},

	// FOREGROUND ___________
	// Foreground Colors
	foregroundColor: {
		type: "string",
		default: "#000000"
	},
	foregroundHeadlineFont: {
		type: "string",
		default: "sansserif"
	},
	foregroundCopyFont: {
		type: "string",
		default: "serif"
	},
	foregroundCaptionFont: {
		type: "string",
		default: "monospace"
	},
	// old , foregroundColorSelect1
	selectionFGColor: {
		type: "string",
		default: "#000000"
	},
	// old , foregroundColorSelect2
	selectionBGColor: {
		type: "string",
		default: "#ffffff"
	},

	// BACKGROUND ___________
	// Base Background Color for Container
	backgroundColor0: {
		type: "string",
		default: "#ddd"
	},
	// Gradient Background Color 1
	backgroundColor1: {
		type: "string",
		default: "#ffffff"
	},
	// Gradient Background Color 2
	backgroundColor2: {
		type: "string",
		default: "#ffffff"
	},
	// Gel Background Color 3
	backgroundColor3: {
		type: "string",
		default: "transparent"
	},

	// GRADIENT ___________
	// Gradient Start Color 1
	// Gradient Type (linear/radial)
	gradientType: {
		type: "string",
		default: "linear"
	},
	backgroundColor1Start: {
		type: "number",
		default: 0
	},
	// Gradient Start Color 1
	backgroundColor2Start: {
		type: "number",
		default: 100
	},
	// LINEAR GRADIENT ___________
	// Linear Gradient Angle
	gradientLinearAngle: {
		type: "number",
		default: 45
	},
	// Background-Position Horizontal for Gradient
	gradientAlignHori: {
		type: "string",
		default: "center"
	},
	// Background-Position Vertical for Gradient
	gradientAlignVert: {
		type: "string",
		default: "center"
	},
	// Background-Position 'Custom Vert' for Gradient
	gradientAlignVertCustom: {
		type: "number",
		default: 100
	},
	// Background-Position 'Custom Hori' for Gradient
	gradientAlignHoriCustom: {
		type: "number",
		default: 100
	},
	// RADIAL GRADIENT ___________
	// Radial Gradient Horizontal Alignment
	gradientAlignRadialHori: {
		type: "number",
		default: 50
	},
	// Radial Gradient Vertical Alignment
	gradientAlignRadialVert: {
		type: "number",
		default: 50
	},

	// Background Image URL
	backgroundImage: {
		type: "string",
		default: null // no image by default!
	},

	// BACKGROUND SET ONE
	backgroundImageSize: {
		type: "string",
		default: "cover"
	},
	backgroundImageSizeCustom: {
		type: "number",
		default: 100
	},
	backgroundImageRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundImageAttachment: {
		type: "string",
		default: "scroll"
	},
	backgroundImageAlignVert: {
		type: "string",
		default: "center"
	},
	backgroundImageAlignHori: {
		type: "string",
		default: "center"
	},
	backgroundImageAlignVertCustom: {
		type: "number",
		default: 100
	},
	backgroundImageAlignHoriCustom: {
		type: "number",
		default: 100
	},

	// BACKGROUND SET TWO
	backgroundGradientSize: {
		type: "string",
		default: "cover"
	},
	backgroundGradientSizeCustom: {
		type: "number",
		default: 100
	},
	backgroundGradientRepeat: {
		type: "string",
		default: "no-repeat"
	},
	backgroundGradientAttachment: {
		type: "string",
		default: "scroll"
	},
	backgroundGradientAlignVert: {
		type: "string",
		default: "center"
	},
	backgroundGradientAlignHori: {
		type: "string",
		default: "center"
	},
	backgroundGradientAlignVertCustom: {
		type: "number",
		default: 100
	},
	backgroundGradientAlignHoriCustom: {
		type: "number",
		default: 100
	},
	blockAlignment: {
		type: "string"
	},
	sectionWidth: {
		type: "string"
	}

	// highContrast: {
	// 	type: "boolean",
	// 	default: false
	// },
	// message: {
	// 	type: "array",
	// 	source: "children",
	// 	selector: ".message-body"
	// }
};
export default attributes;
