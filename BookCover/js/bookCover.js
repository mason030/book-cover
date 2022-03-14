$(document).ready(function() {

  function randNum () {
    var x = Math.floor(Math.random()*10);
    var y = Math.floor(Math.random()*10);
    var z = Math.floor(Math.random()*10);

    $(".number1").html(x);
    $(".number2").html(y);
    $(".number3").html(z);
  }

  window.onload = function () {
      setInterval(randNum, 1000);
  };

});
