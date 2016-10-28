$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    $("#pizza-order").show();
    $("input:checkbox[name=topping]:checked").each(function() {
      var toppingMode=$(this).val();
      $("#pizza-order").append(toppingMode + "<br>");
    });
    $("#order").hide();
  });
});
