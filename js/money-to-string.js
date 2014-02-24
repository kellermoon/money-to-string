$(function(){
	
	var amount;
	var dollars;
	var strDollars;
	var cents;
	var strCents;
	
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
	
	var convertToDollarsAndCents = function(amount) {
		
		// If amount is NaN or empty string, reject it.
		if(isNaN(amount) || amount == "") return false;
		
		var splStrAmt = amount.toString().split(".");
				
		// If amount is negative, or cents has more than two digits (i.e. >99), reject the amount.
		if(amount < 0) {
			$("#amount").val(undefined);
			return false;
		}
		if(parseInt(splStrAmt[1]) > 99) return false;
		
		// Set dollars.
		dollars = parseInt(splStrAmt[0]);
		strDollars = dollars.toString();
		
		// Set cents -- handle various valid values accordingly.
		cents = parseInt(splStrAmt[1]);
		if(!cents || isNaN(cents) || cents == 0) {
			cents = 0;
			strCents = "00"
		}
		if(cents < 9) {
			strCents = cents + "0";
		} else {
			strCents = cents;
		}
		
		return true;
	}
	
	$("#amount").focus().change(
		function() {
			var amount = $(this).val();
			if(convertToDollarsAndCents(amount)) {
				$("#output").text(strDollars + " dollars and " + strCents + " cents.");
			} else {
				$("#output").text("Please format your reponse properly, and make sure it's not a negative value.");
			}
		}	
	);
	
	
});