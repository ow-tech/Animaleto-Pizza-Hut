//Business logic
function MyPizza(psize, crust, toppings){
	this.psize=psize;
	this.crust=crust;
	this.toppings=toppings;
}

//user Interface (Front-end)

$(document).ready(function(){
	$("button#takeorder").click(function(){
		var psize=$("input[type='radio']:checked").val();
		var crust =$(".custom-select option:selected").val();
		var toppings =$ ("input[type='checkbox']:checked").val();
		var number =$("#getnumber option:selected").val();
		var myOrder = new MyPizza(psize, crust, toppings);
		var total= (parseInt(psize) + parseInt(crust) + parseInt(toppings))*parseInt(number);
		// $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
		// console.log(newOrder);
		$("p#pizza").html ('<tr><td id=psize>'+myOrder.psize + '</td><td id="crust">'+ myOrder.crust + '</td><td id="toppings">' + myOrder.toppings + '</td><td id="total">' +total+'</td></tr>');
		$("button#deliver").click(function(){
			alert("delivery cost Ksh. 200.")
			var where= prompt("Please Enter your location:\n Must Be within Mombasa.")
			if(where===""){
				alert("please Enter your Location!!!\n By Clicking YES Button Again!!!")
			}
			else{
				var where = true
				alert("Your Pizza will be delivered to "+ where + " in about 1 hour.\n Please CheckOut to get total price and for your order to be processed")
			}
		})
		$("button#no").click(function(){
			alert(" Please Checkout for your order to be Processed")
		})
		$("button#checkout").click(function(){
			$("p#pizza").fadeOut();
			var finalTotal= total+200
			if(where=true){
				 alert ("Pizza Costs Ksh." +finalTotal);
			 }
			else{
				alert("Pizza Costs Ksh."+total)
 
			 }
		})
	});

})