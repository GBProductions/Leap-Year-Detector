$(document).ready(function(event){
    $("form#form").submit(function(event){
      event.preventDefault();
      
      const userYear = parseInt($("input#leapYear").val());

  function isLeapYear(userYear) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){

    $(".year1").show();
      return true;
  } else {
    $(".notLeapYear").show();
    return false;
  }
  };
  console.log(userYear);
  $(".year1").text("is a leap year!");
  $(".notLeapYear").text("is not a leap year.");

  });
});