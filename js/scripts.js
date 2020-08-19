$(document).ready(function(event){
  $("form#form").submit(function(event){
    event.preventDefault();
    
    const userYear = parseInt("input#leapYear").val();
  
  $("").text(userYear);   
  });





// Business Logic --------
function isLeapYear(userYear) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)){
    return true;
} else {
  return false;
};

});

