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
		$("p#pizza").html ("So far, your pizza costs you Ksh." + total );
	});
	$("button#deliver").click(function(){
		alert("delivery cost Ksh. 200.")
		var where= prompt("Please Enter your location:\n Must Be within Mombasa.")
		alert("Your Pizza will be delivered to "+ where + " in about 1 hour.\n Please CheckOut to get total price and for your order to be processed")
	})

	$("button#no").click(function(){
		alert("Please CheakOut for your order to be processed")
	})

})