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

/* var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

 const currentHour = dayjs().hour();
 const hours = [9,10,11,12,13,14,15,16,17];
 var elements = document.getElementsByClassName('all-time-blocks')

for (let i = 0; i < hours.length; i++){
var element = elements[i];

  if (currentHour > 10){
    element.classList.add('past');
  }


  if (currentHour > document.getElementById.parseInt("10")){
    $addClass("past");
  }

} */

$(document).ready(function() {
  var currentTime = dayjs();

  // Get the current hour component from the current time
  var currentHour = currentTime.hour();

  // Get all the time-block divs
  var timeBlocks = $('.time-block');

  // Iterate over the time-block divs and add or remove CSS classes based on the time of day
  timeBlocks.each(function() {
    var blockHour = parseInt($(this).attr('id'));

    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
});

  const timeBlockContainerEl = document.getElementById("all-time-blocks")
  console.log("time-block-container", timeBlockContainerEl)
  console.log("time-block-containerEl.children", timeBlockContainerEl.children)
  console.log("timeBlockContainerEl.children.length", timeBlockContainerEl.children.length)
  console.log("time-block-containerEl.children[0]", timeBlockContainerEl.children[0])
  for (let i = 0; i < timeBlockContainerEl.children.length; i++) {
    console.log(timeBlockContainerEl.children[i])
  }


// changing the children's id's to just a number means that all you have to do is use a built-in function like parseInt() to transform that string into a number

// use either javascript or jquery amd access the children's id and 
// compare it to your current time const now = dayjs().hour() , and if the now variable is greater then the child's id, 
// use past class, else if its less than, use future class, else use present class.

