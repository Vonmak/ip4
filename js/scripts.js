// start of business logic interface
// global functions
function Pizza(size, toppings, crust, total, orderNo) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total;
  this.orderNo = orderNo;
}
//   hiding data that will show once triggered
$(document).ready(function () {
  $(".order2").hide();
  $(".news").hide();
  $(".check-out").hide();
  $(".deliver").hide();
  $(".around").hide();
  $(".display-panel h3").hide();
  $(".location").hide();
  $(".about").show();
});
//  end of business logic

// start of user interface logic
$(document).ready(function () {
  let pSize = $(".size option:selected").val();
  let pCrust = $(".crust option:selected").val();
  let pToppings = $(".toppings option:selected").val();
  let pTotal = parseInt(pSize) + parseInt(pCrust) + parseInt(pToppings); //total of the values of options selected.
  let numberOfPizza = 1;
  let newTotal = 0;
  let count = 1;

  $(".quote").mouseenter(function () {
    $(".quote").hide();
    $(".img").show();
  });
  $(".img").mouseleave(function () {
    $(".quote").show();
    $(".img").hide();
  });
  //   button click in modal
  $(".order").click(function () {
    $(".quote").hide();
    $(".img").hide();
    $(".news").show();

    // appending the values to the table
    $("#size").html($(".size option:selected").text() + " - " + pSize);
    $("#crust").html($(".crust option:selected").text() + " - " + pCrust);
    $("#toppings").html(
      $(".toppings option:selected").text() + " - " + pToppings
    );
    $("#total").html(pTotal);
    $(".order2").show();
    $(".check-out").show();

    // clicking one more button
    $(".more").click(function () {
      numberOfPizza = numberOfPizza + 1;
      newTotal = newTotal + pTotal;
      $("#total").html(pTotal) * numberOfPizza;
      let pNew = new Pizza(pSize, pCrust, pToppings, pTotal, order); //using the object pizza declared above
      $("#total").html(pTotal * count);
      let newRow =
        "<tr><th id='ono'>" +
        numberOfPizza`<td id='total'>${pNew.pTotal}</td></tr>`;

      $("#pizza").append(newRow);
    });

    $(".check-out").click(function () {
      $(".more").hide();
      $(".check-out").hide();
      $(".display-panel h3").show();
      $(".deliver").show();
      $(".around").show();
      nTotal = newTotal + pTotal;

      $(".display-panel h3 span").html(nTotal);
    });
    $(".deliver").click(function () {
      let deliverFee = 300;
      $(".deliver").hide();
      $(".around").hide();
      $(".location").show();

      $(".display-panel h3 span").html(newTotal + deliverFee);
    });

    $(".enter").click(function () {
      let location = $(".location input").val();
      let message = "Please Enter your Location!!";
      if (location === "") {
        $(".location h4 span").html(message);
      } else {
        $(".location h4 span").html(location);
      }
    });
  });
  // reviews section
  $(".review1").click(function () {
    $(".review1").hide();
    $(".review2").show();
  });
  $(".review2").click(function () {
    $(".review2").hide();
    $(".review3").show();
  });
  $(".review3").click(function () {
    $(".review3").hide();
    $(".review1").show();
  });
});
