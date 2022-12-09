// Returns a string which identifies the selected Block Style
const calculatedRgbaString = function(value) {

	/*
	value = value.replace('#', '');
	console.log("value!", value);

	// Forcibly reformat 8 digit hex
	if(typeof(value) == "string" && value.length === 8){
		
		let red = value.substring(0, 2);
		let blue = value.substring(2, 4);
		let green = value.substring(4, 6);
		let alpha = value.substring(6, 8);
		value = { rgb: { r: red, b: blue, g: green, a: alpha } }
		console.log(value);
	}
	*/

	return "rgba(" + value.rgb.r + "," + value.rgb.g + "," + value.rgb.b + "," + value.rgb.a + ")";
};
export default calculatedRgbaString;
