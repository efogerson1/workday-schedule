// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const button = document.querySelector('.saveBtn');
const input9 = document.getElementById("text-9");
const input10 = document.getElementById("text-10");
const input11 = document.getElementById("text-11");
const savedData = [input9, input10, input11];

$(document).ready(function () {
  $('.saveBtn').click(function() {    // onClick function
localStorage.setItem("text-9", input9.value) || // using OR logic to save text into local storage for different text areas
localStorage.setItem("text-10", input10.value) ||
localStorage.setItem("text-11", input11.value);
});

var userData = JSON.parse(localStorage.getItem());
function printToPage(){
  userData = JSON.parse(localStorage.getItem(savedData));
}

printToPage();










  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
