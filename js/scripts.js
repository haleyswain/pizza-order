function Pizza (size, topping, crust) {
  this.size = size;
  this.topping = topping;
  this.crust = crust;
}

Pizza.prototype.price = function () {
  var price = 0;
  for (var i = 0; i<this.size; i++) {
    price +=5
  }
  if (this.size ==="small") {
    price += 8;
  }
  if (this.size === "medium") {
    price +=10;
  }
  if (this.size === "large") {
    price += 13;
  }
  return price;
}


$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var sizeOption = $("select#size").val();
    var toppingOption = $("select#topping").val();
    var crustOption = $("select#crust").val();
    var newPizza = new Pizza (toppingOption, sizeOption, crustOption);

    $("#pizza-order").show();
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingMode=$(this).val();
      $("#pizza-order").append(toppingMode + "<br>");
    });
    $("input:checkbox[name=size]:checked").each(function() {
      $("#price").append("$" + newPizza.price() + (".00"));
      $("#price").show();
    });
    $("#order").hide();
  });
});
