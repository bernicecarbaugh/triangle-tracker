// back end logic

var triangleType = function(num1, num2, num3) {
  var myType;
  // 3 sides equal -> equilateral
  if ( num1 === num2 && num2 === num3 ) {
    myType = "equilateral";
  // 1st 2 sides equal; if third side is <= sum other 2 then not triangle, else isosceles
  } else if (num1 === num2 ) {
    if ( num1 + num2 <= num3 ) {
      myType = "not a triangle";
    } else {
      myType = "isosceles" ;
    }
  // last 2 sides equal; if first side is <= sum other 2 then not triangle, else isosceles
  } else if (num2 === num3) {
    if ( num2 + num3 <= num1 ) {
      myType = "not a triangle";
    } else {
      myType = "isosceles" ;
    }
  // No sides equal; if one side is <= sum of other 2 then not triangle, else isosceles
  } else {
    if (num1 + num2 <= num3 || num2 + num3 <= num1 || num1 + num3 <= num2) {
      myType = "not a triangle";
    } else {
      myType = "scalene" ;
    }
  }
  return myType ;
}

// front-end logic
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    // remove traces of previous runs
    $("#output").text("");
    $("#output").removeClass("well");
    $("#div-side1").removeClass("has-error");
    $("#div-side2").removeClass("has-error");
    $("#div-side3").removeClass("has-error");

    // get user input; validate
    var num1 = parseInt($("input#side1").val());
    var num2 = parseInt($("input#side2").val());
    var num3 = parseInt($("input#side3").val());
    if ( num1 && num2 && num3 ) {
      $("#output").addClass("well");
      $("#output").text("Your triangle is " + triangleType(num1, num2, num3) + ".");
    } else {
      alert ("Please enter valid numbers.");
      if ( !num1 ) {
        $("#div-side1").addClass("has-error");
      }
      if ( !num2 ) {
        $("#div-side2").addClass("has-error");
      }
      if ( !num3 ) {
        $("#div-side3").addClass("has-error");
      }
    }
  })
})

