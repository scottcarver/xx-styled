

// Custom Calculated Functions
import calculatedBgColor from "./calculatedBgColor";
import calculatedBgImage from "./calculatedBgImage";
import calculatedBGIMGSize from "./calculatedBGIMGSize";
import calculatedBgPos from "./calculatedBgPos";
import calculatedBGIMGAtt from "./calculatedBGIMGAtt";
import calculatedBGIMGRepeat from "./calculatedBGIMGRepeat";
import calculatedInlineVars from "./calculatedInlineVars";
import calculatedPadding from "./calculatedPadding";
import calculatedRgbaString from "./calculatedRgbaString";
import calculatedGradient from "./calculatedGradient";
import calculatedStyleObj from "./calculatedStyleObj";


// Combine these utilities into one object
const calculated = {
    calculatedBgColor,
    calculatedBgImage, 
    calculatedBGIMGSize,
    calculatedBgPos,
    calculatedBGIMGAtt,
    calculatedBGIMGRepeat,
    calculatedInlineVars,
    calculatedPadding,
    calculatedRgbaString,
    calculatedGradient,
    calculatedStyleObj
}

// Export `calculated` utility
export default calculated;

