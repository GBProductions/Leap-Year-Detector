$(document).ready(function(event){
    $("form#form").submit(function(event){
      event.preventDefault();
      
      const userYear = parseInt($("input#leapYear").val());
    });
  });

  function isLeapYear(userYear) {
    if ((userYear % 4 === 0) && (userYear % 100 !== 0) || (userYear % 400 === 0)){

    $(".year1").show();
    $(".year1").text("is a leap year!");
      return true;
  } else {
    $(".notLeapYear").show();
    $(".notLeapYear").text("is not a leap year.");
    return false;
  }
});