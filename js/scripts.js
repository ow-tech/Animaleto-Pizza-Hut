//Business logic
function MyPizza(psize, crust, toppings, number){
	this.psize=psize;
	this.crust=crust;
	this.toppings=toppings;
	this.number=number;
}

//user Interface (Front-end)

$(document).ready(function(){
	$("button#takeorder").click(function(){
		var psize=$("input[type='radio']:checked").val();
		var crust =$(".custom-select option:selected").val();
		var toppings =$ ("input[type='checkbox']:checked").val();
		var number =$("#getnumber option:selected").val();
		var myOrder = new MyPizza(psize, crust, toppings, number);
		var total= (parseInt(psize) + parseInt(crust) + parseInt(toppings))*parseInt(number);
		$("#pizza").html('<tr><td id=psize>'+myOrder.psize + '</td><td id="crust">'+ myOrder.crust + '</td><td id="toppings">' + myOrder.toppings + '</td><td id="number">' + myOrder.number + '</td><td id="total">' +total+'</td></tr>');
		$("button#deliver").click(function(event){
			event.preventDefault();
			alert("delivery cost Ksh. 200.")
			var where= prompt("Please Enter your location:\n Must Be within Mombasa.")
			if(where===""){
				alert("Please Enter your Location!!!\n By Clicking YES Button Again!!!")
			}
			else{
				alert("Your Pizza will be delivered to "+ where + " in about 1 hour.\n Please CheckOut to get total price and for your order to be processed")
			}
			$("button#no").click(function(){
				alert("Please Checkout for your order to be Processed")
			})
			$("button#checkout").click(function(){
				$("#pizza").fadeOut();
				var finalTotal= total+200
				console.log(where.length)
				if(where.length>1){
					 alert ("Pizza Costs Ksh." +finalTotal);
				 }
				else{
					alert("Pizza Costs Ksh."+total)
	 
				 }
		})
		
		})
	});

});