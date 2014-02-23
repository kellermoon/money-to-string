$(function(){
	
	var input = "";
	
	
	$("#amount").change(
		function() {
			var input = $(this).val();
			$("#output").text(input);
		}	
	);
	
	
});