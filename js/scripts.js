$(document).ready(function () {
  // revies section
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
