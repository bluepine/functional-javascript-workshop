function upperCaser(input) {
    function helper(acc, input) {
	if (0 == input.length ) {
	    return acc;
	}
	return helper(acc + input.charAt(0).toUpperCase(), input.substr(1));
    }
    return helper("", ''+input);
}

module.exports = upperCaser;
