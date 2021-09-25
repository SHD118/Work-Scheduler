//Set interval
//moment js
//bootstreap input forms
//buttons to save to local storage
//


//Create a function that takes the moment time and using set interval constantly call it back every second
//create time blocks either dynamically in Jquery or do it manually in the HTML
//find a way to to parse the html and compare its time block with the a moment time in hours/minutes/seconds
// change color of anything past the current time to gray if time of time block is less than the current time
// change to green if the timeblock is after current time
//change red if current time is overlapping current time
//when pressing save button it saves the text in timeblock to local storage so when refresh the text is still there
//after end of day refresh local storage

var timeBlocks = document.getElementById("time_blocks")
var startButton = document.getElementById("start")
var leadP = document.getElementById("currentDay")
var calendarDiv = document.getElementById("#calendar")


