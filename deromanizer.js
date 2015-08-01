exports.nfn = function(roman) {
	roman = roman.toUpperCase();

	var num = 0;
	var lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
	var index = 0;

	while (index < roman.length) {
		if ( lookup[roman[index]] < lookup[roman[index+1]] )
			num -= lookup[roman[index]];
		else
			num += lookup[roman[index]];
		index++;
	}
	return num;
};

exports.fn = function(roman) {
	roman = roman.toUpperCase().split("");

	var lookup = function() {
		return {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
	};
	var add = function(x,y){
		return x + y;
	};
	var sub = function(x,y){
		return x - y;
	};

	return roman.reduce(function(sum, currentValue, index) {
		if ( lookup()[roman[index]] < lookup()[roman[index+1]] )
			return sub(sum, lookup()[roman[index]]);
		else
			return add(sum, lookup()[roman[index]]);
	}, 0);

};

