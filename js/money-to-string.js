$(function(){
	
	var strAmt = "";
	
	var engNums = {
		"ones" : [
			"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
		],
		"teens" : [
			"eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"		   
		],
		"tens" : [
			"ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"		  
		],
		"ordermag" : [
			"hundred", "thousand", "million", "billion", "trillion", "zillion"			  
		]
	}
	
	var convert = function(strAmt) {
		return strAmt;	
	}
	
	$("#amount").change(
		function() {
			var strAmt = $(this).val().toString();
			$("#output").text(convert(strAmt));
		}	
	);
	
	
});