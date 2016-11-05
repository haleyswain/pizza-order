function Pizza (size, topping, crust) {
  this.size = size;
  this.topping = topping;
  this.crust = crust;
}

Pizza.prototype.price = function (size) {
  var price = 5;
  console.log(size);
  if (size ==="small") {
    price += 8;
  }
  if (size === "medium") {
    price +=10;
  }
  if (size === "large") {
    price += 13;
  }
  return price;
}


$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var sizeOption = $("input#size").val();
    var toppingOption = $("input#topping").val();
    var crustOption = $("input#size").val();
    var newPizza = new Pizza (sizeOption, toppingOption, crustOption);

    $("#pizza-order").show();
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingMode=$(this).val();
      $("#pizza-order").append(toppingMode + "<br>");
    });
    $("input:checkbox[name=size]:checked").each(function() {
      $("#price").append("$" + newPizza.price($("input:checkbox[name=size]:checked").val()) + (".00"));
      $("#price").show();
      $("#gif").show();
    });
    $("#order").hide();
  });
});
