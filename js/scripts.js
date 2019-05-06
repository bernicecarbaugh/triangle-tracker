// back end logic

var triangleType = function(num1, num2, num3) {
  // check if 3 sides equal -> equilateral
  if ( num1 === num2 && num2 === num3 ) {
    return "equilateral";
  // check if 2 sides are shorter than third side (call helper function) -> not a triangle
  } else if ( !isTriangle(num1, num2, num3) ) {
    return "not a triangle";
  // check if any 2 sides are the same -> isosceles
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    return "isosceles";
  // not any of the above -> scalene
  } else {
    return "scalene";
  }
}

var isTriangle = function(num1, num2, num3) {
  if (num1 + num2 <= num3 || num2 + num3 <= num1 || num1 + num3 <= num2 ) {
    return false ;
  } else {
    return true ;
  }
}

// front-end logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    // remove traces of previous runs
    $("#output").text("");
    $("#output").removeClass("well");

    // get user input; validate
    var num1 = parseInt($("input#side1").val());
    var num2 = parseInt($("input#side2").val());
    var num3 = parseInt($("input#side3").val());
    if ( isValid(num1, "div-side1") && isValid(num2, "div-side2") && isValid(num3, "div-side3") ) {
      $("#output").addClass("well");
      $("#output").text("Your triangle is " + triangleType(num1, num2, num3) + ".");
    } else {
      alert ("Please enter valid numbers.");    
    }
  })

  // check if passed input is valid; if valid, remove has-error class; else add has-error class 
  var isValid = function(numInput, domID) {
    if ( numInput ) {
      $("#" + domID).removeClass("has-error");
      return true;
    } else {
      $("#" + domID).addClass("has-error");
      return false;
    }
  }

})

