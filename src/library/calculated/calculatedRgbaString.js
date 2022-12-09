// Returns a string which identifies the selected Block Style
const calculatedRgbaString = function(value) {
	return "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")";
};
export default calculatedRgbaString;
