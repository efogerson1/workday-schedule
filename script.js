// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const button = document.querySelector('.saveBtn');
const input9 = document.getElementById("text-9");
const input10 = document.getElementById("text-10");
const input11 = document.getElementById("text-11");
const input12 = document.getElementById("text-12");
const input13 = document.getElementById("text-13");
const input14 = document.getElementById("text-14");
const input15 = document.getElementById("text-15");
const input16 = document.getElementById("text-16");
const input17 = document.getElementById("text-17");

$(document).ready(function () {
  $('.saveBtn').click(function() {    // onClick function
localStorage.setItem("text-9", input9.value) || // using OR logic to save text into local storage for different text areas
localStorage.setItem("text-10", input10.value) ||
localStorage.setItem("text-11", input11.value) ||
localStorage.setItem("text-12", input12.value) ||
localStorage.setItem("text-13", input13.value) ||
localStorage.setItem("text-14", input14.value) ||
localStorage.setItem("text-15", input15.value) ||
localStorage.setItem("text-16", input16.value) ||
localStorage.setItem("text-17", input17.value);
});

var userData9;
var userData10;
var userData11;
var userData12;
var userData13;
var userData14;
var userData15;
var userData16;
var userData17;

function printToPage(){
  userData9 = localStorage.getItem('text-9');
  input9.textContent = userData9;
  userData10 = localStorage.getItem('text-10');
  input10.textContent = userData10;
  userData11 = localStorage.getItem('text-11');
  input11.textContent = userData11;
  userData12 = localStorage.getItem('text-12');
  input12.textContent = userData12;
  userData13 = localStorage.getItem('text-13');
  input13.textContent = userData13;
  userData14 = localStorage.getItem('text-14');
  input14.textContent = userData14;
  userData15 = localStorage.getItem('text-15');
  input15.textContent = userData15;
  userData16 = localStorage.getItem('text-16');
  input16.textContent = userData16;
  userData17 = localStorage.getItem('text-17');
  input17.textContent = userData17;
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
