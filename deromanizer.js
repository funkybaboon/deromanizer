module.exports = function (roman) {
	var num = 0;
	roman = roman.toUpperCase();
	var lookup = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
	var i = 0;

	roman = roman.split("");

	var sum = roman.reduce(function(previousValue, currentValue, i, array) {
		

		if ( lookup[roman[i]] < lookup[roman[i+1]] )
			num -= lookup[roman[i]];
		else
			num += lookup[roman[i]];

		

		return num;
	}, 0);
	
	return sum;
/*
	var sum = roman.reduce(
  		function(index){ 
			if ( lookup[roman[i]] < lookup[roman[i+1]] )
				num -= lookup[roman[i]];
			else
				num += lookup[roman[i]];

  			return num;
  		}
  	, 0);

	return sum;
	*/


/*
	while (i < roman.length) {
		if ( lookup[roman[i]] < lookup[roman[i+1]] )
			num -= lookup[roman[i]];
		else
			num += lookup[roman[i]];
		i++;
	}
	return num;*/
};