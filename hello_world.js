function upperCaser(input) {
    function helper(acc, input) {
	const sub = input.substr(1);
	if ( !sub ) {
	    return acc;
	}
	return helper(acc + input.charAt(0).toUpperCase(), sub);
    }
    return helper("", input);
}

module.exports = upperCaser;
