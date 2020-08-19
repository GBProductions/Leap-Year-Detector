$(document).ready(function(event){
    $("form#form").submit(function(event){
      event.preventDefault();
      
      const userYear = parseInt($("input#leapYear").val());
    });
  });

  function isLeapYear(userYear) {
    if ((userYear % 4 === 0) && (userYear % 100 !== 0) || (userYear % 400 === 0)){
    $(".year1").show();
  } else {
    $(".notLeapYear").show();
    return false;
  }
}