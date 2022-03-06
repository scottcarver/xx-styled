// Returns a string which identifies the selected Block Style
const getBlockStyleKey = function(classList) {
	let styles = classList.split(" ");
	let keystyle = null;
	let identifier = "is-style-";

	styles.forEach(function(style) {
		if (style.includes(identifier)) {
			keystyle = style.replace(identifier, "");
		}
	});

	return keystyle;
};

export default getBlockStyleKey;
