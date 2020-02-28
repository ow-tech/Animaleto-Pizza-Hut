$(document).ready(function(){
	$("button#takeorder").click(function(){
		var psize=$("input[type='radio']:checked").val();
		var crust =$(".custom-select option:selected").val();
		var toppings =$ ("input[type='checkbox']:checked").val();
		var number =$("#getnumber option:selected").val();
		// var total=$(function(){
		// 	return parseInt(psize) + parseInt(crust) + parseInt(toppings)
		// }) 
		var total= (parseInt(psize) + parseInt(crust) + parseInt(toppings))*parseInt(number);
		$("p#pizza").html ("So far, your pizza costs you Ksh.g" + total );
	});

})