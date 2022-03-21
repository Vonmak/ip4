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
  $(".check-out").hide();
  $(".deliver").hide();
  $(".around").hide();
  $(".display-panel h3").hide();
  $(".location").hide();
});
//  end of business logic

// start of user interface logic
$(document).ready(function () {
  //   button click in modal
  $(".order").click(function () {
    let pSize = $(".size option:selected").val();
    let pCrust = $(".crust option:selected").val();
    let pToppings = $(".toppings option:selected").val();
    let pTotal = parseInt(pSize) + parseInt(pCrust) + parseInt(pToppings); //total of the values of options selected.
    let order = 1;
    let newTotal = 0;
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
      let pSize = $(".size option:selected").val();
      let pCrust = $(".crust option:selected").val();
      let pToppings = $(".toppings option:selected").val();
      let pTotal = parseInt(pSize) + parseInt(pCrust) + parseInt(pToppings);
      order = order + 1;
      newTotal = newTotal + pTotal;

      let pNew = new Pizza(pSize, pCrust, pToppings, pTotal, order); //using the object pizza declared above
      //   append new pizza values to the table
      let newRow =
        '<tr><th scope="row">' +
        pNew.orderNo +
        '</th><td id="size">' +
        $(".size option:selected").text() +
        " - " +
        pNew.size +
        '</td><td id="crust">' +
        $(".crust option:selected").text() +
        " - " +
        pNew.crust +
        '</td><td id="toppings">' +
        $(".toppings option:selected").text() +
        " - " +
        pNew.toppings +
        '</td><td id="total">' +
        pNew.total +
        "</td></tr>";

      $("#pizza").append(newRow);
    });

    $(".check-out").click(function () {
      $(".more").hide();
      $(".check-out").hide();
      $(".display-panel h3").show();
      $(".deliver").show();
      $(".around").show();
      newTotal = newTotal + pTotal;

      $(".display-panel h3 span").html(newTotal);
    });
    $(".deliver").click(function () {
      let deliverFee = 300;
      $(".deliver").hide();
      $(".around").hide();
      $(".location").show();

      $(".display-panel h3 span").html(newTotal + deliverFee);
    });
    $(".around").click(function () {
      $(".deliver").hide();
      $(".around").hide();
      $(".location").show();
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

    })
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
