const undoHex = function(hex){
	switch (hex) {
		// Default
		case '#25476d':
		  	return "blue"
		case '#353a71':
		  	return "purple"
		case '#0e4f5b':
			return "green"
		case '#b72c31':
			return "red"
		case '#e36942':
			return "orange"
		case '#d48207':
			return "yellow"
        // Medium
		case '#a8bed3':
            return "blue-medium"
        case '#abaccb':
                return "purple-medium"
        case '#9bb8ab':
            return "green-medium"
        case '#eeb8b1':
            return "red-medium"
        case '#e9aa96':
            return "orange-medium"
        case '#eaca97':
            return "yellow-medium"
		// Light
		case '#a8bed2':
		  	return "blue-light"
		case '#abacca':
		  	return "purple-light"
		case '#9bb8aa':
			return "green-light"
		case '#eeb8b0':
			return "red-light"
		case '#e9aa95':
			return "orange-light"
		case '#eaca96':
			return "yellow-light"
		default:
		 return "none"
	  }
}

export default undoHex;
